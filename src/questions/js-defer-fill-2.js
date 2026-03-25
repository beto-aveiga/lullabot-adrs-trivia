export default {
  id: 'js-defer-fill-2',
  type: 'fill-blank',
  category: 'frontend',
  question: 'Complete this summary from "Javascript Loading Defaults": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Only the defer attribute is recommended. Defer already provides all the benefits of async and guarantees execution order. Adding both may result in inconsistent cross-browser behavior. This follows the ADR "Javascript Loading Defaults".',
  source: 'https://architecture.lullabot.com/adr/20231027-javascript-loading-defaults/',
};
