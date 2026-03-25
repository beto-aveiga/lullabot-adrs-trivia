export default {
  id: '20220429-composer-patches-inline-coverage-order-v3',
  type: 'order',
  category: 'composer',
  question: 'Order a practical workflow for applying ADR "Composer Patches Inline".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Patches must be specified directly in composer.json, not a separate file. This ensures "composer validate" lints the entire Composer configuration, including patches. This follows the ADR "Composer Patches Inline". This reinforces the ADR "Composer Patches Inline".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patches-inline/',
};
