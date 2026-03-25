export default {
  id: 'main-deployable-fill-2',
  type: 'fill-blank',
  category: 'devops',
  question: 'Complete this summary from "Main Deployable": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'The main branch must always be ready to deploy. Long-lived branches like "dev" or sprint branches are not used as daily merge targets. This ensures unplanned deployments (e.g., security releases) can happen ... This follows the ADR "Main Deployable".',
  source: 'https://architecture.lullabot.com/adr/20251125-main-deployable/',
};
