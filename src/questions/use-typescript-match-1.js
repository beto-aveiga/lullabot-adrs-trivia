export default {
  id: 'use-typescript-match-1',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Use Typescript".',
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
  explanation: 'TypeScript is favored for front-end framework development and back-end Node.js. Research shows it reduces bugs by about 15%. Config files like .eslintrc.js and tailwind.config.js are exceptions. This follows the ADR "Use Typescript". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220705-use-typescript/',
};
