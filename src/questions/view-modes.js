export default {
  id: 'view-modes',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'How should entities be rendered in Drupal according to Lullabot?',
  options: [
    'Using custom Twig templates per page',
    'Through entity view modes',
    'By loading field values directly in controllers',
    'Using custom render arrays in hook_page_build',
  ],
  correctIndex: 1,
  explanation:
    'Entities should always be rendered through dedicated view modes, even when only a single field is needed. This ensures cacheability metadata is correctly added. The No Markup module can remove field wrappers when raw data is needed.',
  source: 'https://architecture.lullabot.com/adr/20221205-render-entities-with-view-modes/',
};
