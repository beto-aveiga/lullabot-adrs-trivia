export default {
  id: 'hide-untranslatable-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Why hide untranslatable fields on translation forms?',
  options: [
    'To avoid editors changing values that are shared across all translations.',
    'To make node forms load faster in all environments.',
    'To enforce strict schema typing in PHP.',
    'To remove field-level access checks.',
  ],
  correctIndex: 0,
  explanation: 'These fields are not language-specific, so showing them on translation forms causes confusion and accidental edits.',
  source: 'https://architecture.lullabot.com/adr/20220425-hide-untranslatable-fields/',
};
