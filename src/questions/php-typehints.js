export default {
  id: 'php-typehints',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What does Lullabot require in all new PHP code regarding type declarations?',
  options: [
    'Type hints on class properties, parameters, and return types',
    'Type hints only on public method parameters',
    'Type hints only on return types of services',
    'Type hints only in entity and plugin classes',
  ],
  correctIndex: 0,
  explanation:
    'All new PHP code must use type hints for class properties, method/function parameters, and return types. You can add return types to hook implementations even when the hook definition omits them.',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
