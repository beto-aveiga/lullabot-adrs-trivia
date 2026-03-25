export default {
  id: '20220622-1-do-not-add-metatags-to-node-form-coverage-order-v7',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "1 Do Not Add Metatags To Node Form".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'The Metatag field should NOT be on node forms. It creates a heavy, complex form with every possible metatag option. Instead, configure metatags at the content-type level using tokens, and add simple dedicate... This follows the ADR "1 Do Not Add Metatags To Node Form". This reinforces the ADR "1 Do Not Add Metatags To Node Form".',
  source: 'https://architecture.lullabot.com/adr/20220622-1-do-not-add-metatags-to-node-form/',
};
