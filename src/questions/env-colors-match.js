export default {
  id: 'env-colors-match',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which set of environment indicator colors matches the ADR standard?',
  options: [
    'Live red, staging orange, development green, local grey',
    'Live blue, staging red, development orange, local green',
    'Live grey, staging green, development red, local orange',
    'Live orange, staging blue, development grey, local red',
  ],
  correctIndex: 0,
  explanation:
    'The standard colors are: Live = red (#e7131a), Staging = orange (#b85c00), Development = green (#307b24), Local = grey (#505050). Branch previews use blue.',
  source: 'https://architecture.lullabot.com/adr/20210609-environment-indicator/',
};
