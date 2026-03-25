export default {
  id: '20220429-composer-patches-inline-coverage-match-v4',
  type: 'matching',
  category: 'composer',
  question: 'Match each ADR concept to its purpose for "Composer Patches Inline".',
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
  explanation: 'Patches must be specified directly in composer.json, not a separate file. This ensures "composer validate" lints the entire Composer configuration, including patches. This follows the ADR "Composer Patches Inline". This reinforces the ADR "Composer Patches Inline".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patches-inline/',
};
