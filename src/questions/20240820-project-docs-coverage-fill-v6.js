export default {
  id: '20240820-project-docs-coverage-fill-v6',
  type: 'fill-blank',
  category: 'general',
  question: 'Complete the guidance for "Project Docs": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'READMEs must start with the project name as h1, then "Getting Started" (steps to a working version) and "Running Tests". Only h1 is used for the name; h2+ for all other sections. This follows the ADR "Project Docs". This reinforces the ADR "Project Docs".',
  source: 'https://architecture.lullabot.com/adr/20240820-project-docs/',
};
