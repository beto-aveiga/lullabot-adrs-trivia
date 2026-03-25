export default {
  id: 'drush-deploy-workflow-2-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Drupal Build Steps".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'The "drush deploy" command encapsulates the standard build steps: updatedb, config:import, deploy:hook, and cache:rebuild. Sites can customize by replacing the deploy command implementation. This follows the ADR "Drupal Build Steps". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20260313-drupal-build-steps/',
};
