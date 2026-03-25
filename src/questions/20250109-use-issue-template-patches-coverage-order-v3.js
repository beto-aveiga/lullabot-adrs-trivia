export default {
  id: '20250109-use-issue-template-patches-coverage-order-v3',
  type: 'order',
  category: 'composer',
  question: 'Order a practical workflow for applying ADR "Use Issue Template Patches".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'This question is based on the ADR "Use Issue Template Patches". Use the ADR source link to review the exact recommendation and context. This reinforces the ADR "Use Issue Template Patches".',
  source: 'https://architecture.lullabot.com/adr/20250109-use-issue-template-patches/',
};
