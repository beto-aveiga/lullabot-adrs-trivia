export default {
  id: 'tool-purpose-match',
  type: 'multiple-choice',
  category: 'general',
  question: 'Which tool-and-purpose pair is incorrect based on Lullabot standards?',
  options: [
    'DDEV — local development environments',
    'Renovate — dependency update automation',
    'PHPStan — static analysis',
    'Stage File Proxy — visual regression testing',
  ],
  correctIndex: 3,
  explanation:
    'DDEV provides local development environments, Renovate automates dependency updates, PHPStan performs static code analysis, and Stage File Proxy downloads production files on-demand.',
  source: 'https://architecture.lullabot.com/adrs/',
};
