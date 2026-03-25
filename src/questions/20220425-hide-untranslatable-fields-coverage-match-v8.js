export default {
  id: '20220425-hide-untranslatable-fields-coverage-match-v8',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Hide Untranslatable Fields".',
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
  explanation: 'Non-translatable fields must be hidden on translation forms. Drupal shows them by default, which leads editors to change values that affect ALL translations. The checkbox is under Content Language settings. This follows the ADR "Hide Untranslatable Fields". This reinforces the ADR "Hide Untranslatable Fields".',
  source: 'https://architecture.lullabot.com/adr/20220425-hide-untranslatable-fields/',
};
