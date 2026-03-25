export default {
  id: 'use-typescript-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What is the ADR’s practical rationale for preferring TypeScript in selected contexts?',
  options: [
    'It removes the need for tests.',
    'It improves reliability and maintainability in complex JS/Node codebases through type safety.',
    'It compiles faster than JavaScript in all cases.',
    'It is required by all modern browsers.',
  ],
  correctIndex: 1,
  explanation: 'Type safety helps catch defects early and supports safer refactors in larger JavaScript systems.',
  source: 'https://architecture.lullabot.com/adr/20220705-use-typescript/',
};
