export default {
  id: 'php-typehints-insight-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20220112 in "Type Hints"?',
  options: [
    'improves local DX and repeatable workflows',
    'reduces editorial confusion across content types',
    'The ADR "Type Hints" defines the team standard for this topic.',
    'keeps production changes auditable and low risk',
  ],
  correctIndex: 2,
  explanation: 'All new PHP code must use type hints for class properties, method/function parameters, and return types. You can add return types to hook implementations even when the hook definition omits them. This follows the ADR "Type Hints".',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
