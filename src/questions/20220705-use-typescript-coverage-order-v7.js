export default {
  id: '20220705-use-typescript-coverage-order-v7',
  type: 'order',
  category: 'frontend',
  question: 'Order a practical workflow for applying ADR "Use Typescript".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'TypeScript is favored for front-end framework development and back-end Node.js. Research shows it reduces bugs by about 15%. Config files like .eslintrc.js and tailwind.config.js are exceptions. This follows the ADR "Use Typescript". This reinforces the ADR "Use Typescript".',
  source: 'https://architecture.lullabot.com/adr/20220705-use-typescript/',
};
