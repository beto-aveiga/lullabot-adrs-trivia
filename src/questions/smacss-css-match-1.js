export default {
  id: 'smacss-css-match-1',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Organize Stylesheets Using Smacss".',
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
  explanation: 'SMACSS (Scalable and Modular Architecture for CSS) is the standard methodology. It is also used by Drupal core, allowing developers to quickly understand how CSS is organized across projects. This follows the ADR "Organize Stylesheets Using Smacss". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220721-organize-stylesheets-using-smacss/',
};
