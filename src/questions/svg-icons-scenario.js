export default {
  id: 'svg-icons-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Why are SVG icons preferred over icon fonts in the ADR?',
  options: [
    'SVGs are scalable, accessible, and styleable without font loading quirks.',
    'SVGs always produce smaller files than fonts.',
    'SVGs eliminate all browser rendering bugs.',
    'Icon fonts cannot be cached by browsers.',
  ],
  correctIndex: 0,
  explanation: 'SVG better matches modern accessibility and rendering needs for iconography.',
  source: 'https://architecture.lullabot.com/adr/20240221-use-svg-icons/',
};
