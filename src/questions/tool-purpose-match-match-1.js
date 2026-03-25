export default {
  id: 'tool-purpose-match-match-1',
  type: 'matching',
  category: 'general',
  question: 'Match each ADR element to its purpose for "Adr".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'DDEV provides local development environments, Renovate automates dependency updates, PHPStan performs static code analysis, and Stage File Proxy downloads production files on-demand. This follows the ADR "Adr". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adrs/',
};
