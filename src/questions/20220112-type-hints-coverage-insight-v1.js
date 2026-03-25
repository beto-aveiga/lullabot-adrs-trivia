export default {
  id: '20220112-type-hints-coverage-insight-v1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best aligns with ADR "Type Hints"?',
  options: [
    'Follow the ADR "Type Hints" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'All new PHP code must use type hints for class properties, method/function parameters, and return types. You can add return types to hook implementations even when the hook definition omits them. This follows the ADR "Type Hints". This reinforces the ADR "Type Hints".',
  source: 'https://architecture.lullabot.com/adr/20220112-type-hints/',
};
