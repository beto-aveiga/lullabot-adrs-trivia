export default {
  id: 'one-h1',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'How many h1 headings should appear on a single page?',
  options: [
    'As many as needed for each section',
    'Exactly one per page',
    'Two — one visible and one for screen readers',
    'None — use h2 as the top-level heading',
  ],
  correctIndex: 1,
  explanation:
    'Only one h1 should exist per page. It conveys the page\'s purpose to all users. Screen reader users navigate via web rotors, so multiple h1s remove meaningful context.',
  source: 'https://architecture.lullabot.com/adr/20250124-use-one-h1-per-page/',
};
