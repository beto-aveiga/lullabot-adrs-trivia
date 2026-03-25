export default {
  id: '20240221-use-svg-icons-coverage-insight-v5',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best aligns with ADR "Use Svg Icons"?',
  options: [
    'Follow the ADR "Use Svg Icons" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'SVGs are resolution independent, fully accessible, stylable with CSS when inlined, and require no extra network requests. They are preferred by the W3C for icon and geometric graphics. This follows the ADR "Use Svg Icons". This reinforces the ADR "Use Svg Icons".',
  source: 'https://architecture.lullabot.com/adr/20240221-use-svg-icons/',
};
