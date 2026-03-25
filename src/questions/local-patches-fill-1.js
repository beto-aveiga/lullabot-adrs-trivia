export default {
  id: 'local-patches-fill-1',
  type: 'fill-blank',
  category: 'composer',
  question: 'Complete this summary from "Composer Patch Files": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Patches must be downloaded and stored locally — upstream ones in patches/upstream/, project-specific ones in patches/local/. Remote URLs should never be used because their contents may change unexpectedly. This follows the ADR "Composer Patch Files".',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patch-files/',
};
