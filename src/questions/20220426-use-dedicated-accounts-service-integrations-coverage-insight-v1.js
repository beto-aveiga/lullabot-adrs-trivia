export default {
  id: '20220426-use-dedicated-accounts-service-integrations-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which statement best aligns with ADR "Use Dedicated Accounts Service Integrations"?',
  options: [
    'Follow the ADR "Use Dedicated Accounts Service Integrations" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Dedicated accounts must be used for integrations (GitHub, CI, Jira, Slack, etc.) so that rolling off a person has no side effect on operations. The email should be owned by the client, not @lullabot.com. This follows the ADR "Use Dedicated Accounts Service Integrations". This reinforces the ADR "Use Dedicated Accounts Service Integrations".',
  source: 'https://architecture.lullabot.com/adr/20220426-use-dedicated-accounts-service-integrations/',
};
