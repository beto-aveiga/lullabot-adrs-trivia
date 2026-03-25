export default {
  id: 'avoid-aliases-insight-1-2',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which statement best reflects ADR 20211006 in "Avoid Command Aliases"?',
  options: [
    'The ADR "Avoid Command Aliases" defines the team standard for this topic.',
    'reduces deployment surprises between environments',
    'keeps automation deterministic across projects',
    'favors simple operational defaults over bespoke scripts',
  ],
  correctIndex: 0,
  explanation: 'Long-form commands and options must always be used in shared scripts. Aliases like "drush cst" or "git co" are unclear to developers unfamiliar with a particular setup. This follows the ADR "Avoid Command Aliases".',
  source: 'https://architecture.lullabot.com/adr/20211006-avoid-command-aliases/',
};
