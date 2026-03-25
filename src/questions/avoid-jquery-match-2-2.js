export default {
  id: 'avoid-jquery-match-2-2',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Avoid Using Jquery".',
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
  explanation: 'jQuery should be avoided in favor of native JavaScript. If a required dependency itself relies on jQuery, that dependency is acceptable. Native web platform APIs rarely make backwards-incompatible changes. This follows the ADR "Avoid Using Jquery". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20250416-avoid-using-jquery/',
};
