export default {
  id: 'views-filter-ids-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What user-facing benefit comes from human-readable exposed filter identifiers in Views?',
  options: [
    'Shorter SQL queries.',
    'Stable, understandable URL parameters that survive backend field renames.',
    'Automatic translation of all filter values.',
    'No need for cache contexts.',
  ],
  correctIndex: 1,
  explanation: 'Readable filter IDs produce cleaner URLs and reduce breakage in shared/bookmarked links.',
  source: 'https://architecture.lullabot.com/adr/20250924-human-readable-views-filters/',
};
