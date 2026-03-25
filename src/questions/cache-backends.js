export default {
  id: 'cache-backends',
  type: 'multiple-choice',
  category: 'devops',
  question: 'What cache backend should development environments use?',
  options: [
    'Database caching for simplicity',
    'No caching — disable it entirely in development',
    'The same cache backend as production',
    'A lightweight in-memory cache like APCu',
  ],
  correctIndex: 2,
  explanation:
    'Development environments must use the same cache backend as production. Different backends can cause hard-to-diagnose bugs. DDEV projects should use ddev-memcached or ddev-redis to match production.',
  source: 'https://architecture.lullabot.com/adr/20220906-identical-cache-backends/',
};
