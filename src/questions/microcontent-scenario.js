export default {
  id: 'microcontent-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which content modeling choice most closely follows the microcontent ADR?',
  options: [
    'Create full page nodes for every reusable snippet.',
    'Model reusable snippets as embeddable entities without independent routes.',
    'Store snippets only as hardcoded Twig includes.',
    'Use JSON in config files for all reusable content.',
  ],
  correctIndex: 1,
  explanation: 'Microcontent is explicitly about reusable embedded entities that are not standalone pages.',
  source: 'https://architecture.lullabot.com/adr/20260313-microcontent-terminology/',
};
