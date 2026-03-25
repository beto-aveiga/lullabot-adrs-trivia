export default {
  id: 'use-typescript',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'When does Lullabot recommend using TypeScript over JavaScript?',
  options: [
    'Only for back-end Node.js development',
    'For front-end JS framework and back-end Node.js development',
    'Only when the project exceeds 10,000 lines of code',
    'Only when the client specifically requests it',
  ],
  correctIndex: 1,
  explanation:
    'TypeScript is favored for front-end framework development and back-end Node.js. Research shows it reduces bugs by about 15%. Config files like .eslintrc.js and tailwind.config.js are exceptions.',
  source: 'https://architecture.lullabot.com/adr/20220705-use-typescript/',
};
