export default {
  id: 'hide-untranslatable',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What should happen to non-translatable fields on Drupal translation forms?',
  options: [
    'Display them as read-only',
    'Hide them completely from translation forms',
    'Show them with a warning badge',
    'Grey them out but allow edits in emergencies',
  ],
  correctIndex: 1,
  explanation:
    'Non-translatable fields must be hidden on translation forms. Drupal shows them by default, which leads editors to change values that affect ALL translations. The checkbox is under Content Language settings.',
  source: 'https://architecture.lullabot.com/adr/20220425-hide-untranslatable-fields/',
};
