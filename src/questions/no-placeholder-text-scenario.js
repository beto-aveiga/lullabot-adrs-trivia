export default {
  id: 'no-placeholder-text-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What accessibility concern motivates avoiding placeholders as primary field instructions?',
  options: [
    'Placeholders are hidden by default in Safari.',
    'Placeholder text disappears on input and is often low-contrast, reducing usability.',
    'Placeholders increase backend validation errors.',
    'Placeholders cannot be translated in Drupal.',
  ],
  correctIndex: 1,
  explanation: 'Instructional content should remain visible and accessible; labels/help text are more reliable than placeholders.',
  source: 'https://architecture.lullabot.com/adr/20240212-do-not-use-placeholders-forms/',
};
