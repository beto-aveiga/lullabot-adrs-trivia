export default {
  id: 'no-placeholder-text',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'What is Lullabot\'s recommendation on placeholder text in form fields?',
  options: [
    'Use it to provide examples of valid input format',
    'Use it as the primary label for the field',
    'Avoid it — favor static field labels and help text',
    'Use it only in search fields and login forms',
  ],
  correctIndex: 2,
  explanation:
    'Placeholder text has insufficient contrast, vanishes when content is entered, and displays poorly in Windows High Contrast Mode. Static labels and help text are more accessible.',
  source: 'https://architecture.lullabot.com/adr/20240212-do-not-use-placeholders-forms/',
};
