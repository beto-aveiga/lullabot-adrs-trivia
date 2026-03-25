export default {
  id: '20211212-config-status-check-coverage-order-v3',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Config Status Check".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'After build steps, "drush config:status" must report "No differences". If differences exist, the build should fail. Overridden config means code and database are out of sync. This follows the ADR "Config Status Check". This reinforces the ADR "Config Status Check".',
  source: 'https://architecture.lullabot.com/adr/20211212-config-status-check/',
};
