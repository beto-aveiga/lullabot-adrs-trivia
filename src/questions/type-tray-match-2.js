export default {
  id: 'type-tray-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Use Type Tray".',
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
  explanation: 'Type Tray enhances the "Add Content" page by allowing content types to be grouped into categories with icons and descriptions, helping editors choose the right content type. This follows the ADR "Use Type Tray". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220503-use-type-tray/',
};
