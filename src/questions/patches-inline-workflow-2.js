export default {
  id: 'patches-inline-workflow-2',
  type: 'order',
  category: 'composer',
  question: 'Order a sensible implementation flow for ADR "Composer Patches Inline".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Patches must be specified directly in composer.json, not a separate file. This ensures "composer validate" lints the entire Composer configuration, including patches. This follows the ADR "Composer Patches Inline". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patches-inline/',
};
