export default {
  id: '20211207-ddev-locals-coverage-fill-v2',
  type: 'fill-blank',
  category: 'devops',
  question: 'Complete the guidance for "Ddev Locals": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'DDEV is the standard because of its Docker-based containers and community support. Lando had performance issues, Vagrant requires extra tooling for Apple Silicon, and MAMP lacks container support for consist... This follows the ADR "Ddev Locals". This reinforces the ADR "Ddev Locals".',
  source: 'https://architecture.lullabot.com/adr/20211207-ddev-locals/',
};
