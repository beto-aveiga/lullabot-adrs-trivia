export default {
  id: '20220705-use-typescript-coverage-match-v8',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR concept to its purpose for "Use Typescript".',
  left: [
    'Decision',
    'Reasoning',
    'Default action',
    'Exception note',
  ],
  right: [
    'What was chosen',
    'Why the team chose it',
    'What to do first in implementation',
    'How deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'TypeScript is favored for front-end framework development and back-end Node.js. Research shows it reduces bugs by about 15%. Config files like .eslintrc.js and tailwind.config.js are exceptions. This follows the ADR "Use Typescript". This reinforces the ADR "Use Typescript".',
  source: 'https://architecture.lullabot.com/adr/20220705-use-typescript/',
};
