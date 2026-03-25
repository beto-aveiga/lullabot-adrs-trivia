export default {
  id: '20221205-render-entities-with-view-modes-coverage-fill-v2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "Render Entities With View Modes": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Entities should always be rendered through dedicated view modes, even when only a single field is needed. This ensures cacheability metadata is correctly added. The No Markup module can remove field wrappers... This follows the ADR "Render Entities With View Modes". This reinforces the ADR "Render Entities With View Modes".',
  source: 'https://architecture.lullabot.com/adr/20221205-render-entities-with-view-modes/',
};
