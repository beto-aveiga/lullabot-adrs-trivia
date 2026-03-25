export default {
  id: 'renovate-fill-2',
  type: 'fill-blank',
  category: 'devops',
  question: 'Complete this summary from "Use Renovate": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Renovate is recommended because its PR-centric workflow with automated tests and peer review ensures quality before merging. It supports grouped updates and automatic merging for teams with good test coverage. This follows the ADR "Use Renovate".',
  source: 'https://architecture.lullabot.com/adr/20251120-use-renovate/',
};
