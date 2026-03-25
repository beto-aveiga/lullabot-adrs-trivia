export default {
  id: '20211006-avoid-command-aliases-coverage-fill-v6',
  type: 'fill-blank',
  category: 'devops',
  question: 'Complete the guidance for "Avoid Command Aliases": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Long-form commands and options must always be used in shared scripts. Aliases like "drush cst" or "git co" are unclear to developers unfamiliar with a particular setup. This follows the ADR "Avoid Command Aliases". This reinforces the ADR "Avoid Command Aliases".',
  source: 'https://architecture.lullabot.com/adr/20211006-avoid-command-aliases/',
};
