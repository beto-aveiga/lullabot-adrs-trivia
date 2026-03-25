export default {
  id: 'composer-exit-failure-scenario',
  type: 'fill-blank',
  category: 'composer',
  question: 'To fail fast when patches do not apply, Composer should ___ instead of continuing silently.',
  options: [
    'exit with a non-zero status',
    'retry five times',
    'skip patching in CI',
    'switch patch level automatically',
  ],
  correctIndex: 0,
  explanation: 'Failing immediately prevents broken patch states from reaching later deployment steps.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-exit-failure/',
};
