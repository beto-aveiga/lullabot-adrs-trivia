export default {
  id: 'drush-deploy-scenario',
  type: 'order',
  category: 'drupal',
  question: 'Order these deployment concerns in a sensible flow around `drush deploy`:',
  items: [
    'Run cache rebuild step',
    'Apply database updates/config/deploy hooks',
    'Trigger the deployment command',
    'Verify post-deploy state',
  ],
  correctOrder: [2, 1, 0, 3],
  explanation: 'The ADR frames `drush deploy` as the main entry point, then ensures the composed steps and verification happen reliably.',
  source: 'https://architecture.lullabot.com/adr/20260313-drupal-build-steps/',
};
