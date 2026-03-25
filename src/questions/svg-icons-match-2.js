export default {
  id: 'svg-icons-match-2',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Use Svg Icons".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'SVGs are resolution independent, fully accessible, stylable with CSS when inlined, and require no extra network requests. They are preferred by the W3C for icon and geometric graphics. This follows the ADR "Use Svg Icons". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20240221-use-svg-icons/',
};
