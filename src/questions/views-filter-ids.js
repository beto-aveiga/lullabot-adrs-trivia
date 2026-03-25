export default {
  id: 'views-filter-ids',
  type: 'fill-blank',
  category: 'drupal',
  question: 'For public-facing Views, override the default filter identifier to use a ___ name.',
  options: [
    'human-readable, short',
    'field-machine-name-based',
    'auto-generated hash',
    'numeric index',
  ],
  correctIndex: 0,
  explanation:
    'Exposed filter identifiers should be overridden to short, user-friendly names (e.g., "topic" instead of "field_topic_target_id"). This prevents broken bookmarked URLs when backend implementations change.',
  source: 'https://architecture.lullabot.com/adr/20250924-human-readable-views-filters/',
};
