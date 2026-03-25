export default {
  id: 'css-logical-properties',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Use ___ instead of `margin-left` when writing directional CSS.',
  options: [
    'margin-inline-start',
    'margin-block-start',
    'padding-inline-start',
    'margin-logical-left',
  ],
  correctIndex: 0,
  explanation:
    'CSS Logical Properties replace directional terms with logical equivalents. margin-inline-start replaces margin-left in LTR layouts, making styles automatically support any writing direction.',
  source: 'https://architecture.lullabot.com/adr/20220622-use-css-logical-properties/',
};
