export default {
  id: 'smacss-css-fill-2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Organize Stylesheets Using Smacss": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'SMACSS (Scalable and Modular Architecture for CSS) is the standard methodology. It is also used by Drupal core, allowing developers to quickly understand how CSS is organized across projects. This follows the ADR "Organize Stylesheets Using Smacss".',
  source: 'https://architecture.lullabot.com/adr/20220721-organize-stylesheets-using-smacss/',
};
