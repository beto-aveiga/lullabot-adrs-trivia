export default {
  id: '20240820-project-docs-coverage-order-v7',
  type: 'order',
  category: 'general',
  question: 'Order a practical workflow for applying ADR "Project Docs".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'READMEs must start with the project name as h1, then "Getting Started" (steps to a working version) and "Running Tests". Only h1 is used for the name; h2+ for all other sections. This follows the ADR "Project Docs". This reinforces the ADR "Project Docs".',
  source: 'https://architecture.lullabot.com/adr/20240820-project-docs/',
};
