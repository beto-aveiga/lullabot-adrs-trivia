export default {
  id: '20260320-files-listing-access-coverage-order-v3',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Files Listing Access".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'This question is based on the ADR "Files Listing Access". Use the ADR source link to review the exact recommendation and context. This reinforces the ADR "Files Listing Access".',
  source: 'https://architecture.lullabot.com/adr/20260320-files-listing-access/',
};
