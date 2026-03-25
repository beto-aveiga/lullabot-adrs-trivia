export default {
  id: 'readme-docs-fill-1',
  type: 'fill-blank',
  category: 'general',
  question: 'Complete this summary from "Project Docs": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'READMEs must start with the project name as h1, then "Getting Started" (steps to a working version) and "Running Tests". Only h1 is used for the name; h2+ for all other sections. This follows the ADR "Project Docs".',
  source: 'https://architecture.lullabot.com/adr/20240820-project-docs/',
};
