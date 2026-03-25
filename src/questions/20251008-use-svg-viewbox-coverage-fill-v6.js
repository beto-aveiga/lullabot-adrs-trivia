export default {
  id: '20251008-use-svg-viewbox-coverage-fill-v6',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete the guidance for "Use Svg Viewbox": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'SVGs should include viewBox for a defined bounding canvas, but omit width and height. All sizing moves to CSS, making maintenance easier and SVGs more flexible. This follows the ADR "Use Svg Viewbox". This reinforces the ADR "Use Svg Viewbox".',
  source: 'https://architecture.lullabot.com/adr/20251008-use-svg-viewbox/',
};
