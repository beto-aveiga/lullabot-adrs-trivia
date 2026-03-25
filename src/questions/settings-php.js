export default {
  id: 'settings-php',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What should be used for environment-specific configuration overrides in Drupal?',
  options: [
    'Config Split module for each environment',
    'settings.php with conditionally included settings.ENVIRONMENT.php files',
    'Separate config directories per environment',
    'Environment variables only, with no PHP overrides',
  ],
  correctIndex: 1,
  explanation:
    'Environment overrides use settings.php and settings.ENVIRONMENT.php files. Config Split should NOT be used for environment overrides. Config Ignore handles individual config objects, and config_exclude_modules handles dev-only modules.',
  source: 'https://architecture.lullabot.com/adr/20211026-use-settings-not-splits/',
};
