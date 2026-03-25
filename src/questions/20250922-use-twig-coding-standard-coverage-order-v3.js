export default {
  id: '20250922-use-twig-coding-standard-coverage-order-v3',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Use Twig Coding Standard".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Twig-CS-Fixer enforces the official Twig coding standards from Symfony. For Drupal projects, the companion package Twig-CS-Fixer-Drupal (by Lullabot) adds Drupal-specific rules. This follows the ADR "Use Twig Coding Standard". This reinforces the ADR "Use Twig Coding Standard".',
  source: 'https://architecture.lullabot.com/adr/20250922-use-twig-coding-standard/',
};
