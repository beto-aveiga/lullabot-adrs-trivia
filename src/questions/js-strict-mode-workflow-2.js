export default {
  id: 'js-strict-mode-workflow-2',
  type: 'order',
  category: 'frontend',
  question: 'Order a sensible implementation flow for ADR "Use Js Strict Mode".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Strict mode should be declared within top-level functions. If using ES modules, strict mode is implied and should not be declared. For bundled non-vendor code, it can be declared once at the top. This follows the ADR "Use Js Strict Mode". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220816-use-js-strict-mode/',
};
