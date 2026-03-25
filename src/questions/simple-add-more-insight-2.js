export default {
  id: 'simple-add-more-insight-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20220504 in "Use Simple Add More"?',
  options: [
    'The ADR "Use Simple Add More" defines the team standard for this topic.',
    'improves local DX and repeatable workflows',
    'keeps production changes auditable and low risk',
    'reduces editorial confusion across content types',
  ],
  correctIndex: 0,
  explanation: 'Simple Add More (SAM) enhances multi-value field widgets on entity forms. It provides a better editorial experience with low effort and is recommended for both new and existing projects. This follows the ADR "Use Simple Add More".',
  source: 'https://architecture.lullabot.com/adr/20220504-use-simple-add-more/',
};
