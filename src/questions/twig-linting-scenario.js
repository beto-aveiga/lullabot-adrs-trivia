export default {
  id: 'twig-linting-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which combination is ADR-aligned for Twig code standards in Drupal projects?',
  options: [
    'Prettier only',
    'Twig-CS-Fixer plus Twig-CS-Fixer-Drupal rules',
    'ESLint with HTML plugin',
    'PHPCS without Twig tooling',
  ],
  correctIndex: 1,
  explanation: 'Twig-CS-Fixer enforces base Twig standards and the Drupal companion package adds Drupal-specific rules.',
  source: 'https://architecture.lullabot.com/adr/20250922-use-twig-coding-standard/',
};
