export default {
  id: '20250124-use-one-h1-per-page-coverage-fill-v2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete the guidance for "Use One H1 Per Page": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Only one h1 should exist per page. It conveys the page\'s purpose to all users. Screen reader users navigate via web rotors, so multiple h1s remove meaningful context. This follows the ADR "Use One H1 Per Page". This reinforces the ADR "Use One H1 Per Page".',
  source: 'https://architecture.lullabot.com/adr/20250124-use-one-h1-per-page/',
};
