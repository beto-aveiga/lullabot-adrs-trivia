export default {
  id: 'main-deployable',
  type: 'multiple-choice',
  category: 'devops',
  question: 'What is the rule about the main branch in a launched project?',
  options: [
    'It should be merged to a release branch before deploying',
    'It should always be ready to deploy to production',
    'It should be frozen during active sprint development',
    'It should only contain tagged release commits',
  ],
  correctIndex: 1,
  explanation:
    'The main branch must always be ready to deploy. Long-lived branches like "dev" or sprint branches are not used as daily merge targets. This ensures unplanned deployments (e.g., security releases) can happen quickly.',
  source: 'https://architecture.lullabot.com/adr/20251125-main-deployable/',
};
