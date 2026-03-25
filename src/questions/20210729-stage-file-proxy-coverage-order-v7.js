export default {
  id: '20210729-stage-file-proxy-coverage-order-v7',
  type: 'order',
  category: 'drupal',
  question: 'Order a practical workflow for applying ADR "Stage File Proxy".',
  items: [
    'Record justified exceptions',
    'Read the ADR and clarify scope',
    'Verify behavior in review or QA',
    'Implement the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Stage File Proxy automatically downloads files on-demand from the production origin URL. It is configured in settings.php and does not support private files. Hotlinking is not recommended. This follows the ADR "Stage File Proxy". This reinforces the ADR "Stage File Proxy".',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
