export default {
  id: 'imagemagick-fill-1-2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Use Imagemagick With Drupal": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'ImageMagick is the default. It offers broader capabilities than GD and helps prevent out-of-memory errors with large images. Both Pantheon and Acquia recommend it. Smaller projects may opt out if the overhea... This follows the ADR "Use Imagemagick With Drupal".',
  source: 'https://architecture.lullabot.com/adr/20250409-use-imagemagick-with-drupal/',
};
