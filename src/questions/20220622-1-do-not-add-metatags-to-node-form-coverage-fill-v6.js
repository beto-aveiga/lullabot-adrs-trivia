export default {
  id: '20220622-1-do-not-add-metatags-to-node-form-coverage-fill-v6',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "1 Do Not Add Metatags To Node Form": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'The Metatag field should NOT be on node forms. It creates a heavy, complex form with every possible metatag option. Instead, configure metatags at the content-type level using tokens, and add simple dedicate... This follows the ADR "1 Do Not Add Metatags To Node Form". This reinforces the ADR "1 Do Not Add Metatags To Node Form".',
  source: 'https://architecture.lullabot.com/adr/20220622-1-do-not-add-metatags-to-node-form/',
};
