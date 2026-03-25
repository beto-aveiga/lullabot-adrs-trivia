export default {
  id: 'typed-entity-workflow-1',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Use Typed Entity".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Typed Entity is preferred over bundle classes. It has a reduced API surface, decouples classes from bundles (allowing multiple classes per bundle), keeps custom and framework logic separated, and includes re... This follows the ADR "Use Typed Entity". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20230309-use-typed-entity/',
};
