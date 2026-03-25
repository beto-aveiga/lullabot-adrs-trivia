export default {
  id: 'php-strict-types',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What declaration should appear in every new PHP file?',
  options: [
    'declare(strict_mode=1);',
    'declare(strict_types=1);',
    "'use strict';",
    'declare(type_safety=true);',
  ],
  correctIndex: 1,
  explanation:
    'All new PHP files must include declare(strict_types=1) on the first line. The PHPCS sniff Generic.PHP.RequireStrictTypes can enforce this automatically in CI.',
  source: 'https://architecture.lullabot.com/adr/20211201-use-strict-types-in-php-code/',
};
