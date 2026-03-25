export default {
  id: '20220112-type-hints-coverage-match-v4',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Type Hints".',
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
  explanation: 'All new PHP code must use type hints for class properties, method/function parameters, and return types. You can add return types to hook implementations even when the hook definition omits them. This follows the ADR "Type Hints". This reinforces the ADR "Type Hints".',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
