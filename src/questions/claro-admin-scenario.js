export default {
  id: 'claro-admin-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Why does the ADR recommend Claro instead of a contributed admin theme by default?',
  options: [
    'Claro provides stronger compatibility and reduces maintenance risk because it is in Drupal core.',
    'Claro supports every contrib module without testing.',
    'Claro is required for PHP 8.3 compatibility.',
    'Claro removes the need for accessibility testing.',
  ],
  correctIndex: 0,
  explanation: 'A core-maintained admin theme lowers long-term support risk while preserving consistency and accessibility expectations.',
  source: 'https://architecture.lullabot.com/adr/20220519-use-claro-as-admin-theme/',
};
