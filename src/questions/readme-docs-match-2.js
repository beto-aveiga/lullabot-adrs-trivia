export default {
  id: 'readme-docs-match-2',
  type: 'matching',
  category: 'general',
  question: 'Match each ADR element to its purpose for "Project Docs".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'READMEs must start with the project name as h1, then "Getting Started" (steps to a working version) and "Running Tests". Only h1 is used for the name; h2+ for all other sections. This follows the ADR "Project Docs". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20240820-project-docs/',
};
