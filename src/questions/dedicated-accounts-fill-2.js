export default {
  id: 'dedicated-accounts-fill-2',
  type: 'fill-blank',
  category: 'devops',
  question: 'Complete this summary from "Use Dedicated Accounts Service Integrations": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Dedicated accounts must be used for integrations (GitHub, CI, Jira, Slack, etc.) so that rolling off a person has no side effect on operations. The email should be owned by the client, not @lullabot.com. This follows the ADR "Use Dedicated Accounts Service Integrations".',
  source: 'https://architecture.lullabot.com/adr/20220426-use-dedicated-accounts-service-integrations/',
};
