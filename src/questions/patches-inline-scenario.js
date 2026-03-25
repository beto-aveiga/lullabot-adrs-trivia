export default {
  id: 'patches-inline-scenario',
  type: 'multiple-choice',
  category: 'composer',
  question: 'A new teammate asks where to review active dependency patches first. ADR says to check:',
  options: [
    'A separate docs wiki page',
    '`composer.json` patch definitions',
    'Server environment variables',
    'CI build logs only',
  ],
  correctIndex: 1,
  explanation: 'Patch intent should be visible in composer metadata for easier team review and maintenance.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patches-inline/',
};
