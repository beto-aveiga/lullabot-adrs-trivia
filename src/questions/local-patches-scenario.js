export default {
  id: 'local-patches-scenario',
  type: 'multiple-choice',
  category: 'composer',
  question: 'Why should local patch files live in a dedicated project directory instead of random paths?',
  options: [
    'To keep patch provenance organized and reviewable in version control.',
    'To make Composer ignore failed patches.',
    'To reduce file permissions requirements.',
    'To avoid using `composer.lock`.',
  ],
  correctIndex: 0,
  explanation: 'A predictable patch location improves maintainability, review clarity, and long-term cleanup.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patch-files/',
};
