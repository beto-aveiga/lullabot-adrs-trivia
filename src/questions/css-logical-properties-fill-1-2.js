export default {
  id: 'css-logical-properties-fill-1-2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Use Css Logical Properties": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'CSS Logical Properties replace directional terms with logical equivalents. margin-inline-start replaces margin-left in LTR layouts, making styles automatically support any writing direction. This follows the ADR "Use Css Logical Properties".',
  source: 'https://architecture.lullabot.com/adr/20220622-use-css-logical-properties/',
};
