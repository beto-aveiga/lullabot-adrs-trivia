export default {
  id: 'php-typehints-workflow-1',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Type Hints".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'All new PHP code must use type hints for class properties, method/function parameters, and return types. You can add return types to hook implementations even when the hook definition omits them. This follows the ADR "Type Hints". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
