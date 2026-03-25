export default {
  id: 'composer-patchlevel-fill-2',
  type: 'fill-blank',
  category: 'composer',
  question: 'Complete this summary from "Composer Patchlevel": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Drupal core patches require -p2 patch level because of how core is nested inside the vendor directory structure. This reduces errors from misapplied patches. This follows the ADR "Composer Patchlevel".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patchlevel/',
};
