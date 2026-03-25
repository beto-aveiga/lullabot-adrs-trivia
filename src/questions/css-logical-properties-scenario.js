export default {
  id: 'css-logical-properties-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What is the key benefit of replacing `left/right` CSS with logical properties?',
  options: [
    'It automatically adapts to writing direction (LTR/RTL) without duplicate style rules.',
    'It reduces CSS bundle size by 50%.',
    'It enables GPU acceleration for layout properties.',
    'It disables browser-specific prefixing.',
  ],
  correctIndex: 0,
  explanation: 'Logical properties describe intent rather than direction, so layouts adapt naturally across writing modes.',
  source: 'https://architecture.lullabot.com/adr/20220622-use-css-logical-properties/',
};
