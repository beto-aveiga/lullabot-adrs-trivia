export default {
  id: 'relative-css-units-workflow-1',
  type: 'order',
  category: 'frontend',
  question: 'Order a sensible implementation flow for ADR "Use Relative Units In Css".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Relative units like rem are recommended for all applicable properties so fonts respect browser preferences. Exceptions: border, box-shadow, and outline use absolute units. line-height should be unitless. This follows the ADR "Use Relative Units In Css". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20250320-use-relative-units-in-css/',
};
