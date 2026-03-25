export default {
  id: 'settings-php-fill-1',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Use Settings Not Splits": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Environment overrides use settings.php and settings.ENVIRONMENT.php files. Config Split should NOT be used for environment overrides. Config Ignore handles individual config objects, and config_exclude_modul... This follows the ADR "Use Settings Not Splits".',
  source: 'https://architecture.lullabot.com/adr/20211026-use-settings-not-splits/',
};
