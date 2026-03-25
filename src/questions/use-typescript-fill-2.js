export default {
  id: 'use-typescript-fill-2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Use Typescript": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'TypeScript is favored for front-end framework development and back-end Node.js. Research shows it reduces bugs by about 15%. Config files like .eslintrc.js and tailwind.config.js are exceptions. This follows the ADR "Use Typescript".',
  source: 'https://architecture.lullabot.com/adr/20220705-use-typescript/',
};
