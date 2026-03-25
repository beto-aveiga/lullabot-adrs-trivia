export default {
  id: 'field-naming-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'A field is unique to the `article` bundle. Which naming style aligns with the ADR?',
  options: [
    'field_summary',
    'field_article__summary',
    'article_field_summary',
    'field_article_summary_1',
  ],
  correctIndex: 1,
  explanation: 'Non-reusable fields include the bundle and field name separated by a double underscore.',
  source: 'https://architecture.lullabot.com/adr/20220208-naming-fields/',
};
