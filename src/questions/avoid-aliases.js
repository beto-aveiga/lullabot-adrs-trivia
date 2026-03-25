export default {
  id: 'avoid-aliases',
  type: 'multiple-choice',
  category: 'devops',
  question: 'When writing shared scripts, what form of command names should be used?',
  options: [
    'Short aliases for brevity (e.g., drush cst)',
    'Long form of commands and options (e.g., drush config:status)',
    'Abbreviated forms with inline comments',
    'Whatever the team agrees on in a code review',
  ],
  correctIndex: 1,
  explanation:
    'Long-form commands and options must always be used in shared scripts. Aliases like "drush cst" or "git co" are unclear to developers unfamiliar with a particular setup.',
  source: 'https://architecture.lullabot.com/adr/20211006-avoid-command-aliases/',
};
