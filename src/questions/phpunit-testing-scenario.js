export default {
  id: 'phpunit-testing-scenario',
  type: 'fill-blank',
  category: 'drupal',
  question: 'For PHP unit tests in this project standard, use ___ as the default framework.',
  options: [
    'PHPUnit',
    'Behat',
    'Pest only',
    'Codeception',
  ],
  correctIndex: 0,
  explanation: 'The ADR standardizes on PHPUnit for unit-level verification in PHP code.',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
