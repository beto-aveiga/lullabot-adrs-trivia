export default {
  id: 'avoid-aliases-scenario',
  type: 'multiple-choice',
  category: 'devops',
  question: 'A teammate submits a deployment script with `drush cst` and `git co`. What ADR-aligned review comment is most appropriate?',
  options: [
    'Use long-form commands and options so every developer can read scripts without personal alias knowledge.',
    'Allow aliases in production scripts if an explanatory comment is included.',
    'Aliases are fine if CI succeeds on one machine.',
    'Aliases should be used only for Drupal commands, not Git.',
  ],
  correctIndex: 0,
  explanation: 'Shared scripts should use explicit long-form commands. Aliases are personal shortcuts that reduce readability and portability.',
  source: 'https://architecture.lullabot.com/adr/20211006-avoid-command-aliases/',
};
