export default {
  id: 'config-status-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'A deployment succeeds but `drush config:status` shows differences afterward. What should happen?',
  options: [
    'Accept it as normal drift and proceed.',
    'Treat it as a failure because code and database config are out of sync.',
    'Only fail if more than five items differ.',
    'Run a config export in production to reconcile.',
  ],
  correctIndex: 1,
  explanation: 'The ADR expects no config differences after build/deploy steps. Differences indicate drift and must fail the process.',
  source: 'https://architecture.lullabot.com/adr/20211212-config-status-check/',
};
