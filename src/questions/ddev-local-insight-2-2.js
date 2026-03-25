export default {
  id: 'ddev-local-insight-2-2',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which statement best reflects ADR 20211207 in "Ddev Locals"?',
  options: [
    'The ADR "Ddev Locals" defines the team standard for this topic.',
    'reduces deployment surprises between environments',
    'keeps automation deterministic across projects',
    'favors simple operational defaults over bespoke scripts',
  ],
  correctIndex: 0,
  explanation: 'DDEV is the standard because of its Docker-based containers and community support. Lando had performance issues, Vagrant requires extra tooling for Apple Silicon, and MAMP lacks container support for consist... This follows the ADR "Ddev Locals".',
  source: 'https://architecture.lullabot.com/adr/20211207-ddev-locals/',
};
