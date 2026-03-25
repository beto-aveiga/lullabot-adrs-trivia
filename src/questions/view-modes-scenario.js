export default {
  id: 'view-modes-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Why does the ADR insist on rendering entities through view modes even for simple output?',
  options: [
    'View modes preserve Drupal render and cache metadata expectations.',
    'View modes are required for multilingual routing only.',
    'View modes skip theme hooks for speed.',
    'View modes prevent formatter configuration.',
  ],
  correctIndex: 0,
  explanation: 'View modes keep rendering consistent and cache-safe compared with ad-hoc field extraction.',
  source: 'https://architecture.lullabot.com/adr/20221205-render-entities-with-view-modes/',
};
