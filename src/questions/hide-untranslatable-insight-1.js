export default {
  id: 'hide-untranslatable-insight-1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20220425 in "Hide Untranslatable Fields"?',
  options: [
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
    'The ADR "Hide Untranslatable Fields" defines the team standard for this topic.',
    'improves local DX and repeatable workflows',
  ],
  correctIndex: 2,
  explanation: 'Non-translatable fields must be hidden on translation forms. Drupal shows them by default, which leads editors to change values that affect ALL translations. The checkbox is under Content Language settings. This follows the ADR "Hide Untranslatable Fields".',
  source: 'https://architecture.lullabot.com/adr/20220425-hide-untranslatable-fields/',
};
