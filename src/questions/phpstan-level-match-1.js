export default {
  id: 'phpstan-level-match-1',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Use Phpstan".',
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
  explanation: 'Lullabot mandates PHPStan level 6, which checks argument types and return types. Legacy codebases can use a baseline file to ignore pre-existing violations while enforcing level 6 on new code. This follows the ADR "Use Phpstan". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20260320-use-phpstan/',
};
