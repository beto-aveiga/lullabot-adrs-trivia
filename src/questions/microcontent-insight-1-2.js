export default {
  id: 'microcontent-insight-1-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20260313 in "Microcontent Terminology"?',
  options: [
    'keeps production changes auditable and low risk',
    'improves local DX and repeatable workflows',
    'The ADR "Microcontent Terminology" defines the team standard for this topic.',
    'reduces editorial confusion across content types',
  ],
  correctIndex: 2,
  explanation: 'Use "microcontent" (no hyphen) for content entities embedded within pages that have no independent URL and are not indexed by search engines. More specific terms like "embedded video" are preferred when appl... This follows the ADR "Microcontent Terminology".',
  source: 'https://architecture.lullabot.com/adr/20260313-microcontent-terminology/',
};
