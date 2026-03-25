export default {
  id: 'environment-indicator',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What color should the Environment Indicator show for the LIVE/production environment?',
  options: [
    'White on Green',
    'White on Blue',
    'White on Red',
    'White on Orange',
  ],
  correctIndex: 2,
  explanation:
    'The live/production environment uses white text on a red background (#e7131a). Staging is orange, development is green, branch previews are blue, and local is grey.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
