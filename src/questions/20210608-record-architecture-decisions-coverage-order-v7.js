export default {
  id: '20210608-record-architecture-decisions-coverage-order-v7',
  type: 'order',
  category: 'general',
  question: 'Order a practical workflow for applying ADR "Record Architecture Decisions".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'This question is based on the ADR "Record Architecture Decisions". Use the ADR source link to review the exact recommendation and context. This reinforces the ADR "Record Architecture Decisions".',
  source: 'https://architecture.lullabot.com/adr/20210608-record-architecture-decisions/',
};
