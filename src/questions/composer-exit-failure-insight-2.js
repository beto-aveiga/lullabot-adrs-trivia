export default {
  id: 'composer-exit-failure-insight-2',
  type: 'multiple-choice',
  category: 'composer',
  question: 'Which statement best reflects ADR 20220429 in "Composer Exit Failure"?',
  options: [
    'prevents hidden side effects in installs',
    'keeps dependency updates explicit and reviewable',
    'The ADR "Composer Exit Failure" defines the team standard for this topic.',
    'reduces lockfile churn and merge conflicts',
  ],
  correctIndex: 2,
  explanation: 'The config "composer-exit-on-patch-failure" must be set to true. This surfaces patch errors early — during CI or automated updates — instead of deploying broken code. This follows the ADR "Composer Exit Failure".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-exit-failure/',
};
