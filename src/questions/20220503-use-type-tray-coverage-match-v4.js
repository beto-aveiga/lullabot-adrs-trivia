export default {
  id: '20220503-use-type-tray-coverage-match-v4',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Use Type Tray".',
  left: [
    'Decision',
    'Reasoning',
    'Default action',
    'Exception note',
  ],
  right: [
    'What was chosen',
    'Why the team chose it',
    'What to do first in implementation',
    'How deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Type Tray enhances the "Add Content" page by allowing content types to be grouped into categories with icons and descriptions, helping editors choose the right content type. This follows the ADR "Use Type Tray". This reinforces the ADR "Use Type Tray".',
  source: 'https://architecture.lullabot.com/adr/20220503-use-type-tray/',
};
