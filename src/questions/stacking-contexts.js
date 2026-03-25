export default {
  id: 'stacking-contexts',
  type: 'multiple-choice',
  category: 'frontend',
  question: 'When layering UI elements, what does Lullabot recommend instead of using a global z-index system?',
  options: [
    'Use arbitrarily high z-index values to guarantee the element stays on top',
    'Avoid z-index entirely and rely on DOM order for stacking',
    'Create deliberate, scoped stacking contexts and keep z-index values as low as possible',
    'Define a shared Sass map of z-index tokens managed by a design system',
  ],
  correctIndex: 2,
  explanation:
    'Global z-index systems break as soon as a new stacking context appears. Lullabot recommends creating deliberate, component-scoped stacking contexts and keeping z-index increments to ±1. This makes layering predictable and avoids conflicts between modals, dropdowns, and other floating elements.',
  source: 'https://architecture.lullabot.com/adr/20251210-create-deliberate-stacking-contexts/',
};
