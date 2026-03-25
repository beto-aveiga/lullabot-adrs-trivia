export default {
  id: '20220207-php-unit-tests-coverage-insight-v5',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best aligns with ADR "Php Unit Tests"?',
  options: [
    'Follow the ADR "Php Unit Tests" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'PHPUnit is the standard. It\'s the most popular PHP testing framework, well-maintained, and used by both Drupal and Symfony core. Tests run via the PHPUnit CLI or IDE integrations. This follows the ADR "Php Unit Tests". This reinforces the ADR "Php Unit Tests".',
  source: 'https://architecture.lullabot.com/adr/20220207-php-unit-tests/',
};
