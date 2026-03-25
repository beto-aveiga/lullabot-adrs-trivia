export default {
  id: 'no-placeholder-text-workflow-1',
  type: 'order',
  category: 'frontend',
  question: 'Order a sensible implementation flow for ADR "Do Not Use Placeholders Forms".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Placeholder text has insufficient contrast, vanishes when content is entered, and displays poorly in Windows High Contrast Mode. Static labels and help text are more accessible. This follows the ADR "Do Not Use Placeholders Forms". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20240212-do-not-use-placeholders-forms/',
};
