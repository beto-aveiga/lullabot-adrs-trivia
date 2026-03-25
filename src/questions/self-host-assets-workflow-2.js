export default {
  id: 'self-host-assets-workflow-2',
  type: 'order',
  category: 'frontend',
  question: 'Order a sensible implementation flow for ADR "Self Host Font Files".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Critical static assets should be self-hosted. This improves privacy, avoids extra DNS requests, and ensures availability during third-party outages. Exceptions exist for maps, videos, or CDNs with commercial... This follows the ADR "Self Host Font Files". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20251219-self-host-font-files/',
};
