export default {
  id: '20250924-human-readable-views-filters-coverage-match-v4',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Human Readable Views Filters".',
  left: [
    'Decision',
    'Reasoning',
    'Default action',
    'Exception note',
  ],
  right: [
    'What was chosen',
    'Why the team chose it',
    'What to do first in implementation',
    'How deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Exposed filter identifiers should be overridden to short, user-friendly names (e.g., "topic" instead of "field_topic_target_id"). This prevents broken bookmarked URLs when backend implementations change. This follows the ADR "Human Readable Views Filters". This reinforces the ADR "Human Readable Views Filters".',
  source: 'https://architecture.lullabot.com/adr/20250924-human-readable-views-filters/',
};
