export default {
  id: '20211026-one-time-login-first-drupal-user-account-coverage-order-v7',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "One Time Login First Drupal User Account".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'User 1 should be blocked in production. Individual accounts with appropriate roles are created so actions are logged with the real user\'s identity. The account gets a random, discarded password. This follows the ADR "One Time Login First Drupal User Account". This reinforces the ADR "One Time Login First Drupal User Account".',
  source: 'https://architecture.lullabot.com/adr/20211026-one-time-login-first-drupal-user-account/',
};
