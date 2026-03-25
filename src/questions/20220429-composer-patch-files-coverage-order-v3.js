export default {
  id: '20220429-composer-patch-files-coverage-order-v3',
  type: 'order',
  category: 'composer',
  question: 'Order a practical workflow for applying ADR "Composer Patch Files".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Patches must be downloaded and stored locally — upstream ones in patches/upstream/, project-specific ones in patches/local/. Remote URLs should never be used because their contents may change unexpectedly. This follows the ADR "Composer Patch Files". This reinforces the ADR "Composer Patch Files".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patch-files/',
};
