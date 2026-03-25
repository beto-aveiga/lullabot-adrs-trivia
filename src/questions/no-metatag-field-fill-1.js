export default {
  id: 'no-metatag-field-fill-1',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "1 Do Not Add Metatags To Node Form": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'The Metatag field should NOT be on node forms. It creates a heavy, complex form with every possible metatag option. Instead, configure metatags at the content-type level using tokens, and add simple dedicate... This follows the ADR "1 Do Not Add Metatags To Node Form".',
  source: 'https://architecture.lullabot.com/adr/20220622-1-do-not-add-metatags-to-node-form/',
};
