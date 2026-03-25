export default {
  id: 'cache-backends-workflow-2',
  type: 'order',
  category: 'devops',
  question: 'Order a sensible implementation flow for ADR "Identical Cache Backends".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Development environments must use the same cache backend as production. Different backends can cause hard-to-diagnose bugs. DDEV projects should use ddev-memcached or ddev-redis to match production. This follows the ADR "Identical Cache Backends". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220906-identical-cache-backends/',
};
