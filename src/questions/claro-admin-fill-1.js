export default {
  id: 'claro-admin-fill-1',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Use Claro As Admin Theme": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Claro is the recommended Drupal administration theme. It ensures consistency, accessibility, and compatibility with contributed modules. Using a core theme avoids risks from unsupported third-party themes. This follows the ADR "Use Claro As Admin Theme".',
  source: 'https://architecture.lullabot.com/adr/20220519-use-claro-as-admin-theme/',
};
