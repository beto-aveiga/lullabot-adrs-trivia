export default {
  id: 'php-strict-types-fill-1',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Use Strict Types In Php Code": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'All new PHP files must include declare(strict_types=1) on the first line. The PHPCS sniff Generic.PHP.RequireStrictTypes can enforce this automatically in CI. This follows the ADR "Use Strict Types In Php Code".',
  source: 'https://architecture.lullabot.com/adr/20211201-use-strict-types-in-php-code/',
};
