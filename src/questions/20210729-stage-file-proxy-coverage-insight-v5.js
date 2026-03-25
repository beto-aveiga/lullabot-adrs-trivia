export default {
  id: '20210729-stage-file-proxy-coverage-insight-v5',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'Which statement best aligns with ADR "Stage File Proxy"?',
  options: [
    'Follow the ADR "Stage File Proxy" as the default team convention.',
    'Treat each implementation as an undocumented one-off.',
    'Delay the decision until final QA to reduce upfront effort.',
    'Prefer personal preference over team standards for this topic.',
  ],
  correctIndex: 0,
  explanation: 'Stage File Proxy automatically downloads files on-demand from the production origin URL. It is configured in settings.php and does not support private files. Hotlinking is not recommended. This follows the ADR "Stage File Proxy". This reinforces the ADR "Stage File Proxy".',
  source: 'https://architecture.lullabot.com/adr/20210729-stage-file-proxy/',
};
