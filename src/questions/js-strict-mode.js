export default {
  id: 'js-strict-mode',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'How should JavaScript strict mode be declared?',
  options: [
    'At the top of every file, always',
    'Within all top-level functions (nested functions inherit it)',
    'Only in test files for safety',
    'Only when using CommonJS modules',
  ],
  correctIndex: 1,
  explanation:
    'Strict mode should be declared within top-level functions. If using ES modules, strict mode is implied and should not be declared. For bundled non-vendor code, it can be declared once at the top.',
  source: 'https://architecture.lullabot.com/adr/20220816-use-js-strict-mode/',
};
