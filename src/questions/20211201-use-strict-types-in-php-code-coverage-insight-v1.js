export default {
  id: '20211201-use-strict-types-in-php-code-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best aligns with ADR "Use Strict Types In Php Code"?',
  options: [
    'Follow the ADR "Use Strict Types In Php Code" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'All new PHP files must include declare(strict_types=1) on the first line. The PHPCS sniff Generic.PHP.RequireStrictTypes can enforce this automatically in CI. This follows the ADR "Use Strict Types In Php Code". This reinforces the ADR "Use Strict Types In Php Code".',
  source: 'https://architecture.lullabot.com/adr/20211201-use-strict-types-in-php-code/',
};
