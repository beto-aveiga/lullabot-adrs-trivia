export default {
  id: 'lock-language',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What should happen to the language selector on entity edit forms?',
  options: [
    'Remove it entirely from all forms',
    'Show it on create, but disable it on edit via form alter',
    'Always show it and let editors choose freely',
    'Only show it to administrators',
  ],
  correctIndex: 1,
  explanation:
    'The language selector should be visible when creating content but disabled (locked) when editing existing content. This is done with a hook_form_alter that checks $node->isNew(). It prevents editors from accidentally changing the language of content.',
  source: 'https://architecture.lullabot.com/adr/20220320-prevent-language-change/',
};
