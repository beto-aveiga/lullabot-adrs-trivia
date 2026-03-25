import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const QUESTIONS_DIR = new URL('../src/questions/', import.meta.url).pathname;

const entries = [
  {
    baseId: 'avoid-aliases',
    type: 'multiple-choice',
    question: 'A teammate submits a deployment script with `drush cst` and `git co`. What ADR-aligned review comment is most appropriate?',
    options: [
      'Use long-form commands and options so every developer can read scripts without personal alias knowledge.',
      'Allow aliases in production scripts if an explanatory comment is included.',
      'Aliases are fine if CI succeeds on one machine.',
      'Aliases should be used only for Drupal commands, not Git.',
    ],
    correctIndex: 0,
    explanation:
      'Shared scripts should use explicit long-form commands. Aliases are personal shortcuts that reduce readability and portability.',
  },
  {
    baseId: 'avoid-jquery',
    type: 'multiple-choice',
    question: 'When is jQuery acceptable under the ADR that prefers native JavaScript?',
    options: [
      'Whenever a developer can code faster with jQuery helpers.',
      'Only when a required third-party dependency itself relies on jQuery.',
      'For all DOM querying in Drupal themes.',
      'For event handling but not AJAX requests.',
    ],
    correctIndex: 1,
    explanation:
      'The ADR says to avoid jQuery for new code. A practical exception is when required dependencies include jQuery internally.',
  },
  {
    baseId: 'block-user-one',
    type: 'multiple-choice',
    question: 'What is the strongest reason to block user 1 in production?',
    options: [
      'It reduces memory usage during cron runs.',
      'It guarantees all content edits are attributed to named users for auditing.',
      'It is required for caching to work.',
      'It enables anonymous page cache invalidation.',
    ],
    correctIndex: 1,
    explanation:
      'The goal is accountability and operational safety: actions should be tied to real user accounts, not a shared superuser.',
  },
  {
    baseId: 'branch-naming',
    type: 'multiple-choice',
    question: 'Why does the ADR prefer `[ticket-id]--[short-description]` over slash-based naming?',
    options: [
      'Double dashes produce shorter branch names.',
      'It avoids confusion with hierarchical branch prefixes created by slashes.',
      'Git does not allow slashes in remote branches.',
      'GitHub Actions only runs on branches with dashes.',
    ],
    correctIndex: 1,
    explanation:
      'Using `--` avoids ambiguity that slash-separated names introduce in some branch workflows and tooling expectations.',
  },
  {
    baseId: 'cache-backends',
    type: 'multiple-choice',
    question: 'What risk does the ADR try to reduce by matching cache backends between development and production?',
    options: [
      'Slow local Docker image pulls.',
      'Environment-specific cache bugs that only appear after deployment.',
      'Missing Git hooks in local clones.',
      'Overwritten composer.lock files.',
    ],
    correctIndex: 1,
    explanation:
      'Different cache backends can hide defects until production. Matching backends exposes behavior differences earlier.',
  },
  {
    baseId: 'claro-admin',
    type: 'multiple-choice',
    question: 'Why does the ADR recommend Claro instead of a contributed admin theme by default?',
    options: [
      'Claro provides stronger compatibility and reduces maintenance risk because it is in Drupal core.',
      'Claro supports every contrib module without testing.',
      'Claro is required for PHP 8.3 compatibility.',
      'Claro removes the need for accessibility testing.',
    ],
    correctIndex: 0,
    explanation:
      'A core-maintained admin theme lowers long-term support risk while preserving consistency and accessibility expectations.',
  },
  {
    baseId: 'composer-exit-failure',
    type: 'fill-blank',
    question: 'To fail fast when patches do not apply, Composer should ___ instead of continuing silently.',
    options: ['exit with a non-zero status', 'retry five times', 'skip patching in CI', 'switch patch level automatically'],
    correctIndex: 0,
    explanation:
      'Failing immediately prevents broken patch states from reaching later deployment steps.',
  },
  {
    baseId: 'composer-patchlevel',
    type: 'multiple-choice',
    question: 'Why is `-p2` required for `drupal/core` patches in this ADR?',
    options: [
      'Core files are nested under `vendor` paths that require a deeper strip level.',
      'It is faster than `-p1` on CI.',
      'Drupal 11 only supports `-p2`.',
      'The patch plugin ignores any other value.',
    ],
    correctIndex: 0,
    explanation:
      'Patch paths for Drupal core are nested, so `-p2` lines up filenames correctly and prevents misapplied hunks.',
  },
  {
    baseId: 'config-status',
    type: 'multiple-choice',
    question: 'A deployment succeeds but `drush config:status` shows differences afterward. What should happen?',
    options: [
      'Accept it as normal drift and proceed.',
      'Treat it as a failure because code and database config are out of sync.',
      'Only fail if more than five items differ.',
      'Run a config export in production to reconcile.',
    ],
    correctIndex: 1,
    explanation:
      'The ADR expects no config differences after build/deploy steps. Differences indicate drift and must fail the process.',
  },
  {
    baseId: 'css-logical-properties',
    type: 'multiple-choice',
    question: 'What is the key benefit of replacing `left/right` CSS with logical properties?',
    options: [
      'It automatically adapts to writing direction (LTR/RTL) without duplicate style rules.',
      'It reduces CSS bundle size by 50%.',
      'It enables GPU acceleration for layout properties.',
      'It disables browser-specific prefixing.',
    ],
    correctIndex: 0,
    explanation:
      'Logical properties describe intent rather than direction, so layouts adapt naturally across writing modes.',
  },
  {
    baseId: 'ddev-local',
    type: 'multiple-choice',
    question: 'Which trade-off does the DDEV ADR optimize for?',
    options: [
      'Maximum one-time setup speed on a single laptop.',
      'Consistent, reproducible local environments across the whole team.',
      'Avoiding Docker entirely.',
      'Running production traffic from local machines.',
    ],
    correctIndex: 1,
    explanation:
      'DDEV standardizes local tooling in containers so onboarding, debugging, and collaboration are more predictable.',
  },
  {
    baseId: 'dedicated-accounts',
    type: 'multiple-choice',
    question: 'Why should integrations use dedicated accounts owned by the client organization?',
    options: [
      'To avoid operational disruptions when individual team members roll off the project.',
      'To share passwords more easily between contractors.',
      'To bypass two-factor authentication requirements.',
      'To avoid creating separate CI credentials.',
    ],
    correctIndex: 0,
    explanation:
      'Service ownership should survive personnel changes; dedicated accounts prevent lockouts and unclear ownership.',
  },
  {
    baseId: 'drush-deploy',
    type: 'multiple-choice',
    question: 'What is the main advantage of standardizing on `drush deploy`?',
    options: [
      'It guarantees zero downtime by itself.',
      'It bundles key deployment steps into one repeatable command sequence.',
      'It removes the need for configuration management.',
      'It replaces all CI/CD workflows.',
    ],
    correctIndex: 1,
    explanation:
      'The ADR standardizes deployment behavior by encapsulating common steps in one command pipeline.',
  },
  {
    baseId: 'env-colors-match',
    type: 'multiple-choice',
    question: 'Which color pairing is correct for production according to the environment indicator ADR?',
    options: ['Blue background with white text', 'Red background with white text', 'Green background with black text', 'Grey background with white text'],
    correctIndex: 1,
    explanation:
      'Production/live should be visually distinct as red; staging/development/local use different colors for quick safety cues.',
  },
  {
    baseId: 'environment-indicator',
    type: 'multiple-choice',
    question: 'What practical problem does environment color coding primarily prevent?',
    options: [
      'Slow module installation.',
      'Accidental edits in the wrong environment.',
      'Database schema corruption.',
      'Broken image style generation.',
    ],
    correctIndex: 1,
    explanation:
      'Clear visual signals reduce operator mistakes, especially when switching quickly between local, staging, and production.',
  },
  {
    baseId: 'field-naming',
    type: 'multiple-choice',
    question: 'A field is unique to the `article` bundle. Which naming style aligns with the ADR?',
    options: ['field_summary', 'field_article__summary', 'article_field_summary', 'field_article_summary_1'],
    correctIndex: 1,
    explanation:
      'Non-reusable fields include the bundle and field name separated by a double underscore.',
  },
  {
    baseId: 'hide-untranslatable',
    type: 'multiple-choice',
    question: 'Why hide untranslatable fields on translation forms?',
    options: [
      'To avoid editors changing values that are shared across all translations.',
      'To make node forms load faster in all environments.',
      'To enforce strict schema typing in PHP.',
      'To remove field-level access checks.',
    ],
    correctIndex: 0,
    explanation:
      'These fields are not language-specific, so showing them on translation forms causes confusion and accidental edits.',
  },
  {
    baseId: 'imagemagick',
    type: 'multiple-choice',
    question: 'What is the ADR default for Drupal image processing?',
    options: ['GD library only', 'ImageMagick', 'Client-side canvas transforms', 'No server-side image processing'],
    correctIndex: 1,
    explanation:
      'The ADR sets ImageMagick as the preferred default processing backend for consistency and capability.',
  },
  {
    baseId: 'inclusive-language',
    type: 'fill-blank',
    question: 'When renaming branches and docs terminology, replace `master` with ___.',
    options: ['main', 'primary-admin', 'root', 'production'],
    correctIndex: 0,
    explanation:
      'The ADR establishes inclusive language conventions in both code and documentation.',
  },
  {
    baseId: 'js-defer',
    type: 'multiple-choice',
    question: 'Why does the ADR default external scripts to `defer`?',
    options: [
      'It blocks parsing until each script downloads.',
      'It preserves document order while avoiding render-blocking behavior.',
      'It forces scripts to run after `load` only.',
      'It is required for all inline scripts.',
    ],
    correctIndex: 1,
    explanation:
      '`defer` keeps execution ordered but removes parser blocking, improving startup behavior for most external scripts.',
  },
  {
    baseId: 'js-strict-mode',
    type: 'multiple-choice',
    question: 'What quality benefit is most directly tied to enabling JavaScript strict mode?',
    options: [
      'It catches silent errors (like accidental globals) by turning them into explicit failures.',
      'It minifies scripts automatically.',
      'It replaces ESLint rules.',
      'It guarantees backward compatibility with old browsers.',
    ],
    correctIndex: 0,
    explanation:
      'Strict mode tightens semantics and surfaces mistakes earlier in development.',
  },
  {
    baseId: 'local-patches',
    type: 'multiple-choice',
    question: 'Why should local patch files live in a dedicated project directory instead of random paths?',
    options: [
      'To keep patch provenance organized and reviewable in version control.',
      'To make Composer ignore failed patches.',
      'To reduce file permissions requirements.',
      'To avoid using `composer.lock`.',
    ],
    correctIndex: 0,
    explanation:
      'A predictable patch location improves maintainability, review clarity, and long-term cleanup.',
  },
  {
    baseId: 'lock-language',
    type: 'multiple-choice',
    question: 'What editor-facing behavior does the ADR require for content language on edit forms?',
    options: [
      'Language can be changed by any authenticated user.',
      'Language selection should be locked/hidden to prevent accidental changes.',
      'Language should default to English but remain editable.',
      'Language can only be changed via Quick Edit.',
    ],
    correctIndex: 1,
    explanation:
      'Language changes can create downstream content and translation issues, so accidental edits should be prevented.',
  },
  {
    baseId: 'main-deployable',
    type: 'multiple-choice',
    question: 'Which statement best reflects the “main deployable” ADR?',
    options: [
      'Main can be unstable as long as release branches are stable.',
      'Main should always represent a deployable state in launched projects.',
      'Only tags need to be deployable.',
      'Deployability applies only to backend code.',
    ],
    correctIndex: 1,
    explanation:
      'Keeping main deployable supports safer, faster delivery and clearer team expectations.',
  },
  {
    baseId: 'microcontent',
    type: 'multiple-choice',
    question: 'What characteristic best defines “microcontent” in this ADR?',
    options: [
      'A full page node intended for public routing.',
      'An embeddable content entity without its own URL.',
      'A taxonomy term with custom fields.',
      'A static JSON file in the repository.',
    ],
    correctIndex: 1,
    explanation:
      'Microcontent refers to reusable embedded content pieces that are not standalone routed pages.',
  },
  {
    baseId: 'no-metatag-field',
    type: 'multiple-choice',
    question: 'Why avoid adding Metatag fields directly to node forms by default?',
    options: [
      'It creates unnecessary editor complexity and encourages low-value manual metadata edits.',
      'Metatag module cannot run on Drupal 10.',
      'Search engines ignore metadata from Drupal nodes.',
      'It prevents canonical URL generation.',
    ],
    correctIndex: 0,
    explanation:
      'The ADR favors simpler authoring forms and centralized metadata strategy over per-node manual overrides.',
  },
  {
    baseId: 'no-placeholder-text',
    type: 'multiple-choice',
    question: 'What accessibility concern motivates avoiding placeholders as primary field instructions?',
    options: [
      'Placeholders are hidden by default in Safari.',
      'Placeholder text disappears on input and is often low-contrast, reducing usability.',
      'Placeholders increase backend validation errors.',
      'Placeholders cannot be translated in Drupal.',
    ],
    correctIndex: 1,
    explanation:
      'Instructional content should remain visible and accessible; labels/help text are more reliable than placeholders.',
  },
  {
    baseId: 'one-h1',
    type: 'multiple-choice',
    question: 'If a page has one site title and one article title, what does the ADR suggest about heading structure?',
    options: [
      'Both can be h1 if visually distinct.',
      'Use one h1 and move the secondary heading to h2+.',
      'Use no h1 and start at h2.',
      'Use h1 only inside the main content, never in headers.',
    ],
    correctIndex: 1,
    explanation:
      'A single h1 keeps semantic structure predictable for users and assistive technologies.',
  },
  {
    baseId: 'patches-inline',
    type: 'multiple-choice',
    question: 'Why keep Composer patch definitions inline in `composer.json`?',
    options: [
      'It centralizes dependency and patch intent in one reviewable manifest.',
      'It makes patch application optional in CI.',
      'It eliminates the need for patch files.',
      'It avoids using Composer plugins.',
    ],
    correctIndex: 0,
    explanation:
      'Inline patch config keeps maintenance context visible during dependency reviews.',
  },
  {
    baseId: 'php-strict-types',
    type: 'fill-blank',
    question: 'New PHP files should start with ___ to enforce strict scalar type behavior.',
    options: ['declare(strict_types=1);', 'error_reporting(E_ALL);', 'namespace StrictTypes;', 'ini_set("strict", 1);'],
    correctIndex: 0,
    explanation:
      'The ADR standardizes strict typing declarations to reduce implicit type coercion bugs.',
  },
  {
    baseId: 'php-typehints',
    type: 'multiple-choice',
    question: 'What does “require type declarations” mean in practice for new PHP code?',
    options: [
      'Only method return types are required.',
      'Both parameter and return types should be declared whenever possible.',
      'Only class properties need types.',
      'Types are optional if PHPUnit tests exist.',
    ],
    correctIndex: 1,
    explanation:
      'Consistent parameter and return typing improves static analysis, readability, and refactoring safety.',
  },
  {
    baseId: 'phpstan-level',
    type: 'multiple-choice',
    question: 'Why does the ADR enforce PHPStan compliance for new code?',
    options: [
      'To replace code review entirely.',
      'To catch type and logic issues earlier with static analysis gates.',
      'To speed up composer install.',
      'To force framework upgrades.',
    ],
    correctIndex: 1,
    explanation:
      'Static analysis as a baseline quality gate prevents subtle defects from reaching runtime.',
  },
  {
    baseId: 'phpunit-testing',
    type: 'multiple-choice',
    question: 'What is the ADR’s intended role for PHPUnit in projects?',
    options: [
      'A replacement for manual QA.',
      'A standard unit testing framework to verify behavior and reduce regressions.',
      'A load-testing tool for deployment pipelines.',
      'A code formatter for PHP files.',
    ],
    correctIndex: 1,
    explanation:
      'The ADR standardizes PHPUnit for consistent, automated behavior verification.',
  },
  {
    baseId: 'readme-docs',
    type: 'multiple-choice',
    question: 'Which README section helps new contributors reach a runnable state the fastest?',
    options: ['Project history', 'Getting Started', 'License', 'Team roster'],
    correctIndex: 1,
    explanation:
      'The ADR requires a clear Getting Started section so collaborators can run the project without guesswork.',
  },
  {
    baseId: 'relative-css-units',
    type: 'multiple-choice',
    question: 'What is the ADR-consistent default for typography sizing in CSS?',
    options: ['Absolute `px` values only', 'Relative units like `rem` plus unitless line-height', 'Viewport units for all text', 'Percent values for everything'],
    correctIndex: 1,
    explanation:
      'Relative units improve accessibility and respect user text scaling preferences.',
  },
  {
    baseId: 'renovate',
    type: 'multiple-choice',
    question: 'What collaboration pattern does Renovate encourage according to the ADR?',
    options: [
      'Direct pushes to main for dependency updates.',
      'Automated pull requests reviewed and validated through CI.',
      'Manual quarterly dependency upgrades only.',
      'Dependency updates only during major releases.',
    ],
    correctIndex: 1,
    explanation:
      'PR-based automation keeps update work visible, testable, and safely reviewable.',
  },
  {
    baseId: 'self-host-assets',
    type: 'multiple-choice',
    question: 'Which is the ADR-preferred default for fonts/icons used by the UI?',
    options: ['Host assets in-project and serve them directly', 'Always rely on third-party CDNs', 'Embed all assets as data URIs', 'Use runtime JS loaders from vendor domains'],
    correctIndex: 0,
    explanation:
      'Self-hosting critical assets reduces third-party dependency risk and improves privacy/control.',
  },
  {
    baseId: 'settings-php',
    type: 'multiple-choice',
    question: 'For environment-specific Drupal behavior, what should be the primary mechanism?',
    options: [
      'Config Split per environment',
      'Conditional includes in `settings.php` (e.g., `settings.local.php`)',
      'Manual database edits',
      'Theme preprocess logic',
    ],
    correctIndex: 1,
    explanation:
      'The ADR prefers settings-based overrides for environments instead of configuration split drift.',
  },
  {
    baseId: 'simple-add-more',
    type: 'multiple-choice',
    question: 'In which scenario is Simple Add More especially useful?',
    options: [
      'Single-value fields with no revisions',
      'Multi-value fields where editors repeatedly add similar items',
      'User account permission configuration',
      'Cron queue processing',
    ],
    correctIndex: 1,
    explanation:
      'SAM improves editorial UX when adding/removing many repeated field items.',
  },
  {
    baseId: 'smacss-css',
    type: 'multiple-choice',
    question: 'What is the practical benefit of using SMACSS in Lullabot projects?',
    options: [
      'It guarantees zero CSS regressions.',
      'It creates a shared organizational model developers can recognize across projects.',
      'It eliminates the need for design systems.',
      'It converts CSS into TypeScript.',
    ],
    correctIndex: 1,
    explanation:
      'A consistent CSS architecture lowers onboarding cost and improves maintainability.',
  },
  {
    baseId: 'stage-file-proxy',
    type: 'multiple-choice',
    question: 'What is Stage File Proxy primarily solving on non-production environments?',
    options: [
      'Automated private file encryption',
      'On-demand retrieval of public files from an origin environment',
      'Image style generation in production only',
      'Database migration rollback',
    ],
    correctIndex: 1,
    explanation:
      'It lazily fetches needed files from origin, avoiding full file syncs while preserving editor/test workflows.',
  },
  {
    baseId: 'svg-icons',
    type: 'multiple-choice',
    question: 'Why are SVG icons preferred over icon fonts in the ADR?',
    options: [
      'SVGs are scalable, accessible, and styleable without font loading quirks.',
      'SVGs always produce smaller files than fonts.',
      'SVGs eliminate all browser rendering bugs.',
      'Icon fonts cannot be cached by browsers.',
    ],
    correctIndex: 0,
    explanation:
      'SVG better matches modern accessibility and rendering needs for iconography.',
  },
  {
    baseId: 'svg-viewbox',
    type: 'fill-blank',
    question: 'For flexible SVG sizing in CSS, include ___ and omit explicit width/height attributes.',
    options: ['viewBox', 'preserveAspectRatio', 'xmlns', 'clipPathUnits'],
    correctIndex: 0,
    explanation:
      'A proper viewBox defines intrinsic coordinates while CSS controls rendered size.',
  },
  {
    baseId: 'tool-purpose-match',
    type: 'multiple-choice',
    question: 'Which tool in the Lullabot stack is responsible for static code analysis?',
    options: ['DDEV', 'Stage File Proxy', 'PHPStan', 'Renovate'],
    correctIndex: 2,
    explanation:
      'PHPStan provides static analysis; the other tools cover local envs, file proxying, and dependency automation.',
  },
  {
    baseId: 'twig-linting',
    type: 'multiple-choice',
    question: 'Which combination is ADR-aligned for Twig code standards in Drupal projects?',
    options: [
      'Prettier only',
      'Twig-CS-Fixer plus Twig-CS-Fixer-Drupal rules',
      'ESLint with HTML plugin',
      'PHPCS without Twig tooling',
    ],
    correctIndex: 1,
    explanation:
      'Twig-CS-Fixer enforces base Twig standards and the Drupal companion package adds Drupal-specific rules.',
  },
  {
    baseId: 'type-tray',
    type: 'multiple-choice',
    question: 'What editorial problem does Type Tray address on the Add Content screen?',
    options: [
      'It adds GraphQL endpoints for each content type.',
      'It organizes content types with categories/icons to reduce author confusion.',
      'It replaces node add routes with JSON APIs.',
      'It disables access checks for fast publishing.',
    ],
    correctIndex: 1,
    explanation:
      'Type Tray improves discoverability and decision confidence for editors creating content.',
  },
  {
    baseId: 'typed-entity',
    type: 'multiple-choice',
    question: 'Why choose Typed Entity over bundle class logic directly in entities?',
    options: [
      'Typed Entity reduces API surface and cleanly isolates business logic in dedicated classes.',
      'Typed Entity replaces Drupal entity APIs entirely.',
      'Typed Entity only works for taxonomy terms.',
      'Typed Entity removes caching metadata requirements.',
    ],
    correctIndex: 0,
    explanation:
      'The ADR favors clearer boundaries and maintainable business logic encapsulation.',
  },
  {
    baseId: 'use-typescript',
    type: 'multiple-choice',
    question: 'What is the ADR’s practical rationale for preferring TypeScript in selected contexts?',
    options: [
      'It removes the need for tests.',
      'It improves reliability and maintainability in complex JS/Node codebases through type safety.',
      'It compiles faster than JavaScript in all cases.',
      'It is required by all modern browsers.',
    ],
    correctIndex: 1,
    explanation:
      'Type safety helps catch defects early and supports safer refactors in larger JavaScript systems.',
  },
  {
    baseId: 'view-modes',
    type: 'multiple-choice',
    question: 'Why does the ADR insist on rendering entities through view modes even for simple output?',
    options: [
      'View modes preserve Drupal render and cache metadata expectations.',
      'View modes are required for multilingual routing only.',
      'View modes skip theme hooks for speed.',
      'View modes prevent formatter configuration.',
    ],
    correctIndex: 0,
    explanation:
      'View modes keep rendering consistent and cache-safe compared with ad-hoc field extraction.',
  },
  {
    baseId: 'views-filter-ids',
    type: 'multiple-choice',
    question: 'What user-facing benefit comes from human-readable exposed filter identifiers in Views?',
    options: [
      'Shorter SQL queries.',
      'Stable, understandable URL parameters that survive backend field renames.',
      'Automatic translation of all filter values.',
      'No need for cache contexts.',
    ],
    correctIndex: 1,
    explanation:
      'Readable filter IDs produce cleaner URLs and reduce breakage in shared/bookmarked links.',
  },
  {
    baseId: 'patches-inline',
    type: 'multiple-choice',
    question: 'A new teammate asks where to review active dependency patches first. ADR says to check:',
    options: ['A separate docs wiki page', '`composer.json` patch definitions', 'Server environment variables', 'CI build logs only'],
    correctIndex: 1,
    explanation:
      'Patch intent should be visible in composer metadata for easier team review and maintenance.',
  },
  {
    baseId: 'phpunit-testing',
    type: 'fill-blank',
    question: 'For PHP unit tests in this project standard, use ___ as the default framework.',
    options: ['PHPUnit', 'Behat', 'Pest only', 'Codeception'],
    correctIndex: 0,
    explanation:
      'The ADR standardizes on PHPUnit for unit-level verification in PHP code.',
  },
  {
    baseId: 'readme-docs',
    type: 'fill-blank',
    question: 'A minimal project README should include both “Getting Started” and “___” sections.',
    options: ['Running Tests', 'Changelog', 'Architecture Committee', 'Release Notes Archive'],
    correctIndex: 0,
    explanation:
      'The ADR sets baseline sections so contributors can run and verify projects quickly.',
  },
  {
    baseId: 'relative-css-units',
    type: 'multiple-choice',
    question: 'Which property is explicitly allowed to stay absolute even when using relative units broadly?',
    options: ['font-size', 'line-height', 'border width', 'padding-inline'],
    correctIndex: 2,
    explanation:
      'The ADR allows absolute sizing for properties like border/outline/shadow while keeping typography/layout mostly relative.',
  },
  {
    baseId: 'self-host-assets',
    type: 'multiple-choice',
    question: 'Which exception does the self-hosted assets ADR acknowledge?',
    options: [
      'No exceptions are allowed.',
      'Maps/video services or CDNs with commercial SLAs may be reasonable exceptions.',
      'All analytics scripts must be self-hosted.',
      'Fonts must always be fetched from Google Fonts CDN.',
    ],
    correctIndex: 1,
    explanation:
      'The default is self-hosting, with explicit pragmatic exceptions for certain specialized services.',
  },
  {
    baseId: 'drush-deploy',
    type: 'order',
    question: 'Order these deployment concerns in a sensible flow around `drush deploy`:',
    items: ['Run cache rebuild step', 'Apply database updates/config/deploy hooks', 'Trigger the deployment command', 'Verify post-deploy state'],
    correctOrder: [2, 1, 0, 3],
    explanation:
      'The ADR frames `drush deploy` as the main entry point, then ensures the composed steps and verification happen reliably.',
  },
  {
    baseId: 'main-deployable',
    type: 'order',
    question: 'Order this healthy release habit for keeping main deployable:',
    items: ['Merge unstable work directly to main', 'Run tests and review before merge', 'Keep main releasable after merge', 'Prepare changes in feature branches'],
    correctOrder: [3, 1, 2, 0],
    explanation:
      'Work should be prepared and validated before merge; main should remain deployable, not a staging area for broken work.',
  },
  {
    baseId: 'settings-php',
    type: 'order',
    question: 'Order the ADR-aligned way to manage environment-specific Drupal settings:',
    items: ['Store all differences in Config Split only', 'Include environment-specific settings files from settings.php', 'Define shared base settings', 'Override only environment-specific values'],
    correctOrder: [2, 1, 3, 0],
    explanation:
      'Shared defaults live in base settings, then environment-specific overrides are layered intentionally via includes.',
  },
  {
    baseId: 'env-colors-match',
    type: 'order',
    question: 'Order environment indicator severity from highest caution to lowest for the default color scheme:',
    items: ['Local (grey)', 'Staging (orange)', 'Development (green)', 'Live (red)'],
    correctOrder: [3, 1, 2, 0],
    explanation:
      'Live should stand out most (red), followed by staging, development, and local.',
  },
  {
    baseId: 'microcontent',
    type: 'multiple-choice',
    question: 'Which content modeling choice most closely follows the microcontent ADR?',
    options: [
      'Create full page nodes for every reusable snippet.',
      'Model reusable snippets as embeddable entities without independent routes.',
      'Store snippets only as hardcoded Twig includes.',
      'Use JSON in config files for all reusable content.',
    ],
    correctIndex: 1,
    explanation:
      'Microcontent is explicitly about reusable embedded entities that are not standalone pages.',
  },
];

function toModule(q) {
  const lines = [];
  lines.push('export default {');
  lines.push(`  id: '${q.id}',`);
  lines.push(`  type: '${q.type}',`);
  lines.push(`  category: '${q.category}',`);
  lines.push(`  question: '${q.question.replace(/'/g, "\\'")}',`);
  if (q.type === 'multiple-choice' || q.type === 'fill-blank') {
    lines.push('  options: [');
    q.options.forEach((o) => lines.push(`    '${o.replace(/'/g, "\\'")}',`));
    lines.push('  ],');
    lines.push(`  correctIndex: ${q.correctIndex},`);
  } else if (q.type === 'order') {
    lines.push('  items: [');
    q.items.forEach((i) => lines.push(`    '${i.replace(/'/g, "\\'")}',`));
    lines.push('  ],');
    lines.push(`  correctOrder: [${q.correctOrder.join(', ')}],`);
  }
  lines.push(`  explanation: '${q.explanation.replace(/'/g, "\\'")}',`);
  lines.push(`  source: '${q.source}',`);
  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

async function loadBaseMap() {
  const files = (await readdir(QUESTIONS_DIR)).filter(
    (f) => f.endsWith('.js') && f !== 'index.js' && !/-(insight|fill|workflow|match)-\d+(-\d+)?\.js$|-coverage-.*\.js$/.test(f)
  );
  const byId = new Map();
  for (const file of files) {
    const q = (await import(pathToFileURL(join(QUESTIONS_DIR, file)).href)).default;
    byId.set(q.id, q);
  }
  return byId;
}

async function main() {
  const base = await loadBaseMap();
  let created = 0;
  for (const entry of entries) {
    const baseQ = base.get(entry.baseId);
    if (!baseQ) {
      throw new Error(`Base question not found for ${entry.baseId}`);
    }
    const q = {
      id: `${entry.baseId}-scenario`,
      type: entry.type,
      category: baseQ.category,
      question: entry.question,
      explanation: entry.explanation,
      source: baseQ.source,
      options: entry.options,
      correctIndex: entry.correctIndex,
      items: entry.items,
      correctOrder: entry.correctOrder,
    };
    const filename = join(QUESTIONS_DIR, `${q.id}.js`);
    await writeFile(filename, toModule(q), 'utf8');
    created++;
  }
  console.log(`Created ${created} human-authored scenario questions.`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
