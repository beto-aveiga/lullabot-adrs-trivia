export default {
  id: 'config-status-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Config Status Check".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'After build steps, "drush config:status" must report "No differences". If differences exist, the build should fail. Overridden config means code and database are out of sync. This follows the ADR "Config Status Check". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20211212-config-status-check/',
};
