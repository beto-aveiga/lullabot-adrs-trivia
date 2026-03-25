export default {
  id: 'typed-entity',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What module does Lullabot recommend for encapsulating entity business logic in dedicated classes?',
  options: [
    'Drupal core\'s bundle classes',
    'Typed Entity',
    'Entity API module',
    'Custom entity wrapper services',
  ],
  correctIndex: 1,
  explanation:
    'Typed Entity is preferred over bundle classes. It has a reduced API surface, decouples classes from bundles (allowing multiple classes per bundle), keeps custom and framework logic separated, and includes repository classes.',
  source: 'https://architecture.lullabot.com/adr/20230309-use-typed-entity/',
};
