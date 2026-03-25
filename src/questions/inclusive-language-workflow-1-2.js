export default {
  id: 'inclusive-language-workflow-1-2',
  type: 'order',
  category: 'general',
  question: 'Order a sensible implementation flow for ADR "Use Inclusive Language".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Inclusive language is required. "master" becomes "default", "primary", or "main". "blacklist/whitelist" become "block list/allow list". Gender-neutral "they" should be used in documentation. This follows the ADR "Use Inclusive Language". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20220511-use-inclusive-language/',
};
