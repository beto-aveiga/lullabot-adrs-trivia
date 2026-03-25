export default {
  id: 'twig-linting',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What tool should enforce Twig coding standards in Drupal projects?',
  options: [
    'PHP_CodeSniffer with Drupal standard',
    'Twig-CS-Fixer with Twig-CS-Fixer-Drupal',
    'ESLint with a Twig plugin',
    'Prettier with @prettier/plugin-twig',
  ],
  correctIndex: 1,
  explanation:
    'Twig-CS-Fixer enforces the official Twig coding standards from Symfony. For Drupal projects, the companion package Twig-CS-Fixer-Drupal (by Lullabot) adds Drupal-specific rules.',
  source: 'https://architecture.lullabot.com/adr/20250922-use-twig-coding-standard/',
};
