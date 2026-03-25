export default {
  id: 'avoid-aliases-workflow-2',
  type: 'order',
  category: 'devops',
  question: 'Order a sensible implementation flow for ADR "Avoid Command Aliases".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Long-form commands and options must always be used in shared scripts. Aliases like "drush cst" or "git co" are unclear to developers unfamiliar with a particular setup. This follows the ADR "Avoid Command Aliases". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20211006-avoid-command-aliases/',
};
