export default {
  id: '20210729-stage-file-proxy-coverage-fill-v6',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete the guidance for "Stage File Proxy": teams should ___ when this scenario appears.',
  options: [
    'apply the ADR recommendation first, then document exceptions',
    'ignore prior decisions when deadlines are tight',
    'skip implementation details and rely on oral knowledge',
    'optimize for novelty over maintainability',
  ],
  correctIndex: 0,
  explanation: 'Stage File Proxy automatically downloads files on-demand from the production origin URL. It is configured in settings.php and does not support private files. Hotlinking is not recommended. This follows the ADR "Stage File Proxy". This reinforces the ADR "Stage File Proxy".',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
