export default {
  id: 'svg-viewbox',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What property should SVG elements include, and which should they omit?',
  options: [
    'Include width/height, omit viewBox',
    'Include viewBox, omit width and height',
    'Include all three: viewBox, width, and height',
    'Omit all sizing — let CSS handle everything',
  ],
  correctIndex: 1,
  explanation:
    'SVGs should include viewBox for a defined bounding canvas, but omit width and height. All sizing moves to CSS, making maintenance easier and SVGs more flexible.',
  source: 'https://architecture.lullabot.com/adr/20251008-use-svg-viewbox/',
};
