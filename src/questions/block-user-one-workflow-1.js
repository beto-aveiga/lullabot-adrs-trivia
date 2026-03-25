export default {
  id: 'block-user-one-workflow-1',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "One Time Login First Drupal User Account".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'User 1 should be blocked in production. Individual accounts with appropriate roles are created so actions are logged with the real user\'s identity. The account gets a random, discarded password. This follows the ADR "One Time Login First Drupal User Account". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20211026-one-time-login-first-drupal-user-account/',
};
