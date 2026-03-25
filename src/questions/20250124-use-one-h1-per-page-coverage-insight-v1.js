export default {
  id: '20250124-use-one-h1-per-page-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best aligns with ADR "Use One H1 Per Page"?',
  options: [
    'Follow the ADR "Use One H1 Per Page" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Only one h1 should exist per page. It conveys the page\'s purpose to all users. Screen reader users navigate via web rotors, so multiple h1s remove meaningful context. This follows the ADR "Use One H1 Per Page". This reinforces the ADR "Use One H1 Per Page".',
  source: 'https://architecture.lullabot.com/adr/20250124-use-one-h1-per-page/',
};
