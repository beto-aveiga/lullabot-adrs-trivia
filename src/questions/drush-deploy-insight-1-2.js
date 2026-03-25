export default {
  id: 'drush-deploy-insight-1-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20260313 in "Drupal Build Steps"?',
  options: [
    'The ADR "Drupal Build Steps" defines the team standard for this topic.',
    'improves local DX and repeatable workflows',
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
  ],
  correctIndex: 0,
  explanation: 'The "drush deploy" command encapsulates the standard build steps: updatedb, config:import, deploy:hook, and cache:rebuild. Sites can customize by replacing the deploy command implementation. This follows the ADR "Drupal Build Steps".',
  source: 'https://architecture.lullabot.com/adr/20260313-drupal-build-steps/',
};
