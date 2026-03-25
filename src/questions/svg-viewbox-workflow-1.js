export default {
  id: 'svg-viewbox-workflow-1',
  type: 'order',
  category: 'frontend',
  question: 'Order a sensible implementation flow for ADR "Use Svg Viewbox".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'SVGs should include viewBox for a defined bounding canvas, but omit width and height. All sizing moves to CSS, making maintenance easier and SVGs more flexible. This follows the ADR "Use Svg Viewbox". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20251008-use-svg-viewbox/',
};
