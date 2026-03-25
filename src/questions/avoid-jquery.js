export default {
  id: 'avoid-jquery',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What is Lullabot\'s stance on using jQuery in projects?',
  options: [
    'Use jQuery only for DOM manipulation',
    'Use jQuery with a lightweight wrapper',
    'Avoid jQuery and use standard JavaScript instead',
    'Use jQuery only if the project targets legacy browsers',
  ],
  correctIndex: 2,
  explanation:
    'jQuery should be avoided in favor of native JavaScript. If a required dependency itself relies on jQuery, that dependency is acceptable. Native web platform APIs rarely make backwards-incompatible changes.',
  source: 'https://architecture.lullabot.com/adr/20250416-avoid-using-jquery/',
};
