export default {
  id: 'tool-purpose-match-scenario',
  type: 'multiple-choice',
  category: 'general',
  question: 'Which tool in the Lullabot stack is responsible for static code analysis?',
  options: [
    'DDEV',
    'Stage File Proxy',
    'PHPStan',
    'Renovate',
  ],
  correctIndex: 2,
  explanation: 'PHPStan provides static analysis; the other tools cover local envs, file proxying, and dependency automation.',
  source: 'https://architecture.lullabot.com/adrs/',
};
