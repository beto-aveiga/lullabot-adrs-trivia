import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const QUESTIONS_DIR = new URL('../src/questions/', import.meta.url).pathname;
const ADR_INDEX_URL = 'https://architecture.lullabot.com/adrs/';
const LOW_COVERAGE_THRESHOLD = Number.parseInt(process.env.LOW_COVERAGE_THRESHOLD || '2', 10);
const GENERATED_NAME_RE = /-(insight|fill|workflow|match)-\d+(-\d+)?\.js$|-coverage-.*\.js$/;

function normalizeAdrUrl(url) {
  if (!url) return '';
  return url.replace(/\/+$/, '') + '/';
}

function extractAdrLinks(html) {
  const links = new Set();
  const re = /href="(\/adr\/[^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    links.add(normalizeAdrUrl(`https://architecture.lullabot.com${m[1]}`));
  }
  return [...links].sort();
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

async function getRemoteAdrs() {
  const res = await fetch(ADR_INDEX_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch ADR index: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();
  const links = extractAdrLinks(html);
  return links;
}

async function loadQuestionFiles() {
  const files = (await readdir(QUESTIONS_DIR)).filter(
    (f) => f.endsWith('.js') && f !== 'index.js' && !GENERATED_NAME_RE.test(f)
  );
  const questions = [];
  for (const file of files) {
    const fullPath = join(QUESTIONS_DIR, file);
    const q = (await import(pathToFileURL(fullPath).href)).default;
    if (q && typeof q === 'object') {
      questions.push(q);
    }
  }
  return questions;
}

function countByAdr(questions) {
  const byAdr = new Map();
  for (const q of questions) {
    const source = normalizeAdrUrl(q.source);
    if (!source.includes('/adr/')) continue;
    byAdr.set(source, (byAdr.get(source) || 0) + 1);
  }
  return byAdr;
}

function printCoverage(rows) {
  console.log('\nADR coverage report');
  console.log('-------------------');
  console.log('Legend: NONE=0, LOW<=threshold, OK>threshold');
  console.log(`Threshold: ${LOW_COVERAGE_THRESHOLD}\n`);
  for (const row of rows) {
    console.log(`${String(row.count).padStart(3, ' ')}  ${row.flag.padEnd(4, ' ')}  ${row.url}`);
  }
}

async function main() {
  const questions = await loadQuestionFiles();
  const byAdr = countByAdr(questions);
  const remoteAdrs = await getRemoteAdrs();

  const deprecatedSet = new Set();
  for (const url of remoteAdrs) {
    if (await isDeprecatedAdr(url)) {
      deprecatedSet.add(url);
    }
  }

  const activeRemote = remoteAdrs.filter((url) => !deprecatedSet.has(url));
  const rows = activeRemote.map((url) => {
    const count = byAdr.get(url) || 0;
    const flag = count === 0 ? 'NONE' : count <= LOW_COVERAGE_THRESHOLD ? 'LOW' : 'OK';
    return { url, count, flag };
  });

  rows.sort((a, b) => a.count - b.count || a.url.localeCompare(b.url));
  printCoverage(rows);

  const none = rows.filter((r) => r.count === 0);
  const low = rows.filter((r) => r.count > 0 && r.count <= LOW_COVERAGE_THRESHOLD);
  const trackedSources = [...byAdr.keys()];
  const localNotInActiveRemote = trackedSources.filter((src) => !activeRemote.includes(src));

  console.log('\nSummary');
  console.log('-------');
  console.log(`Question files: ${questions.length}`);
  console.log(`Active remote ADRs: ${activeRemote.length}`);
  console.log(`Deprecated remote ADRs ignored: ${deprecatedSet.size}`);
  console.log(`ADRs with no questions: ${none.length}`);
  console.log(`ADRs with low coverage (<=${LOW_COVERAGE_THRESHOLD}): ${low.length}`);
  console.log(`Local ADR sources not in active remote set: ${localNotInActiveRemote.length}`);

  if (none.length > 0) {
    console.log('\nNo coverage ADRs (top 20)');
    for (const row of none.slice(0, 20)) {
      console.log(`- ${row.url}`);
    }
  }

  if (low.length > 0) {
    console.log('\nLow coverage ADRs (top 20)');
    for (const row of low.slice(0, 20)) {
      console.log(`- (${row.count}) ${row.url}`);
    }
  }

  if (localNotInActiveRemote.length > 0) {
    console.log('\nLocal sources not in active remote ADR list');
    for (const url of localNotInActiveRemote.sort()) {
      console.log(`- ${url}`);
    }
  }
}

main().catch((e) => {
  console.error(`Coverage check failed: ${e.message}`);
  process.exit(1);
});
