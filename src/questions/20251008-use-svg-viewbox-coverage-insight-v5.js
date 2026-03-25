export default {
  id: '20251008-use-svg-viewbox-coverage-insight-v5',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best aligns with ADR "Use Svg Viewbox"?',
  options: [
    'Follow the ADR "Use Svg Viewbox" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'SVGs should include viewBox for a defined bounding canvas, but omit width and height. All sizing moves to CSS, making maintenance easier and SVGs more flexible. This follows the ADR "Use Svg Viewbox". This reinforces the ADR "Use Svg Viewbox".',
  source: 'https://architecture.lullabot.com/adr/20251008-use-svg-viewbox/',
};
