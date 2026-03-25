export default {
  id: 'field-naming-match-1',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Naming Fields".',
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
  explanation: 'Non-reusable fields use field_{bundle}__{name} with a double underscore between bundle and name. Reusable/shared fields simply use field_{name}. Multi-word names use single underscores within each part. This follows the ADR "Naming Fields". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220208-naming-fields/',
};
