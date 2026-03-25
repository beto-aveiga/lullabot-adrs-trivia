export default {
  id: 'renovate-match-1',
  type: 'matching',
  category: 'devops',
  question: 'Match each ADR element to its purpose for "Use Renovate".',
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
  explanation: 'Renovate is recommended because its PR-centric workflow with automated tests and peer review ensures quality before merging. It supports grouped updates and automatic merging for teams with good test coverage. This follows the ADR "Use Renovate". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20251120-use-renovate/',
};
