export default {
  id: 'no-placeholder-text-insight-2',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best reflects ADR 20240212 in "Do Not Use Placeholders Forms"?',
  options: [
    'The ADR "Do Not Use Placeholders Forms" defines the team standard for this topic.',
    'prefers browser-native capabilities over extra libraries',
    'keeps bundle behavior explicit and predictable',
    'improves readability and maintainability of UI code',
  ],
  correctIndex: 0,
  explanation: 'Placeholder text has insufficient contrast, vanishes when content is entered, and displays poorly in Windows High Contrast Mode. Static labels and help text are more accessible. This follows the ADR "Do Not Use Placeholders Forms".',
  source: 'https://architecture.lullabot.com/adr/20240212-do-not-use-placeholders-forms/',
};
