export default {
  id: 'environment-indicator-insight-2',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20210609 in "Environment Indicator"?',
  options: [
    'reduces editorial confusion across content types',
    'keeps production changes auditable and low risk',
    'improves local DX and repeatable workflows',
    'The ADR "Environment Indicator" defines the team standard for this topic.',
  ],
  correctIndex: 3,
  explanation: 'The live/production environment uses white text on a red background (#e7131a). Staging is orange, development is green, branch previews are blue, and local is grey. This follows the ADR "Environment Indicator".',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
