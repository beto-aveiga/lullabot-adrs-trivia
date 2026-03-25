export default {
  id: 'self-host-assets-insight-1',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best reflects ADR 20251219 in "Self Host Font Files"?',
  options: [
    'The ADR "Self Host Font Files" defines the team standard for this topic.',
    'keeps bundle behavior explicit and predictable',
    'prefers browser-native capabilities over extra libraries',
    'improves readability and maintainability of UI code',
  ],
  correctIndex: 0,
  explanation: 'Critical static assets should be self-hosted. This improves privacy, avoids extra DNS requests, and ensures availability during third-party outages. Exceptions exist for maps, videos, or CDNs with commercial... This follows the ADR "Self Host Font Files".',
  source: 'https://architecture.lullabot.com/adr/20251219-self-host-font-files/',
};
