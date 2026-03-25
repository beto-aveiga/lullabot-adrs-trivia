export default {
  id: 'svg-icons',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What format does Lullabot recommend for icons?',
  options: [
    'Icon fonts like Font Awesome',
    'PNG sprite sheets',
    'SVGs, either inline or with the symbol tag',
    'CSS-only icons using pseudo-elements',
  ],
  correctIndex: 2,
  explanation:
    'SVGs are resolution independent, fully accessible, stylable with CSS when inlined, and require no extra network requests. They are preferred by the W3C for icon and geometric graphics.',
  source: 'https://architecture.lullabot.com/adr/20240221-use-svg-icons/',
};
