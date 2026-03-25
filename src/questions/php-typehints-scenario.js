export default {
  id: 'php-typehints-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What does “require type declarations” mean in practice for new PHP code?',
  options: [
    'Only method return types are required.',
    'Both parameter and return types should be declared whenever possible.',
    'Only class properties need types.',
    'Types are optional if PHPUnit tests exist.',
  ],
  correctIndex: 1,
  explanation: 'Consistent parameter and return typing improves static analysis, readability, and refactoring safety.',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
