export default {
  id: 'main-deployable-scenario',
  type: 'order',
  category: 'devops',
  question: 'Order this healthy release habit for keeping main deployable:',
  items: [
    'Merge unstable work directly to main',
    'Run tests and review before merge',
    'Keep main releasable after merge',
    'Prepare changes in feature branches',
  ],
  correctOrder: [3, 1, 2, 0],
  explanation: 'Work should be prepared and validated before merge; main should remain deployable, not a staging area for broken work.',
  source: 'https://architecture.lullabot.com/adr/20251125-main-deployable/',
};
