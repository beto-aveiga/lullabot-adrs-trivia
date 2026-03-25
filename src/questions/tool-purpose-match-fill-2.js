export default {
  id: 'tool-purpose-match-fill-2',
  type: 'fill-blank',
  category: 'general',
  question: 'Complete this summary from "Adr": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'DDEV provides local development environments, Renovate automates dependency updates, PHPStan performs static code analysis, and Stage File Proxy downloads production files on-demand. This follows the ADR "Adr".',
  source: 'https://architecture.lullabot.com/adrs/',
};
