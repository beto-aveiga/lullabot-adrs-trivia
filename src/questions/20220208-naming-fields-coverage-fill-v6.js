export default {
  id: '20220208-naming-fields-coverage-fill-v6',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "Naming Fields": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Non-reusable fields use field_{bundle}__{name} with a double underscore between bundle and name. Reusable/shared fields simply use field_{name}. Multi-word names use single underscores within each part. This follows the ADR "Naming Fields". This reinforces the ADR "Naming Fields".',
  source: 'https://architecture.lullabot.com/adr/20220208-naming-fields/',
};
