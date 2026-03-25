export default {
  id: 'claro-admin-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Use Claro As Admin Theme".',
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
  explanation: 'Claro is the recommended Drupal administration theme. It ensures consistency, accessibility, and compatibility with contributed modules. Using a core theme avoids risks from unsupported third-party themes. This follows the ADR "Use Claro As Admin Theme". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220519-use-claro-as-admin-theme/',
};
