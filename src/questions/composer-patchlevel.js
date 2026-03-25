export default {
  id: 'composer-patchlevel',
  type: 'fill-blank',
  category: 'composer',
  question: 'When using cweagans/composer-patches, the patchLevel for drupal/core should be set to ___.',
  options: ['-p1', '-p2', '-p0', '-p3'],
  correctIndex: 1,
  explanation:
    'Drupal core patches require -p2 patch level because of how core is nested inside the vendor directory structure. This reduces errors from misapplied patches.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patchlevel/',
};
