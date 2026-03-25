export default {
  id: 'microcontent-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Microcontent Terminology".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Use "microcontent" (no hyphen) for content entities embedded within pages that have no independent URL and are not indexed by search engines. More specific terms like "embedded video" are preferred when appl... This follows the ADR "Microcontent Terminology". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20260313-microcontent-terminology/',
};
