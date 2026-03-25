export default {
  id: 'typed-entity-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Why choose Typed Entity over bundle class logic directly in entities?',
  options: [
    'Typed Entity reduces API surface and cleanly isolates business logic in dedicated classes.',
    'Typed Entity replaces Drupal entity APIs entirely.',
    'Typed Entity only works for taxonomy terms.',
    'Typed Entity removes caching metadata requirements.',
  ],
  correctIndex: 0,
  explanation: 'The ADR favors clearer boundaries and maintainable business logic encapsulation.',
  source: 'https://architecture.lullabot.com/adr/20230309-use-typed-entity/',
};
