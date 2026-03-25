export default {
  id: 'main-deployable-match-1',
  type: 'matching',
  category: 'devops',
  question: 'Match each ADR element to its purpose for "Main Deployable".',
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
  explanation: 'The main branch must always be ready to deploy. Long-lived branches like "dev" or sprint branches are not used as daily merge targets. This ensures unplanned deployments (e.g., security releases) can happen ... This follows the ADR "Main Deployable". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20251125-main-deployable/',
};
