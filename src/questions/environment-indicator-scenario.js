export default {
  id: 'environment-indicator-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What practical problem does environment color coding primarily prevent?',
  options: [
    'Slow module installation.',
    'Accidental edits in the wrong environment.',
    'Database schema corruption.',
    'Broken image style generation.',
  ],
  correctIndex: 1,
  explanation: 'Clear visual signals reduce operator mistakes, especially when switching quickly between local, staging, and production.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
