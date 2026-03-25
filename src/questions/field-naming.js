export default {
  id: 'field-naming',
  type: 'fill-blank',
  category: 'drupal',
  question: 'For non-reusable Drupal fields, use the naming format ___.',
  options: [
    'field_{bundle}__{name}',
    'field_{name}_{bundle}',
    'field_{bundle}_{name}',
    '{bundle}_field_{name}',
  ],
  correctIndex: 0,
  explanation:
    'Non-reusable fields use field_{bundle}__{name} with a double underscore between bundle and name. Reusable/shared fields simply use field_{name}. Multi-word names use single underscores within each part.',
  source: 'https://architecture.lullabot.com/adr/20220208-naming-fields/',
};
