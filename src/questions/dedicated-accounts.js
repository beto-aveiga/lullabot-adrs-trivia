export default {
  id: 'dedicated-accounts',
  type: 'multiple-choice',
  category: 'devops',
  question: 'What type of account should be used for service integrations (e.g., CI, hosting)?',
  options: [
    'The tech lead\'s personal account',
    'A shared team account with a common password',
    'A dedicated account per integration, not tied to any person',
    'The client\'s admin account with limited permissions',
  ],
  correctIndex: 2,
  explanation:
    'Dedicated accounts must be used for integrations (GitHub, CI, Jira, Slack, etc.) so that rolling off a person has no side effect on operations. The email should be owned by the client, not @lullabot.com.',
  source: 'https://architecture.lullabot.com/adr/20220426-use-dedicated-accounts-service-integrations/',
};
