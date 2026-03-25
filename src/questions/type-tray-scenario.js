export default {
  id: 'type-tray-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What editorial problem does Type Tray address on the Add Content screen?',
  options: [
    'It adds GraphQL endpoints for each content type.',
    'It organizes content types with categories/icons to reduce author confusion.',
    'It replaces node add routes with JSON APIs.',
    'It disables access checks for fast publishing.',
  ],
  correctIndex: 1,
  explanation: 'Type Tray improves discoverability and decision confidence for editors creating content.',
  source: 'https://architecture.lullabot.com/adr/20220503-use-type-tray/',
};
