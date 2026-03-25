export default {
  id: '20221205-render-entities-with-view-modes-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best aligns with ADR "Render Entities With View Modes"?',
  options: [
    'Follow the ADR "Render Entities With View Modes" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Entities should always be rendered through dedicated view modes, even when only a single field is needed. This ensures cacheability metadata is correctly added. The No Markup module can remove field wrappers... This follows the ADR "Render Entities With View Modes". This reinforces the ADR "Render Entities With View Modes".',
  source: 'https://architecture.lullabot.com/adr/20221205-render-entities-with-view-modes/',
};
