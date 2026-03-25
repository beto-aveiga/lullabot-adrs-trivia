export default {
  id: '20251219-self-host-font-files-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best aligns with ADR "Self Host Font Files"?',
  options: [
    'Follow the ADR "Self Host Font Files" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Critical static assets should be self-hosted. This improves privacy, avoids extra DNS requests, and ensures availability during third-party outages. Exceptions exist for maps, videos, or CDNs with commercial... This follows the ADR "Self Host Font Files". This reinforces the ADR "Self Host Font Files".',
  source: 'https://architecture.lullabot.com/adr/20251219-self-host-font-files/',
};
