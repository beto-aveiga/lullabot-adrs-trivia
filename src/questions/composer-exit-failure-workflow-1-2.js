export default {
  id: 'composer-exit-failure-workflow-1-2',
  type: 'order',
  category: 'composer',
  question: 'Order a sensible implementation flow for ADR "Composer Exit Failure".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'The config "composer-exit-on-patch-failure" must be set to true. This surfaces patch errors early — during CI or automated updates — instead of deploying broken code. This follows the ADR "Composer Exit Failure". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-exit-failure/',
};
