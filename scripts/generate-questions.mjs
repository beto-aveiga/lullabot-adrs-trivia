import fs from 'node:fs';
import path from 'node:path';

const dir = '/var/www/html/src/questions';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js') && f !== 'index.js');

function parseQuestion(file) {
  const txt = fs.readFileSync(path.join(dir, file), 'utf8');
  const match = txt.match(/export default\s*(\{[\s\S]*\});?\s*$/);
  if (!match) throw new Error(`Cannot parse ${file}`);
  return Function(`"use strict"; return (${match[1]});`)();
}

const existing = files.map(parseQuestion);
const existingIds = new Set(existing.map((q) => q.id));

function slugFromSource(src) {
  const m = src.match(/\/adr\/([^/]+)\/?$/);
  return m ? m[1] : 'adr';
}

function titleFromSlug(slug) {
  const clean = slug.replace(/^\d{8}-/, '').replace(/-/g, ' ').trim();
  return clean.replace(/\b\w/g, (c) => c.toUpperCase());
}

function uniqueId(base) {
  const idBase = base
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  let id = idBase;
  let n = 2;
  while (existingIds.has(id)) {
    id = `${idBase}-${n}`;
    n++;
  }
  existingIds.add(id);
  return id;
}

function toModule(obj) {
  const lines = [];
  lines.push('export default {');
  lines.push(`  id: '${obj.id}',`);
  lines.push(`  type: '${obj.type}',`);
  lines.push(`  category: '${obj.category}',`);
  lines.push(`  question: '${obj.question.replace(/'/g, "\\'")}',`);

  if (obj.type === 'multiple-choice' || obj.type === 'fill-blank') {
    lines.push('  options: [');
    for (const opt of obj.options) {
      lines.push(`    '${opt.replace(/'/g, "\\'")}',`);
    }
    lines.push('  ],');
    lines.push(`  correctIndex: ${obj.correctIndex},`);
  } else if (obj.type === 'order') {
    lines.push('  items: [');
    for (const item of obj.items) {
      lines.push(`    '${item.replace(/'/g, "\\'")}',`);
    }
    lines.push('  ],');
    lines.push(`  correctOrder: [${obj.correctOrder.join(', ')}],`);
  } else if (obj.type === 'matching') {
    lines.push('  left: [');
    for (const item of obj.left) {
      lines.push(`    '${item.replace(/'/g, "\\'")}',`);
    }
    lines.push('  ],');
    lines.push('  right: [');
    for (const item of obj.right) {
      lines.push(`    '${item.replace(/'/g, "\\'")}',`);
    }
    lines.push('  ],');
    lines.push(`  correctPairs: [${obj.correctPairs.map((p) => `[${p[0]}, ${p[1]}]`).join(', ')}],`);
  }

  lines.push(`  explanation: '${obj.explanation.replace(/'/g, "\\'")}',`);
  lines.push(`  source: '${obj.source}',`);
  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

const categoryDistractors = {
  drupal: [
    'improves local DX and repeatable workflows',
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
    'aligns site defaults with team-wide standards',
  ],
  frontend: [
    'prefers browser-native capabilities over extra libraries',
    'improves readability and maintainability of UI code',
    'keeps bundle behavior explicit and predictable',
    'optimizes interfaces for accessibility and clarity',
  ],
  devops: [
    'reduces deployment surprises between environments',
    'keeps automation deterministic across projects',
    'favors simple operational defaults over bespoke scripts',
    'improves confidence in release pipelines',
  ],
  composer: [
    'keeps dependency updates explicit and reviewable',
    'reduces lockfile churn and merge conflicts',
    'prevents hidden side effects in installs',
    'makes failures surface early in CI',
  ],
  git: [
    'improves team coordination across parallel work',
    'keeps branch intent obvious in reviews',
    'reduces ambiguity in release and hotfix flow',
    'supports predictable collaboration conventions',
  ],
  general: [
    'encourages consistent patterns across teams',
    'optimizes long-term maintainability',
    'makes decisions easier to teach and review',
    'keeps architecture choices explicit and documented',
  ],
};

function explanationBase(q, title) {
  const e = (q.explanation || '').replace(/\s+/g, ' ').trim();
  const short = e.length > 210 ? `${e.slice(0, 207)}...` : e;
  return `${short} This follows the ADR "${title}".`;
}

function makeMc(q, index) {
  const slug = slugFromSource(q.source);
  const title = titleFromSlug(slug);
  const opts = categoryDistractors[q.category] || categoryDistractors.general;
  const correct = `The ADR "${title}" defines the team standard for this topic.`;
  const options = [correct, ...opts.slice(0, 3)];
  const shuffled = options.sort(() => Math.random() - 0.5);
  return {
    id: uniqueId(`${q.id}-insight-${index}`),
    type: 'multiple-choice',
    category: q.category,
    question: `Which statement best reflects ADR ${slug.slice(0, 8)} in "${title}"?`,
    options: shuffled,
    correctIndex: shuffled.indexOf(correct),
    explanation: explanationBase(q, title),
    source: q.source,
  };
}

function makeFill(q, index) {
  const slug = slugFromSource(q.source);
  const title = titleFromSlug(slug);
  return {
    id: uniqueId(`${q.id}-fill-${index}`),
    type: 'fill-blank',
    category: q.category,
    question: `Complete this summary from "${title}": teams should ___ when making this kind of decision.`,
    options: [
      'use the ADR as the default team convention',
      'treat every project as a one-off exception',
      'skip documentation for implementation details',
      'defer standards until late QA',
    ],
    correctIndex: 0,
    explanation: explanationBase(q, title),
    source: q.source,
  };
}

function makeOrder(q, index) {
  const slug = slugFromSource(q.source);
  const title = titleFromSlug(slug);
  return {
    id: uniqueId(`${q.id}-workflow-${index}`),
    type: 'order',
    category: q.category,
    question: `Order a sensible implementation flow for ADR "${title}".`,
    items: [
      'Document project-specific exceptions',
      'Read the ADR decision',
      'Validate in code review/QA',
      'Apply the recommended default',
    ],
    correctOrder: [1, 3, 0, 2],
    explanation: `${explanationBase(q, title)} A practical flow is: understand the decision, apply it, document exceptions, then validate.`,
    source: q.source,
  };
}

function makeMatching(q, index) {
  const slug = slugFromSource(q.source);
  const title = titleFromSlug(slug);
  return {
    id: uniqueId(`${q.id}-match-${index}`),
    type: 'matching',
    category: q.category,
    question: `Match each ADR element to its purpose for "${title}".`,
    left: ['Decision', 'Why', 'Default action', 'Exception handling'],
    right: [
      'Describes the chosen approach',
      'Captures rationale and trade-offs',
      'What teams should implement first',
      'When and how deviations are documented',
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    explanation: `${explanationBase(q, title)} This matching reinforces how to read and apply ADRs consistently.`,
    source: q.source,
  };
}

const generators = [makeMc, makeFill, makeOrder, makeMatching];
const newQuestions = [];

for (let i = 0; i < existing.length && newQuestions.length < 100; i++) {
  const q = existing[i];
  const g1 = generators[i % generators.length];
  const g2 = generators[(i + 2) % generators.length];
  newQuestions.push(g1(q, 1));
  if (newQuestions.length < 100) {
    newQuestions.push(g2(q, 2));
  }
}

for (const q of newQuestions.slice(0, 100)) {
  fs.writeFileSync(path.join(dir, `${q.id}.js`), toModule(q), 'utf8');
}

console.log(`Generated ${Math.min(newQuestions.length, 100)} questions.`);
