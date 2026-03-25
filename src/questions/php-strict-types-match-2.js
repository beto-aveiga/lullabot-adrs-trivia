export default {
  id: 'php-strict-types-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Use Strict Types In Php Code".',
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
  explanation: 'All new PHP files must include declare(strict_types=1) on the first line. The PHPCS sniff Generic.PHP.RequireStrictTypes can enforce this automatically in CI. This follows the ADR "Use Strict Types In Php Code". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20211201-use-strict-types-in-php-code/',
};
