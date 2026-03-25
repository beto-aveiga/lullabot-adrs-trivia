export default {
  id: 'relative-css-units-insight-2',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best reflects ADR 20250320 in "Use Relative Units In Css"?',
  options: [
    'The ADR "Use Relative Units In Css" defines the team standard for this topic.',
    'prefers browser-native capabilities over extra libraries',
    'keeps bundle behavior explicit and predictable',
    'improves readability and maintainability of UI code',
  ],
  correctIndex: 0,
  explanation: 'Relative units like rem are recommended for all applicable properties so fonts respect browser preferences. Exceptions: border, box-shadow, and outline use absolute units. line-height should be unitless. This follows the ADR "Use Relative Units In Css".',
  source: 'https://architecture.lullabot.com/adr/20250320-use-relative-units-in-css/',
};
