export default {
  id: 'phpstan-level-fill-2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Use Phpstan": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Lullabot mandates PHPStan level 6, which checks argument types and return types. Legacy codebases can use a baseline file to ignore pre-existing violations while enforcing level 6 on new code. This follows the ADR "Use Phpstan".',
  source: 'https://architecture.lullabot.com/adr/20260320-use-phpstan/',
};
