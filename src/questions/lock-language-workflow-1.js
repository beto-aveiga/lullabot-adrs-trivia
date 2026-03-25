export default {
  id: 'lock-language-workflow-1',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Prevent Language Change".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'The language selector should be visible when creating content but disabled (locked) when editing existing content. This is done with a hook_form_alter that checks $node->isNew(). It prevents editors from acc... This follows the ADR "Prevent Language Change". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220320-prevent-language-change/',
};
