export default {
  id: '20260320-use-phpstan-coverage-order-v3',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Use Phpstan".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Lullabot mandates PHPStan level 6, which checks argument types and return types. Legacy codebases can use a baseline file to ignore pre-existing violations while enforcing level 6 on new code. This follows the ADR "Use Phpstan". This reinforces the ADR "Use Phpstan".',
  source: 'https://architecture.lullabot.com/adr/20260320-use-phpstan/',
};
