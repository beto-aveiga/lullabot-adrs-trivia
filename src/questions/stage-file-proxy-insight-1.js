export default {
  id: 'stage-file-proxy-insight-1',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best reflects ADR 20210729 in "Stage File Proxy"?',
  options: [
    'keeps production changes auditable and low risk',
    'reduces editorial confusion across content types',
    'improves local DX and repeatable workflows',
    'The ADR "Stage File Proxy" defines the team standard for this topic.',
  ],
  correctIndex: 3,
  explanation: 'Stage File Proxy automatically downloads files on-demand from the production origin URL. It is configured in settings.php and does not support private files. Hotlinking is not recommended. This follows the ADR "Stage File Proxy".',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
