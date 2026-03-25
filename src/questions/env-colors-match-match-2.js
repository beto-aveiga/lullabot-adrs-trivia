export default {
  id: 'env-colors-match-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Environment Indicator".',
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
  explanation: 'The standard colors are: Live = red (#e7131a), Staging = orange (#b85c00), Development = green (#307b24), Local = grey (#505050). Branch previews use blue. This follows the ADR "Environment Indicator". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
