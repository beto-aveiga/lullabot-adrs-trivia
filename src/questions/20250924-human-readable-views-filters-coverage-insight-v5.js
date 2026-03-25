export default {
  id: '20250924-human-readable-views-filters-coverage-insight-v5',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best aligns with ADR "Human Readable Views Filters"?',
  options: [
    'Follow the ADR "Human Readable Views Filters" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Exposed filter identifiers should be overridden to short, user-friendly names (e.g., "topic" instead of "field_topic_target_id"). This prevents broken bookmarked URLs when backend implementations change. This follows the ADR "Human Readable Views Filters". This reinforces the ADR "Human Readable Views Filters".',
  source: 'https://architecture.lullabot.com/adr/20250924-human-readable-views-filters/',
};
