export default {
  id: 'patches-inline-insight-1',
  type: 'multiple-choice',
  category: 'composer',
  question: 'Which statement best reflects ADR 20220429 in "Composer Patches Inline"?',
  options: [
    'prevents hidden side effects in installs',
    'reduces lockfile churn and merge conflicts',
    'The ADR "Composer Patches Inline" defines the team standard for this topic.',
    'keeps dependency updates explicit and reviewable',
  ],
  correctIndex: 2,
  explanation: 'Patches must be specified directly in composer.json, not a separate file. This ensures "composer validate" lints the entire Composer configuration, including patches. This follows the ADR "Composer Patches Inline".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patches-inline/',
};
