export default {
  id: 'cache-backends-scenario',
  type: 'multiple-choice',
  category: 'devops',
  question: 'What risk does the ADR try to reduce by matching cache backends between development and production?',
  options: [
    'Slow local Docker image pulls.',
    'Environment-specific cache bugs that only appear after deployment.',
    'Missing Git hooks in local clones.',
    'Overwritten composer.lock files.',
  ],
  correctIndex: 1,
  explanation: 'Different cache backends can hide defects until production. Matching backends exposes behavior differences earlier.',
  source: 'https://architecture.lullabot.com/adr/20220906-identical-cache-backends/',
};
