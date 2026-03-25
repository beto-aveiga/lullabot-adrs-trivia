export default {
  id: '20220429-composer-exit-failure-coverage-fill-v2',
  type: 'fill-blank',
  category: 'composer',
  question: 'Complete the guidance for "Composer Exit Failure": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'The config "composer-exit-on-patch-failure" must be set to true. This surfaces patch errors early — during CI or automated updates — instead of deploying broken code. This follows the ADR "Composer Exit Failure". This reinforces the ADR "Composer Exit Failure".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-exit-failure/',
};
