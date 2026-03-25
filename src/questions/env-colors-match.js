export default {
  id: 'env-colors-match',
  type: 'matching',
  category: 'drupal',
  question: 'Match each environment to its correct indicator color:',
  left: ['Live', 'Staging', 'Development', 'Local'],
  right: ['Red', 'Orange', 'Green', 'Grey'],
  correctPairs: [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
  ],
  explanation:
    'The standard colors are: Live = red (#e7131a), Staging = orange (#b85c00), Development = green (#307b24), Local = grey (#505050). Branch previews use blue.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
