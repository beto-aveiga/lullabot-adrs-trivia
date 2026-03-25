export default {
  id: 'svg-viewbox-insight-2',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best reflects ADR 20251008 in "Use Svg Viewbox"?',
  options: [
    'keeps bundle behavior explicit and predictable',
    'improves readability and maintainability of UI code',
    'prefers browser-native capabilities over extra libraries',
    'The ADR "Use Svg Viewbox" defines the team standard for this topic.',
  ],
  correctIndex: 3,
  explanation: 'SVGs should include viewBox for a defined bounding canvas, but omit width and height. All sizing moves to CSS, making maintenance easier and SVGs more flexible. This follows the ADR "Use Svg Viewbox".',
  source: 'https://architecture.lullabot.com/adr/20251008-use-svg-viewbox/',
};
