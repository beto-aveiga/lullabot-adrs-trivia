export default {
  id: 'ddev-local-scenario',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which trade-off does the DDEV ADR optimize for?',
  options: [
    'Maximum one-time setup speed on a single laptop.',
    'Consistent, reproducible local environments across the whole team.',
    'Avoiding Docker entirely.',
    'Running production traffic from local machines.',
  ],
  correctIndex: 1,
  explanation: 'DDEV standardizes local tooling in containers so onboarding, debugging, and collaboration are more predictable.',
  source: 'https://architecture.lullabot.com/adr/20211207-ddev-locals/',
};
