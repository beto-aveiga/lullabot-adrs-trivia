export default {
  id: 'one-h1-match-1',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Use One H1 Per Page".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Only one h1 should exist per page. It conveys the page\'s purpose to all users. Screen reader users navigate via web rotors, so multiple h1s remove meaningful context. This follows the ADR "Use One H1 Per Page". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20250124-use-one-h1-per-page/',
};
