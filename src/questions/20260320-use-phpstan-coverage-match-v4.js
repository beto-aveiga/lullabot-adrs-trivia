export default {
  id: '20260320-use-phpstan-coverage-match-v4',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Use Phpstan".',
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
  explanation: 'Lullabot mandates PHPStan level 6, which checks argument types and return types. Legacy codebases can use a baseline file to ignore pre-existing violations while enforcing level 6 on new code. This follows the ADR "Use Phpstan". This reinforces the ADR "Use Phpstan".',
  source: 'https://architecture.lullabot.com/adr/20260320-use-phpstan/',
};
