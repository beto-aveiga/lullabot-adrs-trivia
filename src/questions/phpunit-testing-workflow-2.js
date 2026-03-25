export default {
  id: 'phpunit-testing-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Php Unit Tests".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'PHPUnit is the standard. It\'s the most popular PHP testing framework, well-maintained, and used by both Drupal and Symfony core. Tests run via the PHPUnit CLI or IDE integrations. This follows the ADR "Php Unit Tests". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
