export default {
  id: 'lock-language-insight-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20220320 in "Prevent Language Change"?',
  options: [
    'improves local DX and repeatable workflows',
    'reduces editorial confusion across content types',
    'The ADR "Prevent Language Change" defines the team standard for this topic.',
    'keeps production changes auditable and low risk',
  ],
  correctIndex: 2,
  explanation: 'The language selector should be visible when creating content but disabled (locked) when editing existing content. This is done with a hook_form_alter that checks $node->isNew(). It prevents editors from acc... This follows the ADR "Prevent Language Change".',
  source: 'https://architecture.lullabot.com/adr/20220320-prevent-language-change/',
};
