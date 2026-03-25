export default {
  id: 'simple-add-more-scenario',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'In which scenario is Simple Add More especially useful?',
  options: [
    'Single-value fields with no revisions',
    'Multi-value fields where editors repeatedly add similar items',
    'User account permission configuration',
    'Cron queue processing',
  ],
  correctIndex: 1,
  explanation: 'SAM improves editorial UX when adding/removing many repeated field items.',
  source: 'https://architecture.lullabot.com/adr/20220504-use-simple-add-more/',
};
