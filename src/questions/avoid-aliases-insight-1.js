export default {
  id: 'avoid-aliases-insight-1',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which statement best reflects ADR 20211006 in "Avoid Command Aliases"?',
  options: [
    'favors simple operational defaults over bespoke scripts',
    'reduces deployment surprises between environments',
    'The ADR "Avoid Command Aliases" defines the team standard for this topic.',
    'keeps automation deterministic across projects',
  ],
  correctIndex: 2,
  explanation: 'Long-form commands and options must always be used in shared scripts. Aliases like "drush cst" or "git co" are unclear to developers unfamiliar with a particular setup. This follows the ADR "Avoid Command Aliases".',
  source: 'https://architecture.lullabot.com/adr/20211006-avoid-command-aliases/',
};
