export default {
  id: 'typed-entity-insight-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20230309 in "Use Typed Entity"?',
  options: [
    'The ADR "Use Typed Entity" defines the team standard for this topic.',
    'improves local DX and repeatable workflows',
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
  ],
  correctIndex: 0,
  explanation: 'Typed Entity is preferred over bundle classes. It has a reduced API surface, decouples classes from bundles (allowing multiple classes per bundle), keeps custom and framework logic separated, and includes re... This follows the ADR "Use Typed Entity".',
  source: 'https://architecture.lullabot.com/adr/20230309-use-typed-entity/',
};
