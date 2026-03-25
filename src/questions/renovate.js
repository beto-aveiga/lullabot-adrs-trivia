export default {
  id: 'renovate',
  type: 'multiple-choice',
  category: 'devops',
  question: 'What tool does Lullabot recommend for keeping third-party dependencies up to date?',
  options: [
    'Dependabot',
    'Renovate',
    'Pantheon Autopilot',
    'Violinist.io',
  ],
  correctIndex: 1,
  explanation:
    'Renovate is recommended because its PR-centric workflow with automated tests and peer review ensures quality before merging. It supports grouped updates and automatic merging for teams with good test coverage.',
  source: 'https://architecture.lullabot.com/adr/20251120-use-renovate/',
};
