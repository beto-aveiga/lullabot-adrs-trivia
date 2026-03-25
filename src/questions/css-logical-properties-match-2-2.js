export default {
  id: 'css-logical-properties-match-2-2',
  type: 'matching',
  category: 'frontend',
  question: 'Match each ADR element to its purpose for "Use Css Logical Properties".',
  left: [
    'Decision',
    'Why',
    'Default action',
    'Exception handling',
  ],
  right: [
    'Describes the chosen approach',
    'Captures rationale and trade-offs',
    'What teams should implement first',
    'When and how deviations are documented',
  ],
  correctPairs: [[0, 0], [1, 1], [2, 2], [3, 3]],
  explanation: 'CSS Logical Properties replace directional terms with logical equivalents. margin-inline-start replaces margin-left in LTR layouts, making styles automatically support any writing direction. This follows the ADR "Use Css Logical Properties". This matching reinforces how to read and apply ADRs consistently.',
  source: 'https://architecture.lullabot.com/adr/20220622-use-css-logical-properties/',
};
