export default {
  id: 'block-user-one-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What is the strongest reason to block user 1 in production?',
  options: [
    'It reduces memory usage during cron runs.',
    'It guarantees all content edits are attributed to named users for auditing.',
    'It is required for caching to work.',
    'It enables anonymous page cache invalidation.',
  ],
  correctIndex: 1,
  explanation: 'The goal is accountability and operational safety: actions should be tied to real user accounts, not a shared superuser.',
  source: 'https://architecture.lullabot.com/adr/20211026-one-time-login-first-drupal-user-account/',
};
