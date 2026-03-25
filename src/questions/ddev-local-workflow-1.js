export default {
  id: 'ddev-local-workflow-1',
  type: 'order',
  category: 'devops',
  question: 'Order a sensible implementation flow for ADR "Ddev Locals".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'DDEV is the standard because of its Docker-based containers and community support. Lando had performance issues, Vagrant requires extra tooling for Apple Silicon, and MAMP lacks container support for consist... This follows the ADR "Ddev Locals". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20211207-ddev-locals/',
};
