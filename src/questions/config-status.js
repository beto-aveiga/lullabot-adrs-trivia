export default {
  id: 'config-status',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'After running Drupal build steps, what command should be checked for "No differences"?',
  options: [
    'drush config:export',
    'drush config:status',
    'drush config:import --preview',
    'drush config:diff',
  ],
  correctIndex: 1,
  explanation:
    'After build steps, "drush config:status" must report "No differences". If differences exist, the build should fail. Overridden config means code and database are out of sync.',
  source: 'https://architecture.lullabot.com/adr/20211212-config-status-check/',
};
