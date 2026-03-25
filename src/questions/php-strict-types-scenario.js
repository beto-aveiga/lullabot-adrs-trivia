export default {
  id: 'php-strict-types-scenario',
  type: 'fill-blank',
  category: 'drupal',
  question: 'New PHP files should start with ___ to enforce strict scalar type behavior.',
  options: [
    'declare(strict_types=1);',
    'error_reporting(E_ALL);',
    'namespace StrictTypes;',
    'ini_set("strict", 1);',
  ],
  correctIndex: 0,
  explanation: 'The ADR standardizes strict typing declarations to reduce implicit type coercion bugs.',
  source: 'https://architecture.lullabot.com/adr/20211201-use-strict-types-in-php-code/',
};
