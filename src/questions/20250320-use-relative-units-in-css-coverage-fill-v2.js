export default {
  id: '20250320-use-relative-units-in-css-coverage-fill-v2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete the guidance for "Use Relative Units In Css": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Relative units like rem are recommended for all applicable properties so fonts respect browser preferences. Exceptions: border, box-shadow, and outline use absolute units. line-height should be unitless. This follows the ADR "Use Relative Units In Css". This reinforces the ADR "Use Relative Units In Css".',
  source: 'https://architecture.lullabot.com/adr/20250320-use-relative-units-in-css/',
};
