import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const QUESTIONS_DIR = new URL('../src/questions/', import.meta.url).pathname;
const ADR_INDEX_URL = 'https://architecture.lullabot.com/adrs/';
const TARGET_COUNT = Number.parseInt(process.argv[2] || '100', 10);

function normalizeAdrUrl(url) {
  return url.replace(/\/+$/, '') + '/';
}

function slugFromUrl(url) {
  return normalizeAdrUrl(url).replace(/^.*\/adr\//, '').replace(/\/$/, '');
}

function titleFromSlug(slug) {
  return slug
    .replace(/^\d{8}-/, '')
    .replace(/-/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function inferCategory(slug) {
  const s = slug.toLowerCase();
  if (/drupal|field|twig|views|metatag|language|entity|node|claro|type|image|access/.test(s)) return 'drupal';
  if (/css|js|javascript|typescript|svg|font|placeholder|stacking/.test(s)) return 'frontend';
  if (/ddev|deploy|build|stage|file|cache|renovate|phpstan/.test(s)) return 'devops';
  if (/composer|patch/.test(s)) return 'composer';
  if (/git|branch|issue-template/.test(s)) return 'git';
  return 'general';
}

function extractAdrLinks(html) {
  const out = new Set();
  const re = /href="(\/adr\/[^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    out.add(normalizeAdrUrl(`https://architecture.lullabot.com${m[1]}`));
  }
  return [...out].sort();
}

async function getRemoteAdrs() {
  const res = await fetch(ADR_INDEX_URL);
  if (!res.ok) throw new Error(`Failed to fetch ADR index (${res.status})`);
  const html = await res.text();
  return extractAdrLinks(html);
}

async function isDeprecatedAdr(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;
    const html = await res.text();
    return /class="status deprecated"/i.test(html);
  } catch {
    return false;
  }
}

async function loadQuestions() {
  const files = (await readdir(QUESTIONS_DIR)).filter((f) => f.endsWith('.js') && f !== 'index.js');
  const all = [];
  for (const f of files) {
    const q = (await import(pathToFileURL(join(QUESTIONS_DIR, f)).href)).default;
    if (q && typeof q === 'object') all.push(q);
  }
  return all;
}

function uniqueId(base, existingIds) {
  const root = base
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  let id = root;
  let i = 2;
  while (existingIds.has(id)) {
    id = `${root}-${i}`;
    i++;
  }
  existingIds.add(id);
  return id;
}

function esc(s) {
  return String(s).replace(/'/g, "\\'");
}

function toModule(q) {
  const lines = [];
  lines.push('export default {');
  lines.push(`  id: '${esc(q.id)}',`);
  lines.push(`  type: '${esc(q.type)}',`);
  lines.push(`  category: '${esc(q.category)}',`);
  lines.push(`  question: '${esc(q.question)}',`);
  if (q.type === 'multiple-choice' || q.type === 'fill-blank') {
    lines.push('  options: [');
    for (const o of q.options) lines.push(`    '${esc(o)}',`);
    lines.push('  ],');
    lines.push(`  correctIndex: ${q.correctIndex},`);
  } else if (q.type === 'order') {
    lines.push('  items: [');
    for (const it of q.items) lines.push(`    '${esc(it)}',`);
    lines.push('  ],');
    lines.push(`  correctOrder: [${q.correctOrder.join(', ')}],`);
  } else {
    lines.push('  left: [');
    for (const it of q.left) lines.push(`    '${esc(it)}',`);
    lines.push('  ],');
    lines.push('  right: [');
    for (const it of q.right) lines.push(`    '${esc(it)}',`);
    lines.push('  ],');
    lines.push(`  correctPairs: [${q.correctPairs.map((p) => `[${p[0]}, ${p[1]}]`).join(', ')}],`);
  }
  lines.push(`  explanation: '${esc(q.explanation)}',`);
  lines.push(`  source: '${esc(q.source)}',`);
  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

function pickSeedForAdr(allQuestions, adrUrl) {
  return allQuestions.find((q) => normalizeAdrUrl(q.source) === adrUrl) || null;
}

function makeExplanation(seed, title) {
  if (seed?.explanation) {
    const short = seed.explanation.replace(/\s+/g, ' ').trim();
    return `${short} This reinforces the ADR "${title}".`;
  }
  return `This question is based on the ADR "${title}". Use the ADR source link to review the exact recommendation and context.`;
}

function makeQuestion(typeIdx, adrUrl, seed, existingIds) {
  const slug = slugFromUrl(adrUrl);
  const title = titleFromSlug(slug);
  const category = seed?.category || inferCategory(slug);
  const explanation = makeExplanation(seed, title);
  const variant = (typeIdx % 8) + 1;

  if (typeIdx % 4 === 0) {
    const correct = `Follow the ADR "${title}" as the default team convention.`;
    const options = [
      correct,
      'Treat each implementation as an undocumented one-off.',
      'Delay the decision until final QA to reduce upfront effort.',
      'Prefer personal preference over team standards for this topic.',
    ];
    const id = uniqueId(`${slug}-coverage-insight-v${variant}`, existingIds);
    return {
      id,
      type: 'multiple-choice',
      category,
      question: `Which statement best aligns with ADR "${title}"?`,
      options,
      correctIndex: 0,
      explanation,
      source: adrUrl,
    };
  }

  if (typeIdx % 4 === 1) {
    const id = uniqueId(`${slug}-coverage-fill-v${variant}`, existingIds);
    return {
      id,
      type: 'fill-blank',
      category,
      question: `Complete the guidance for "${title}": teams should ___ when this scenario appears.`,
      options: [
        'apply the ADR recommendation first, then document exceptions',
        'ignore prior decisions when deadlines are tight',
        'skip implementation details and rely on oral knowledge',
        'optimize for novelty over maintainability',
      ],
      correctIndex: 0,
      explanation,
      source: adrUrl,
    };
  }

  if (typeIdx % 4 === 2) {
    const items = [
      'Read the ADR and clarify scope',
      'Implement the recommended default',
      'Record justified exceptions',
      'Verify behavior in review or QA',
    ];
    const id = uniqueId(`${slug}-coverage-order-v${variant}`, existingIds);
    return {
      id,
      type: 'order',
      category,
      question: `Order a practical workflow for applying ADR "${title}".`,
      items: [items[2], items[0], items[3], items[1]],
      correctOrder: [1, 3, 0, 2],
      explanation,
      source: adrUrl,
    };
  }

  const id = uniqueId(`${slug}-coverage-match-v${variant}`, existingIds);
  return {
    id,
    type: 'matching',
    category,
    question: `Match each ADR concept to its purpose for "${title}".`,
    left: ['Decision', 'Reasoning', 'Default action', 'Exception note'],
    right: [
      'What was chosen',
      'Why the team chose it',
      'What to do first in implementation',
      'How deviations are documented',
    ],
    correctPairs: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    explanation,
    source: adrUrl,
  };
}

async function main() {
  const allQuestions = await loadQuestions();
  const existingIds = new Set(allQuestions.map((q) => q.id));
  const counts = new Map();
  for (const q of allQuestions) {
    const source = normalizeAdrUrl(q.source || '');
    if (!source.includes('/adr/')) continue;
    counts.set(source, (counts.get(source) || 0) + 1);
  }

  const remote = await getRemoteAdrs();
  const deprecated = new Set();
  for (const url of remote) {
    if (await isDeprecatedAdr(url)) deprecated.add(url);
  }
  const active = remote.filter((url) => !deprecated.has(url));

  const created = [];
  for (let i = 0; i < TARGET_COUNT; i++) {
    const ranked = [...active].sort((a, b) => {
      const ca = counts.get(a) || 0;
      const cb = counts.get(b) || 0;
      if (ca !== cb) return ca - cb;
      return a.localeCompare(b);
    });
    const adrUrl = ranked[0];
    const seed = pickSeedForAdr(allQuestions, adrUrl);
    const q = makeQuestion(i, adrUrl, seed, existingIds);
    await writeFile(join(QUESTIONS_DIR, `${q.id}.js`), toModule(q), 'utf8');
    created.push(q);
    allQuestions.push(q);
    counts.set(adrUrl, (counts.get(adrUrl) || 0) + 1);
  }

  const createdByAdr = new Map();
  for (const q of created) {
    const src = normalizeAdrUrl(q.source);
    createdByAdr.set(src, (createdByAdr.get(src) || 0) + 1);
  }

  console.log(`Generated ${created.length} targeted questions.`);
  console.log(`Active ADRs considered: ${active.length}`);
  console.log(`Deprecated ADRs ignored: ${deprecated.size}`);
  console.log('Top ADRs by generated count:');
  [...createdByAdr.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 20)
    .forEach(([url, n]) => console.log(`- ${n} ${url}`));
}

main().catch((e) => {
  console.error(`Targeted generation failed: ${e.message}`);
  process.exit(1);
});
