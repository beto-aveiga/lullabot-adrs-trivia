export default {
  id: 'config-status-insight-1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20211212 in "Config Status Check"?',
  options: [
    'The ADR "Config Status Check" defines the team standard for this topic.',
    'improves local DX and repeatable workflows',
    'keeps production changes auditable and low risk',
    'reduces editorial confusion across content types',
  ],
  correctIndex: 0,
  explanation: 'After build steps, "drush config:status" must report "No differences". If differences exist, the build should fail. Overridden config means code and database are out of sync. This follows the ADR "Config Status Check".',
  source: 'https://architecture.lullabot.com/adr/20211212-config-status-check/',
};
