export default {
  id: 'patches-inline',
  type: 'multiple-choice',
  category: 'composer',
  question: 'Where should Composer patches configuration be specified?',
  options: [
    'In a separate composer.patches.json file',
    'Inline in composer.json',
    'In a .patches.yml file at the project root',
    'In a patches/config.json file',
  ],
  correctIndex: 1,
  explanation:
    'Patches must be specified directly in composer.json, not a separate file. This ensures "composer validate" lints the entire Composer configuration, including patches.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patches-inline/',
};
