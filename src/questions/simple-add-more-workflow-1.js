export default {
  id: 'simple-add-more-workflow-1',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Use Simple Add More".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Simple Add More (SAM) enhances multi-value field widgets on entity forms. It provides a better editorial experience with low effort and is recommended for both new and existing projects. This follows the ADR "Use Simple Add More". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220504-use-simple-add-more/',
};
