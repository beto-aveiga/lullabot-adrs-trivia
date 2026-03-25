export default {
  id: 'settings-php-scenario',
  type: 'order',
  category: 'drupal',
  question: 'Order the ADR-aligned way to manage environment-specific Drupal settings:',
  items: [
    'Store all differences in Config Split only',
    'Include environment-specific settings files from settings.php',
    'Define shared base settings',
    'Override only environment-specific values',
  ],
  correctOrder: [2, 1, 3, 0],
  explanation: 'Shared defaults live in base settings, then environment-specific overrides are layered intentionally via includes.',
  source: 'https://architecture.lullabot.com/adr/20211026-use-settings-not-splits/',
};
