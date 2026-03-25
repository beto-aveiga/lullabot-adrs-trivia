export default {
  id: 'dedicated-accounts-match-1',
  type: 'matching',
  category: 'devops',
  question: 'Match each ADR element to its purpose for "Use Dedicated Accounts Service Integrations".',
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
  explanation: 'Dedicated accounts must be used for integrations (GitHub, CI, Jira, Slack, etc.) so that rolling off a person has no side effect on operations. The email should be owned by the client, not @lullabot.com. This follows the ADR "Use Dedicated Accounts Service Integrations". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220426-use-dedicated-accounts-service-integrations/',
};
