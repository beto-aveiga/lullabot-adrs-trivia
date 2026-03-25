export default {
  id: '20220320-prevent-language-change-coverage-order-v7',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Prevent Language Change".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'The language selector should be visible when creating content but disabled (locked) when editing existing content. This is done with a hook_form_alter that checks $node->isNew(). It prevents editors from acc... This follows the ADR "Prevent Language Change". This reinforces the ADR "Prevent Language Change".',
  source: 'https://architecture.lullabot.com/adr/20220320-prevent-language-change/',
};
