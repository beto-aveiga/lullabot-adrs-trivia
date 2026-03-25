export default {
  id: 'readme-docs',
  type: 'multiple-choice',
  category: 'general',
  question: 'What sections must every project README.md include?',
  options: [
    'Installation and Configuration',
    'Project Name (h1), Getting Started, and Running Tests',
    'Overview, Requirements, and License',
    'About, Contributing, and Changelog',
  ],
  correctIndex: 1,
  explanation:
    'READMEs must start with the project name as h1, then "Getting Started" (steps to a working version) and "Running Tests". Only h1 is used for the name; h2+ for all other sections.',
  source: 'https://architecture.lullabot.com/adr/20240820-project-docs/',
};
