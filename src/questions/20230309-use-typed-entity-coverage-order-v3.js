export default {
  id: '20230309-use-typed-entity-coverage-order-v3',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Use Typed Entity".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Typed Entity is preferred over bundle classes. It has a reduced API surface, decouples classes from bundles (allowing multiple classes per bundle), keeps custom and framework logic separated, and includes re... This follows the ADR "Use Typed Entity". This reinforces the ADR "Use Typed Entity".',
  source: 'https://architecture.lullabot.com/adr/20230309-use-typed-entity/',
};
