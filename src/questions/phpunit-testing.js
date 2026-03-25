export default {
  id: 'phpunit-testing',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which testing framework does Lullabot recommend for PHP unit testing?',
  options: ['SimpleTest', 'PHPUnit', 'Codeception', 'Pest'],
  correctIndex: 1,
  explanation:
    'PHPUnit is the standard. It\'s the most popular PHP testing framework, well-maintained, and used by both Drupal and Symfony core. Tests run via the PHPUnit CLI or IDE integrations.',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
