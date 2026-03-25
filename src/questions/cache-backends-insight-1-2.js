export default {
  id: 'cache-backends-insight-1-2',
  type: 'multiple-choice',
  category: 'devops',
  question: 'Which statement best reflects ADR 20220906 in "Identical Cache Backends"?',
  options: [
    'The ADR "Identical Cache Backends" defines the team standard for this topic.',
    'reduces deployment surprises between environments',
    'keeps automation deterministic across projects',
    'favors simple operational defaults over bespoke scripts',
  ],
  correctIndex: 0,
  explanation: 'Development environments must use the same cache backend as production. Different backends can cause hard-to-diagnose bugs. DDEV projects should use ddev-memcached or ddev-redis to match production. This follows the ADR "Identical Cache Backends".',
  source: 'https://architecture.lullabot.com/adr/20220906-identical-cache-backends/',
};
