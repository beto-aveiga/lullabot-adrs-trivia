export default {
  id: '20251210-create-deliberate-stacking-contexts-coverage-order-v3',
  type: 'order',
  category: 'frontend',
  question: 'Order a practical workflow for applying ADR "Create Deliberate Stacking Contexts".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'This question is based on the ADR "Create Deliberate Stacking Contexts". Use the ADR source link to review the exact recommendation and context. This reinforces the ADR "Create Deliberate Stacking Contexts".',
  source: 'https://architecture.lullabot.com/adr/20251210-create-deliberate-stacking-contexts/',
};
