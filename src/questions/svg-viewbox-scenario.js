export default {
  id: 'svg-viewbox-scenario',
  type: 'fill-blank',
  category: 'frontend',
  question: 'For flexible SVG sizing in CSS, include ___ and omit explicit width/height attributes.',
  options: [
    'viewBox',
    'preserveAspectRatio',
    'xmlns',
    'clipPathUnits',
  ],
  correctIndex: 0,
  explanation: 'A proper viewBox defines intrinsic coordinates while CSS controls rendered size.',
  source: 'https://architecture.lullabot.com/adr/20251008-use-svg-viewbox/',
};
