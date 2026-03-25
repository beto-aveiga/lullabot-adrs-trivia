export default {
  id: 'twig-linting-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Use Twig Coding Standard".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Twig-CS-Fixer enforces the official Twig coding standards from Symfony. For Drupal projects, the companion package Twig-CS-Fixer-Drupal (by Lullabot) adds Drupal-specific rules. This follows the ADR "Use Twig Coding Standard". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20250922-use-twig-coding-standard/',
};
