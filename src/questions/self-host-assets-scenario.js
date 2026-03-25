export default {
  id: 'self-host-assets-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which exception does the self-hosted assets ADR acknowledge?',
  options: [
    'No exceptions are allowed.',
    'Maps/video services or CDNs with commercial SLAs may be reasonable exceptions.',
    'All analytics scripts must be self-hosted.',
    'Fonts must always be fetched from Google Fonts CDN.',
  ],
  correctIndex: 1,
  explanation: 'The default is self-hosting, with explicit pragmatic exceptions for certain specialized services.',
  source: 'https://architecture.lullabot.com/adr/20251219-self-host-font-files/',
};
