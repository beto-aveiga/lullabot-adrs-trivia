export default {
  id: 'relative-css-units',
  type: 'fill-blank',
  category: 'frontend',
  question: 'For resizable content, use ___ units instead of absolute px values in CSS.',
  options: ['rem', 'em', 'vw', 'ch'],
  correctIndex: 0,
  explanation:
    'Relative units like rem are recommended for all applicable properties so fonts respect browser preferences. Exceptions: border, box-shadow, and outline use absolute units. line-height should be unitless.',
  source: 'https://architecture.lullabot.com/adr/20250320-use-relative-units-in-css/',
};
