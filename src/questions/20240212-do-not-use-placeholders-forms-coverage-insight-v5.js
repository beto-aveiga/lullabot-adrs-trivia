export default {
  id: '20240212-do-not-use-placeholders-forms-coverage-insight-v5',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which statement best aligns with ADR "Do Not Use Placeholders Forms"?',
  options: [
    'Follow the ADR "Do Not Use Placeholders Forms" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Placeholder text has insufficient contrast, vanishes when content is entered, and displays poorly in Windows High Contrast Mode. Static labels and help text are more accessible. This follows the ADR "Do Not Use Placeholders Forms". This reinforces the ADR "Do Not Use Placeholders Forms".',
  source: 'https://architecture.lullabot.com/adr/20240212-do-not-use-placeholders-forms/',
};
