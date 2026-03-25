export default {
  id: '20211201-use-strict-types-in-php-code-coverage-match-v8',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Use Strict Types In Php Code".',
  left: [
    'Decision',
    'Reasoning',
    'Default action',
    'Exception note',
  ],
  right: [
    'What was chosen',
    'Why the team chose it',
    'What to do first in implementation',
    'How deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'All new PHP files must include declare(strict_types=1) on the first line. The PHPCS sniff Generic.PHP.RequireStrictTypes can enforce this automatically in CI. This follows the ADR "Use Strict Types In Php Code". This reinforces the ADR "Use Strict Types In Php Code".',
  source: 'https://architecture.lullabot.com/adr/20211201-use-strict-types-in-php-code/',
};
