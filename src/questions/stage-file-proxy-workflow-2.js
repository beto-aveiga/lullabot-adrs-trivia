export default {
  id: 'stage-file-proxy-workflow-2',
  type: 'order',
  category: 'drupal',
  question: 'Order a sensible implementation flow for ADR "Stage File Proxy".',
  items: [
    'Document project-specific exceptions',
    'Read the ADR decision',
    'Validate in code review/QA',
    'Apply the recommended default',
  ],
  correctOrder: [1, 3, 0, 2],
  explanation: 'Stage File Proxy automatically downloads files on-demand from the production origin URL. It is configured in settings.php and does not support private files. Hotlinking is not recommended. This follows the ADR "Stage File Proxy". A practical flow is: understand the decision, apply it, document exceptions, then validate.',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
