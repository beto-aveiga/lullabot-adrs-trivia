export default {
  id: 'local-patches-match-2-2',
  type: 'matching',
  category: 'composer',
  question: 'Match each ADR element to its purpose for "Composer Patch Files".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Patches must be downloaded and stored locally — upstream ones in patches/upstream/, project-specific ones in patches/local/. Remote URLs should never be used because their contents may change unexpectedly. This follows the ADR "Composer Patch Files". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patch-files/',
};
