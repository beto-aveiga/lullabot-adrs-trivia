export default {
  id: '20230309-use-typed-entity-coverage-fill-v2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "Use Typed Entity": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Typed Entity is preferred over bundle classes. It has a reduced API surface, decouples classes from bundles (allowing multiple classes per bundle), keeps custom and framework logic separated, and includes re... This follows the ADR "Use Typed Entity". This reinforces the ADR "Use Typed Entity".',
  source: 'https://architecture.lullabot.com/adr/20230309-use-typed-entity/',
};
