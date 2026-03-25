export default {
  id: '20220112-type-hints-coverage-fill-v2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "Type Hints": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'All new PHP code must use type hints for class properties, method/function parameters, and return types. You can add return types to hook implementations even when the hook definition omits them. This follows the ADR "Type Hints". This reinforces the ADR "Type Hints".',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
