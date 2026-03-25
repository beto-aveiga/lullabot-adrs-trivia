export default {
  id: 'block-user-one',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What should happen to the Drupal user 1 account in production environments?',
  options: [
    'Rename it to "admin_backup"',
    'Block it and use individual named accounts instead',
    'Delete it entirely from the database',
    'Assign it a strong password and share it with the team',
  ],
  correctIndex: 1,
  explanation:
    'User 1 should be blocked in production. Individual accounts with appropriate roles are created so actions are logged with the real user\'s identity. The account gets a random, discarded password.',
  source: 'https://architecture.lullabot.com/adr/20211026-one-time-login-first-drupal-user-account/',
};
