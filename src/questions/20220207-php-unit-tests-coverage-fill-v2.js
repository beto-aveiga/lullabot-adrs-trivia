export default {
  id: '20220207-php-unit-tests-coverage-fill-v2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "Php Unit Tests": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'PHPUnit is the standard. It\'s the most popular PHP testing framework, well-maintained, and used by both Drupal and Symfony core. Tests run via the PHPUnit CLI or IDE integrations. This follows the ADR "Php Unit Tests". This reinforces the ADR "Php Unit Tests".',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
