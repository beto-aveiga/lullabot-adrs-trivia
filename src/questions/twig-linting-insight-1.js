export default {
  id: 'twig-linting-insight-1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20250922 in "Use Twig Coding Standard"?',
  options: [
    'The ADR "Use Twig Coding Standard" defines the team standard for this topic.',
    'improves local DX and repeatable workflows',
    'keeps production changes auditable and low risk',
    'reduces editorial confusion across content types',
  ],
  correctIndex: 0,
  explanation: 'Twig-CS-Fixer enforces the official Twig coding standards from Symfony. For Drupal projects, the companion package Twig-CS-Fixer-Drupal (by Lullabot) adds Drupal-specific rules. This follows the ADR "Use Twig Coding Standard".',
  source: 'https://architecture.lullabot.com/adr/20250922-use-twig-coding-standard/',
};
