export default {
  id: 'composer-patchlevel-match-1',
  type: 'matching',
  category: 'composer',
  question: 'Match each ADR element to its purpose for "Composer Patchlevel".',
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
  explanation: 'Drupal core patches require -p2 patch level because of how core is nested inside the vendor directory structure. This reduces errors from misapplied patches. This follows the ADR "Composer Patchlevel". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patchlevel/',
};
