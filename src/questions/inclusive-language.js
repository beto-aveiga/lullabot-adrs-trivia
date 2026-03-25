export default {
  id: 'inclusive-language',
  type: 'multiple-choice',
  category: 'general',
  question: 'What should replace the term "master" in code and documentation?',
  options: [
    '"primary", "default", or "main" depending on context',
    '"root" in all cases',
    '"leader" in all cases',
    '"production" in all cases',
  ],
  correctIndex: 0,
  explanation:
    'Inclusive language is required. "master" becomes "default", "primary", or "main". "blacklist/whitelist" become "block list/allow list". Gender-neutral "they" should be used in documentation.',
  source: 'https://architecture.lullabot.com/adr/20220511-use-inclusive-language/',
};
