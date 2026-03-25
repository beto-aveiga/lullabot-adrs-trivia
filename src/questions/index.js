const modules = import.meta.glob(
  [
    './*.js',
    '!./index.js',
    '!./*-insight-*.js',
    '!./*-fill-*.js',
    '!./*-workflow-*.js',
    '!./*-match-*.js',
    '!./*-coverage-*.js',
  ],
  { eager: true, import: 'default' }
);

export const questions = Object.values(modules).filter(Boolean);
