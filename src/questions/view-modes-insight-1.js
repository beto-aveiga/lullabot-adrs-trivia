export default {
  id: 'view-modes-insight-1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20221205 in "Render Entities With View Modes"?',
  options: [
    'improves local DX and repeatable workflows',
    'The ADR "Render Entities With View Modes" defines the team standard for this topic.',
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
  ],
  correctIndex: 1,
  explanation: 'Entities should always be rendered through dedicated view modes, even when only a single field is needed. This ensures cacheability metadata is correctly added. The No Markup module can remove field wrappers... This follows the ADR "Render Entities With View Modes".',
  source: 'https://architecture.lullabot.com/adr/20221205-render-entities-with-view-modes/',
};
