export default {
  id: 'self-host-assets',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What does Lullabot recommend for third-party static assets like fonts and icons?',
  options: [
    'Load them from a public CDN for better caching',
    'Self-host them within the project codebase',
    'Use a commercial CDN with an SLA guarantee',
    'Inline them as base64 in CSS files',
  ],
  correctIndex: 1,
  explanation:
    'Critical static assets should be self-hosted. This improves privacy, avoids extra DNS requests, and ensures availability during third-party outages. Exceptions exist for maps, videos, or CDNs with commercial SLAs.',
  source: 'https://architecture.lullabot.com/adr/20251219-self-host-font-files/',
};
