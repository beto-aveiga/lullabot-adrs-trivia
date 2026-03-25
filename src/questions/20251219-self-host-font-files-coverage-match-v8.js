export default {
  id: '20251219-self-host-font-files-coverage-match-v8',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR concept to its purpose for "Self Host Font Files".',
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
  explanation: 'Critical static assets should be self-hosted. This improves privacy, avoids extra DNS requests, and ensures availability during third-party outages. Exceptions exist for maps, videos, or CDNs with commercial... This follows the ADR "Self Host Font Files". This reinforces the ADR "Self Host Font Files".',
  source: 'https://architecture.lullabot.com/adr/20251219-self-host-font-files/',
};
