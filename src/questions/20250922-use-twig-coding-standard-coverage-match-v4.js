export default {
  id: '20250922-use-twig-coding-standard-coverage-match-v4',
  type: 'matching',
  category: 'drupal',
  question: 'Match each ADR concept to its purpose for "Use Twig Coding Standard".',
  left: [
    'Decision',
    'Reasoning',
    'Default action',
    'Exception note',
  ],
  right: [
    'What was chosen',
    'Why the team chose it',
    'What to do first in implementation',
    'How deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'Twig-CS-Fixer enforces the official Twig coding standards from Symfony. For Drupal projects, the companion package Twig-CS-Fixer-Drupal (by Lullabot) adds Drupal-specific rules. This follows the ADR "Use Twig Coding Standard". This reinforces the ADR "Use Twig Coding Standard".',
  source: 'https://architecture.lullabot.com/adr/20250922-use-twig-coding-standard/',
};
