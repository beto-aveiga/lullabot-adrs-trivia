export default {
  id: 'local-patches',
  type: 'multiple-choice',
  category: 'composer',
  question: 'Where should patch files be stored when using cweagans/composer-patches?',
  options: [
    'Referenced as remote URLs in composer.json',
    'Stored locally in a patches/ directory in the project',
    'Stored in the vendor directory alongside the patched package',
    'Stored in a separate git repository as submodule',
  ],
  correctIndex: 1,
  explanation:
    'Patches must be downloaded and stored locally — upstream ones in patches/upstream/, project-specific ones in patches/local/. Remote URLs should never be used because their contents may change unexpectedly.',
  source: 'https://architecture.lullabot.com/adr/20220429-composer-patch-files/',
};
