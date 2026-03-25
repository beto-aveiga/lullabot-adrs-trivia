export default {
  id: 'js-defer',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which attribute(s) should be added when loading external JavaScript files in HTML?',
  options: [
    'async only',
    'defer only',
    'Both async and defer together',
    'Neither — use type="module" instead',
  ],
  correctIndex: 1,
  explanation:
    'Only the defer attribute is recommended. Defer already provides all the benefits of async and guarantees execution order. Adding both may result in inconsistent cross-browser behavior.',
  source: 'https://architecture.lullabot.com/adr/20231027-javascript-loading-defaults/',
};
