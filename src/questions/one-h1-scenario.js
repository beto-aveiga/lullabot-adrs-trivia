export default {
  id: 'one-h1-scenario',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'If a page has one site title and one article title, what does the ADR suggest about heading structure?',
  options: [
    'Both can be h1 if visually distinct.',
    'Use one h1 and move the secondary heading to h2+.',
    'Use no h1 and start at h2.',
    'Use h1 only inside the main content, never in headers.',
  ],
  correctIndex: 1,
  explanation: 'A single h1 keeps semantic structure predictable for users and assistive technologies.',
  source: 'https://architecture.lullabot.com/adr/20250124-use-one-h1-per-page/',
};
