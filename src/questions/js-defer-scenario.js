export default {
  id: 'js-defer-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Why does the ADR default external scripts to `defer`?',
  options: [
    'It blocks parsing until each script downloads.',
    'It preserves document order while avoiding render-blocking behavior.',
    'It forces scripts to run after `load` only.',
    'It is required for all inline scripts.',
  ],
  correctIndex: 1,
  explanation: '`defer` keeps execution ordered but removes parser blocking, improving startup behavior for most external scripts.',
  source: 'https://architecture.lullabot.com/adr/20231027-javascript-loading-defaults/',
};
