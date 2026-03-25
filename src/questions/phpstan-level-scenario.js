export default {
  id: 'phpstan-level-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Why does the ADR enforce PHPStan compliance for new code?',
  options: [
    'To replace code review entirely.',
    'To catch type and logic issues earlier with static analysis gates.',
    'To speed up composer install.',
    'To force framework upgrades.',
  ],
  correctIndex: 1,
  explanation: 'Static analysis as a baseline quality gate prevents subtle defects from reaching runtime.',
  source: 'https://architecture.lullabot.com/adr/20260320-use-phpstan/',
};
