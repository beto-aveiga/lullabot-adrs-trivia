export default {
  id: 'no-metatag-field-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Why avoid adding Metatag fields directly to node forms by default?',
  options: [
    'It creates unnecessary editor complexity and encourages low-value manual metadata edits.',
    'Metatag module cannot run on Drupal 10.',
    'Search engines ignore metadata from Drupal nodes.',
    'It prevents canonical URL generation.',
  ],
  correctIndex: 0,
  explanation: 'The ADR favors simpler authoring forms and centralized metadata strategy over per-node manual overrides.',
  source: 'https://architecture.lullabot.com/adr/20220622-1-do-not-add-metatags-to-node-form/',
};
