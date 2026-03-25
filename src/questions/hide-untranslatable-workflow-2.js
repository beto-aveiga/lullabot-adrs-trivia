export default {
  id: 'hide-untranslatable-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Hide Untranslatable Fields".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Non-translatable fields must be hidden on translation forms. Drupal shows them by default, which leads editors to change values that affect ALL translations. The checkbox is under Content Language settings. This follows the ADR "Hide Untranslatable Fields". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220425-hide-untranslatable-fields/',
};
