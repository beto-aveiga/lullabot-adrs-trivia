export default {
  id: 'js-strict-mode-insight-1',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best reflects ADR 20220816 in "Use Js Strict Mode"?',
  options: [
    'prefers browser-native capabilities over extra libraries',
    'The ADR "Use Js Strict Mode" defines the team standard for this topic.',
    'improves readability and maintainability of UI code',
    'keeps bundle behavior explicit and predictable',
  ],
  correctIndex: 1,
  explanation: 'Strict mode should be declared within top-level functions. If using ES modules, strict mode is implied and should not be declared. For bundled non-vendor code, it can be declared once at the top. This follows the ADR "Use Js Strict Mode".',
  source: 'https://architecture.lullabot.com/adr/20220816-use-js-strict-mode/',
};
