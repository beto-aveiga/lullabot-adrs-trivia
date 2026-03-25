export default {
  id: 'phpstan-level',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'At what PHPStan level should all new PHP code be compliant according to Lullabot\'s ADR?',
  options: [
    'Level 4 — basic checks including dead code',
    'Level 5 — checking argument types for function calls',
    'Level 6 — checking argument and return types',
    'Level 8 — the strictest level, no mixed types',
  ],
  correctIndex: 2,
  explanation:
    'Lullabot mandates PHPStan level 6, which checks argument types and return types. Legacy codebases can use a baseline file to ignore pre-existing violations while enforcing level 6 on new code.',
  source: 'https://architecture.lullabot.com/adr/20260320-use-phpstan/',
};
