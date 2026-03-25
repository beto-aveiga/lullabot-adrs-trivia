export default {
  id: 'renovate-scenario',
  type: 'multiple-choice',
  category: 'devops',
  question: 'What collaboration pattern does Renovate encourage according to the ADR?',
  options: [
    'Direct pushes to main for dependency updates.',
    'Automated pull requests reviewed and validated through CI.',
    'Manual quarterly dependency upgrades only.',
    'Dependency updates only during major releases.',
  ],
  correctIndex: 1,
  explanation: 'PR-based automation keeps update work visible, testable, and safely reviewable.',
  source: 'https://architecture.lullabot.com/adr/20251120-use-renovate/',
};
