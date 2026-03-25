export default {
  id: 'avoid-jquery-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'When is jQuery acceptable under the ADR that prefers native JavaScript?',
  options: [
    'Whenever a developer can code faster with jQuery helpers.',
    'Only when a required third-party dependency itself relies on jQuery.',
    'For all DOM querying in Drupal themes.',
    'For event handling but not AJAX requests.',
  ],
  correctIndex: 1,
  explanation: 'The ADR says to avoid jQuery for new code. A practical exception is when required dependencies include jQuery internally.',
  source: 'https://architecture.lullabot.com/adr/20250416-avoid-using-jquery/',
};
