export default {
  id: 'stage-file-proxy-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What is Stage File Proxy primarily solving on non-production environments?',
  options: [
    'Automated private file encryption',
    'On-demand retrieval of public files from an origin environment',
    'Image style generation in production only',
    'Database migration rollback',
  ],
  correctIndex: 1,
  explanation: 'It lazily fetches needed files from origin, avoiding full file syncs while preserving editor/test workflows.',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
