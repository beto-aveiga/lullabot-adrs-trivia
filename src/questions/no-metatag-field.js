export default {
  id: 'no-metatag-field',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Should the Metatag field be added to Drupal node forms?',
  options: [
    'Yes, it gives editors full control over SEO',
    'No — use token-based metatag config with dedicated fields for overrides',
    'Yes, but only for the homepage content type',
    'No — metatags should be managed entirely by the SEO team via API',
  ],
  correctIndex: 1,
  explanation:
    'The Metatag field should NOT be on node forms. It creates a heavy, complex form with every possible metatag option. Instead, configure metatags at the content-type level using tokens, and add simple dedicated fields for any values editors need to override.',
  source: 'https://architecture.lullabot.com/adr/20220622-1-do-not-add-metatags-to-node-form/',
};
