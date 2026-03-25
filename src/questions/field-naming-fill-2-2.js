export default {
  id: 'field-naming-fill-2-2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Naming Fields": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Non-reusable fields use field_{bundle}__{name} with a double underscore between bundle and name. Reusable/shared fields simply use field_{name}. Multi-word names use single underscores within each part. This follows the ADR "Naming Fields".',
  source: 'https://architecture.lullabot.com/adr/20220208-naming-fields/',
};
