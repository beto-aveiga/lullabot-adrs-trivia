export default {
  id: '20251120-use-renovate-coverage-fill-v6',
  type: 'fill-blank',
  category: 'devops',
  question: 'Complete the guidance for "Use Renovate": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Renovate is recommended because its PR-centric workflow with automated tests and peer review ensures quality before merging. It supports grouped updates and automatic merging for teams with good test coverage. This follows the ADR "Use Renovate". This reinforces the ADR "Use Renovate".',
  source: 'https://architecture.lullabot.com/adr/20251120-use-renovate/',
};
