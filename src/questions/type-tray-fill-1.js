export default {
  id: 'type-tray-fill-1',
  type: 'fill-blank',
  category: 'drupal',
  question: 'Complete this summary from "Use Type Tray": teams should ___ when making this kind of decision.',
  options: [
    'use the ADR as the default team convention',
    'treat every project as a one-off exception',
    'skip documentation for implementation details',
    'defer standards until late QA',
  ],
  correctIndex: 0,
  explanation: 'Type Tray enhances the "Add Content" page by allowing content types to be grouped into categories with icons and descriptions, helping editors choose the right content type. This follows the ADR "Use Type Tray".',
  source: 'https://architecture.lullabot.com/adr/20220503-use-type-tray/',
};
