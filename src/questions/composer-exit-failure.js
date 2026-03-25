export default {
  id: 'composer-exit-failure',
  type: 'multiple-choice',
  category: 'composer',
  question: 'What should happen when Composer patches fail to apply?',
  options: [
    'Log a warning and continue the install',
    'Prompt the user to decide what to do',
    'Break the install with an exit failure',
    'Silently skip the failed patch',
  ],
  correctIndex: 2,
  explanation:
    'The config "composer-exit-on-patch-failure" must be set to true. This surfaces patch errors early — during CI or automated updates — instead of deploying broken code.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-exit-failure/',
};
