export default {
  id: '20211026-use-settings-not-splits-coverage-match-v8',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Use Settings Not Splits".',
  left: [
    'Decision',
    'Reasoning',
    'Default action',
    'Exception note',
  ],
  right: [
    'What was chosen',
    'Why the team chose it',
    'What to do first in implementation',
    'How deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Environment overrides use settings.php and settings.ENVIRONMENT.php files. Config Split should NOT be used for environment overrides. Config Ignore handles individual config objects, and config_exclude_modul... This follows the ADR "Use Settings Not Splits". This reinforces the ADR "Use Settings Not Splits".',
  source: 'https://architecture.lullabot.com/adr/20211026-use-settings-not-splits/',
};
