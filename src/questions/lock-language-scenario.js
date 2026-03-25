export default {
  id: 'lock-language-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What editor-facing behavior does the ADR require for content language on edit forms?',
  options: [
    'Language can be changed by any authenticated user.',
    'Language selection should be locked/hidden to prevent accidental changes.',
    'Language should default to English but remain editable.',
    'Language can only be changed via Quick Edit.',
  ],
  correctIndex: 1,
  explanation: 'Language changes can create downstream content and translation issues, so accidental edits should be prevented.',
  source: 'https://architecture.lullabot.com/adr/20220320-prevent-language-change/',
};
