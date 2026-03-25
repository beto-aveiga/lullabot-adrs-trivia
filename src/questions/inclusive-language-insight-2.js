export default {
  id: 'inclusive-language-insight-2',
  type: 'multiple-choice',
  category: 'general',
  question: 'Which statement best reflects ADR 20220511 in "Use Inclusive Language"?',
  options: [
    'makes decisions easier to teach and review',
    'encourages consistent patterns across teams',
    'The ADR "Use Inclusive Language" defines the team standard for this topic.',
    'optimizes long-term maintainability',
  ],
  correctIndex: 2,
  explanation: 'Inclusive language is required. "master" becomes "default", "primary", or "main". "blacklist/whitelist" become "block list/allow list". Gender-neutral "they" should be used in documentation. This follows the ADR "Use Inclusive Language".',
  source: 'https://architecture.lullabot.com/adr/20220511-use-inclusive-language/',
};
