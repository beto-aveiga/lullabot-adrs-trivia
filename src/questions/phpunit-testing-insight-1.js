export default {
  id: 'phpunit-testing-insight-1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20220207 in "Php Unit Tests"?',
  options: [
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
    'improves local DX and repeatable workflows',
    'The ADR "Php Unit Tests" defines the team standard for this topic.',
  ],
  correctIndex: 3,
  explanation: 'PHPUnit is the standard. It\'s the most popular PHP testing framework, well-maintained, and used by both Drupal and Symfony core. Tests run via the PHPUnit CLI or IDE integrations. This follows the ADR "Php Unit Tests".',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
