export default {
  id: 'views-filter-ids-match-2',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR element to its purpose for "Human Readable Views Filters".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Exposed filter identifiers should be overridden to short, user-friendly names (e.g., "topic" instead of "field_topic_target_id"). This prevents broken bookmarked URLs when backend implementations change. This follows the ADR "Human Readable Views Filters". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20250924-human-readable-views-filters/',
};
