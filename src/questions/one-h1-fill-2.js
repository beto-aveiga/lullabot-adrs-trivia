export default {
  id: 'one-h1-fill-2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Use One H1 Per Page": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Only one h1 should exist per page. It conveys the page\'s purpose to all users. Screen reader users navigate via web rotors, so multiple h1s remove meaningful context. This follows the ADR "Use One H1 Per Page".',
  source: 'https://architecture.lullabot.com/adr/20250124-use-one-h1-per-page/',
};
