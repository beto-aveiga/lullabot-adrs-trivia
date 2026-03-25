export default {
  id: '20251120-use-renovate-coverage-order-v7',
  type: 'order',
  category: 'devops',
  question: 'Order a practical workflow for applying ADR "Use Renovate".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Renovate is recommended because its PR-centric workflow with automated tests and peer review ensures quality before merging. It supports grouped updates and automatic merging for teams with good test coverage. This follows the ADR "Use Renovate". This reinforces the ADR "Use Renovate".',
  source: 'https://architecture.lullabot.com/adr/20251120-use-renovate/',
};
