export default {
  id: 'svg-icons-fill-1',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Use Svg Icons": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'SVGs are resolution independent, fully accessible, stylable with CSS when inlined, and require no extra network requests. They are preferred by the W3C for icon and geometric graphics. This follows the ADR "Use Svg Icons".',
  source: 'https://architecture.lullabot.com/adr/20240221-use-svg-icons/',
};
