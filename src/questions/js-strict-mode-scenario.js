export default {
  id: 'js-strict-mode-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What quality benefit is most directly tied to enabling JavaScript strict mode?',
  options: [
    'It catches silent errors (like accidental globals) by turning them into explicit failures.',
    'It minifies scripts automatically.',
    'It replaces ESLint rules.',
    'It guarantees backward compatibility with old browsers.',
  ],
  correctIndex: 0,
  explanation: 'Strict mode tightens semantics and surfaces mistakes earlier in development.',
  source: 'https://architecture.lullabot.com/adr/20220816-use-js-strict-mode/',
};
