export default {
  id: 'view-modes-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Render Entities With View Modes".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Entities should always be rendered through dedicated view modes, even when only a single field is needed. This ensures cacheability metadata is correctly added. The No Markup module can remove field wrappers... This follows the ADR "Render Entities With View Modes". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20221205-render-entities-with-view-modes/',
};
