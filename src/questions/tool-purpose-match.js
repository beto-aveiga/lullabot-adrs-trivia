export default {
  id: 'tool-purpose-match',
  type: 'matching',
  category: 'general',
  question: 'Match each tool to its purpose in the Lullabot stack:',
  left: ['DDEV', 'Renovate', 'PHPStan', 'Stage File Proxy'],
  right: ['Local development', 'Dependency updates', 'Static analysis', 'On-demand file downloads'],
  correctPairs: [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  explanation:
    'DDEV provides local development environments, Renovate automates dependency updates, PHPStan performs static code analysis, and Stage File Proxy downloads production files on-demand.',
  source: 'https://architecture.lullabot.com/adrs/',
};
