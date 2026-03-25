export default {
  id: 'settings-php-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Use Settings Not Splits".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Environment overrides use settings.php and settings.ENVIRONMENT.php files. Config Split should NOT be used for environment overrides. Config Ignore handles individual config objects, and config_exclude_modul... This follows the ADR "Use Settings Not Splits". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20211026-use-settings-not-splits/',
};
