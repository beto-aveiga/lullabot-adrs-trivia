export default {
  id: 'env-colors-match-scenario',
  type: 'order',
  category: 'drupal',
  question: 'Order environment indicator severity from highest caution to lowest for the default color scheme:',
  items: [
    'Local (grey)',
    'Staging (orange)',
    'Development (green)',
    'Live (red)',
  ],
  correctOrder: [3, 1, 2, 0],
  explanation: 'Live should stand out most (red), followed by staging, development, and local.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
