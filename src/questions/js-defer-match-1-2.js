export default {
  id: 'js-defer-match-1-2',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Javascript Loading Defaults".',
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
  explanation: 'Only the defer attribute is recommended. Defer already provides all the benefits of async and guarantees execution order. Adding both may result in inconsistent cross-browser behavior. This follows the ADR "Javascript Loading Defaults". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20231027-javascript-loading-defaults/',
};
