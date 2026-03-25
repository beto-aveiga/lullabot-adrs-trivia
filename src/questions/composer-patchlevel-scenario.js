export default {
  id: 'composer-patchlevel-scenario',
  type: 'multiple-choice',
  category: 'composer',
  question: 'Why is `-p2` required for `drupal/core` patches in this ADR?',
  options: [
    'Core files are nested under `vendor` paths that require a deeper strip level.',
    'It is faster than `-p1` on CI.',
    'Drupal 11 only supports `-p2`.',
    'The patch plugin ignores any other value.',
  ],
  correctIndex: 0,
  explanation: 'Patch paths for Drupal core are nested, so `-p2` lines up filenames correctly and prevents misapplied hunks.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patchlevel/',
};
