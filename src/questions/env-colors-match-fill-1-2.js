export default {
  id: 'env-colors-match-fill-1-2',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Environment Indicator": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'The standard colors are: Live = red (#e7131a), Staging = orange (#b85c00), Development = green (#307b24), Local = grey (#505050). Branch previews use blue. This follows the ADR "Environment Indicator".',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
