export default {
  id: 'block-user-one-insight-2-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20211026 in "One Time Login First Drupal User Account"?',
  options: [
    'reduces editorial confusion across content types',
    'improves local DX and repeatable workflows',
    'keeps production changes auditable and low risk',
    'The ADR "One Time Login First Drupal User Account" defines the team standard for this topic.',
  ],
  correctIndex: 3,
  explanation: 'User 1 should be blocked in production. Individual accounts with appropriate roles are created so actions are logged with the real user\'s identity. The account gets a random, discarded password. This follows the ADR "One Time Login First Drupal User Account".',
  source: 'https://architecture.lullabot.com/adr/20211026-one-time-login-first-drupal-user-account/',
};
