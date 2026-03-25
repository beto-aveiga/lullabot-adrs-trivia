export default {
  id: 'relative-css-units-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'Which property is explicitly allowed to stay absolute even when using relative units broadly?',
  options: [
    'font-size',
    'line-height',
    'border width',
    'padding-inline',
  ],
  correctIndex: 2,
  explanation: 'The ADR allows absolute sizing for properties like border/outline/shadow while keeping typography/layout mostly relative.',
  source: 'https://architecture.lullabot.com/adr/20250320-use-relative-units-in-css/',
};
