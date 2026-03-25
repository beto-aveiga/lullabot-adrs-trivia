export default {
  id: '20220721-organize-stylesheets-using-smacss-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best aligns with ADR "Organize Stylesheets Using Smacss"?',
  options: [
    'Follow the ADR "Organize Stylesheets Using Smacss" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'SMACSS (Scalable and Modular Architecture for CSS) is the standard methodology. It is also used by Drupal core, allowing developers to quickly understand how CSS is organized across projects. This follows the ADR "Organize Stylesheets Using Smacss". This reinforces the ADR "Organize Stylesheets Using Smacss".',
  source: 'https://architecture.lullabot.com/adr/20220721-organize-stylesheets-using-smacss/',
};
