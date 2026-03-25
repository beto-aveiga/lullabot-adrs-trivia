export default {
  id: '20240212-do-not-use-placeholders-forms-coverage-match-v4',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR concept to its purpose for "Do Not Use Placeholders Forms".',
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
  explanation: 'Placeholder text has insufficient contrast, vanishes when content is entered, and displays poorly in Windows High Contrast Mode. Static labels and help text are more accessible. This follows the ADR "Do Not Use Placeholders Forms". This reinforces the ADR "Do Not Use Placeholders Forms".',
  source: 'https://architecture.lullabot.com/adr/20240212-do-not-use-placeholders-forms/',
};
