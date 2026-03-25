export default {
  id: 'environment-indicator-workflow-1',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Environment Indicator".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'The live/production environment uses white text on a red background (#e7131a). Staging is orange, development is green, branch previews are blue, and local is grey. This follows the ADR "Environment Indicator". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
