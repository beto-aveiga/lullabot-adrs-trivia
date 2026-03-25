export default {
  id: 'views-filter-ids-fill-1',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Human Readable Views Filters": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Exposed filter identifiers should be overridden to short, user-friendly names (e.g., "topic" instead of "field_topic_target_id"). This prevents broken bookmarked URLs when backend implementations change. This follows the ADR "Human Readable Views Filters".',
  source: 'https://architecture.lullabot.com/adr/20250924-human-readable-views-filters/',
};
