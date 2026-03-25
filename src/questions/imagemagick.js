export default {
  id: 'imagemagick',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What image processing library does Lullabot recommend as default for Drupal?',
  options: ['GD', 'ImageMagick', 'Imagick PHP extension', 'Sharp (Node.js)'],
  correctIndex: 1,
  explanation:
    'ImageMagick is the default. It offers broader capabilities than GD and helps prevent out-of-memory errors with large images. Both Pantheon and Acquia recommend it. Smaller projects may opt out if the overhead is unnecessary.',
  source: 'https://architecture.lullabot.com/adr/20250409-use-imagemagick-with-drupal/',
};
