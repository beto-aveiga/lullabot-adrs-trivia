export default {
  id: 'imagemagick-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What is the ADR default for Drupal image processing?',
  options: [
    'GD library only',
    'ImageMagick',
    'Client-side canvas transforms',
    'No server-side image processing',
  ],
  correctIndex: 1,
  explanation: 'The ADR sets ImageMagick as the preferred default processing backend for consistency and capability.',
  source: 'https://architecture.lullabot.com/adr/20250409-use-imagemagick-with-drupal/',
};
