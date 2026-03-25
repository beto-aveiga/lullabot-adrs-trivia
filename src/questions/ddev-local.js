export default {
  id: 'ddev-local',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which tool does Lullabot recommend for local development environments?',
  options: ['Lando', 'DDEV', 'Vagrant', 'MAMP'],
  correctIndex: 1,
  explanation:
    'DDEV is the standard because of its Docker-based containers and community support. Lando had performance issues, Vagrant requires extra tooling for Apple Silicon, and MAMP lacks container support for consistent team environments.',
  source: 'https://architecture.lullabot.com/adr/20211207-ddev-locals/',
};
