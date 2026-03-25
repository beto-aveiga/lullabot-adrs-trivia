export default {
  id: 'no-metatag-field-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "1 Do Not Add Metatags To Node Form".',
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
  explanation: 'The Metatag field should NOT be on node forms. It creates a heavy, complex form with every possible metatag option. Instead, configure metatags at the content-type level using tokens, and add simple dedicate... This follows the ADR "1 Do Not Add Metatags To Node Form". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220622-1-do-not-add-metatags-to-node-form/',
};
