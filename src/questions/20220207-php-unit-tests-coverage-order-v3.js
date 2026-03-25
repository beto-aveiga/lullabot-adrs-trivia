export default {
  id: '20220207-php-unit-tests-coverage-order-v3',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Php Unit Tests".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'PHPUnit is the standard. It\'s the most popular PHP testing framework, well-maintained, and used by both Drupal and Symfony core. Tests run via the PHPUnit CLI or IDE integrations. This follows the ADR "Php Unit Tests". This reinforces the ADR "Php Unit Tests".',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
