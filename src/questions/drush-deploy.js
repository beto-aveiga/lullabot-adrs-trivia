export default {
  id: 'drush-deploy',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Lullabot recommends running ___ as the standard Drupal build command.',
  options: ['drush deploy', 'drush site:install', 'drush config:import', 'drush updb && drush cim'],
  correctIndex: 0,
  explanation:
    'The "drush deploy" command encapsulates the standard build steps: updatedb, config:import, deploy:hook, and cache:rebuild. Sites can customize by replacing the deploy command implementation.',
  source: 'https://architecture.lullabot.com/adr/20260313-drupal-build-steps/',
};
