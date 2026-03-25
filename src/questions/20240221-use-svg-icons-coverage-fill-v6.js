export default {
  id: '20240221-use-svg-icons-coverage-fill-v6',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete the guidance for "Use Svg Icons": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'SVGs are resolution independent, fully accessible, stylable with CSS when inlined, and require no extra network requests. They are preferred by the W3C for icon and geometric graphics. This follows the ADR "Use Svg Icons". This reinforces the ADR "Use Svg Icons".',
  source: 'https://architecture.lullabot.com/adr/20240221-use-svg-icons/',
};
