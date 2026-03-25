export default {
  id: '20211026-use-settings-not-splits-coverage-order-v7',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Use Settings Not Splits".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Environment overrides use settings.php and settings.ENVIRONMENT.php files. Config Split should NOT be used for environment overrides. Config Ignore handles individual config objects, and config_exclude_modul... This follows the ADR "Use Settings Not Splits". This reinforces the ADR "Use Settings Not Splits".',
  source: 'https://architecture.lullabot.com/adr/20211026-use-settings-not-splits/',
};
