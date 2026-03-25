export default {
  id: '20250320-use-relative-units-in-css-coverage-order-v3',
  type: 'order',
  category: 'frontend',
  question: 'Order a practical workflow for applying ADR "Use Relative Units In Css".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Relative units like rem are recommended for all applicable properties so fonts respect browser preferences. Exceptions: border, box-shadow, and outline use absolute units. line-height should be unitless. This follows the ADR "Use Relative Units In Css". This reinforces the ADR "Use Relative Units In Css".',
  source: 'https://architecture.lullabot.com/adr/20250320-use-relative-units-in-css/',
};
