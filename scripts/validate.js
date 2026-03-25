import { readdir } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

const QUESTIONS_DIR = new URL('../src/questions/', import.meta.url).pathname;
const VALID_TYPES = ['multiple-choice', 'fill-blank', 'order', 'matching'];
const VALID_CATEGORIES = ['drupal', 'frontend', 'devops', 'composer', 'git', 'general'];

let errors = 0;
let count = 0;

function fail(file, msg) {
  console.error(`  FAIL [${file}]: ${msg}`);
  errors++;
}

const files = (await readdir(QUESTIONS_DIR)).filter(
  (f) => f.endsWith('.js') && f !== 'index.js'
);

for (const file of files) {
  count++;
  const fullPath = join(QUESTIONS_DIR, file);
  let q;
  try {
    q = (await import(pathToFileURL(fullPath).href)).default;
  } catch (e) {
    fail(file, `Failed to import: ${e.message}`);
    continue;
  }

  if (!q || typeof q !== 'object') {
    fail(file, 'Must export a default object');
    continue;
  }

  if (!q.id || typeof q.id !== 'string') fail(file, 'Missing or invalid "id"');
  if (!VALID_TYPES.includes(q.type)) fail(file, `Invalid type "${q.type}". Must be one of: ${VALID_TYPES.join(', ')}`);
  if (!VALID_CATEGORIES.includes(q.category)) fail(file, `Invalid category "${q.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`);
  if (!q.question || typeof q.question !== 'string') fail(file, 'Missing or invalid "question"');
  if (!q.explanation || typeof q.explanation !== 'string') fail(file, 'Missing or invalid "explanation"');
  if (!q.source || typeof q.source !== 'string') fail(file, 'Missing or invalid "source"');

  if (q.type === 'multiple-choice' || q.type === 'fill-blank') {
    if (!Array.isArray(q.options) || q.options.length < 2) fail(file, 'Must have at least 2 options');
    if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex >= (q.options?.length || 0)) {
      fail(file, `correctIndex ${q.correctIndex} out of range for ${q.options?.length || 0} options`);
    }
  }

  if (q.type === 'order') {
    if (!Array.isArray(q.items) || q.items.length < 2) fail(file, 'Must have at least 2 items');
    if (!Array.isArray(q.correctOrder) || q.correctOrder.length !== (q.items?.length || 0)) {
      fail(file, 'correctOrder length must match items length');
    }
  }

  if (q.type === 'matching') {
    if (!Array.isArray(q.left) || !Array.isArray(q.right)) fail(file, 'Must have "left" and "right" arrays');
    if ((q.left?.length || 0) !== (q.right?.length || 0)) fail(file, '"left" and "right" must have same length');
    if (!Array.isArray(q.correctPairs)) fail(file, 'Must have "correctPairs" array');
  }
}

const ids = files.map((f) => basename(f, '.js'));
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) {
  console.error(`  FAIL: Duplicate filenames: ${dupes.join(', ')}`);
  errors++;
}

console.log(`\nValidated ${count} questions.`);
if (errors > 0) {
  console.error(`${errors} error(s) found.`);
  process.exit(1);
} else {
  console.log('All questions valid!');
}
