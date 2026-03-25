export default {
  id: 'avoid-jquery-fill-1',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Avoid Using Jquery": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'jQuery should be avoided in favor of native JavaScript. If a required dependency itself relies on jQuery, that dependency is acceptable. Native web platform APIs rarely make backwards-incompatible changes. This follows the ADR "Avoid Using Jquery".',
  source: 'https://architecture.lullabot.com/adr/20250416-avoid-using-jquery/',
};
