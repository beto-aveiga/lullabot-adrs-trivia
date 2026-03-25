export default {
  id: 'dedicated-accounts-scenario',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Why should integrations use dedicated accounts owned by the client organization?',
  options: [
    'To avoid operational disruptions when individual team members roll off the project.',
    'To share passwords more easily between contractors.',
    'To bypass two-factor authentication requirements.',
    'To avoid creating separate CI credentials.',
  ],
  correctIndex: 0,
  explanation: 'Service ownership should survive personnel changes; dedicated accounts prevent lockouts and unclear ownership.',
  source: 'https://architecture.lullabot.com/adr/20220426-use-dedicated-accounts-service-integrations/',
};
