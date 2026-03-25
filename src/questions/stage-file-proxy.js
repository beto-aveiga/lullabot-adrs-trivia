export default {
  id: 'stage-file-proxy',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What module handles on-demand file downloads on non-production Drupal environments?',
  options: [
    'File Mirror',
    'Stage File Proxy',
    'Asset Sync',
    'Remote Stream Wrapper',
  ],
  correctIndex: 1,
  explanation:
    'Stage File Proxy automatically downloads files on-demand from the production origin URL. It is configured in settings.php and does not support private files. Hotlinking is not recommended.',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
