# ADR Trivia

A fun, client-side trivia game that tests your knowledge of [Lullabot's Architecture Decision Records](https://architecture.lullabot.com/adrs/).

## Features

- **50 questions** across Drupal, front-end, DevOps, Composer, Git, and general topics
- **4 question types**: multiple-choice, fill-in-the-blank, drag-to-order, and matching
- **Game modes**: Classic (3 lives) and Daily Challenge (10 daily questions with shareable results)
- **Lifelines**: 50/50, Read the ADR, and Skip
- **Streak bonuses**: consecutive correct answers multiply your score
- **Countdown timer**: 20 seconds per question with speed-based scoring
- **Achievements**: unlock 10 badges as you play
- **Category filters**: focus on specific topics in Classic mode
- **End-of-game review**: see explanations and ADR links for every question
- **Fun polish**: confetti, screen shake, emoji feedback, animated scores
- **No server needed**: runs entirely in the browser, deployed to GitHub Pages

## Getting Started

### Prerequisites

- [DDEV](https://ddev.readthedocs.io/en/stable/) (Docker-based local environment)

### Setup

```sh
ddev start
ddev npm run dev
```

The game is available at `https://lullabot-adrs-trivia.ddev.site:5173`.

### Build for production

```sh
ddev npm run build
```

The static output in `dist/` can be deployed to any web server or CDN.

### Validate questions

```sh
ddev npm run validate
```

Checks that all question files in `src/questions/` have valid schemas.

## Contributing a Question

Each question is a single `.js` file in `src/questions/`. Drop a new file in that directory and it's automatically picked up — no imports to update.

### Question schema

Every question exports a default object with these common fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (matches the filename without `.js`) |
| `type` | string | One of: `multiple-choice`, `fill-blank`, `order`, `matching` |
| `category` | string | One of: `drupal`, `frontend`, `devops`, `composer`, `git`, `general` |
| `question` | string | The question text |
| `explanation` | string | Why the correct answer is right |
| `source` | string | URL to the source ADR |

Plus type-specific fields:

**multiple-choice / fill-blank:**
- `options` (string[]) — answer choices (use `___` in question text for fill-blank)
- `correctIndex` (number) — index of the correct option

**order:**
- `items` (string[]) — items to reorder
- `correctOrder` (number[]) — correct order as array of original indices

**matching:**
- `left` (string[]) — left column items
- `right` (string[]) — right column items
- `correctPairs` (number[][]) — pairs as `[leftIndex, rightIndex]`

### Example

```js
export default {
  id: 'my-question',
  type: 'multiple-choice',
  category: 'drupal',
  question: 'What is the answer to this question?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctIndex: 1,
  explanation: 'Option B is correct because...',
  source: 'https://architecture.lullabot.com/adr/...',
};
```

Run `ddev npm run validate` before submitting to check your question.

## Deployment

The project auto-deploys to GitHub Pages via GitHub Actions on every push to `main`. The workflow validates all questions, builds with Vite, and publishes the `dist/` folder.

## Tech Stack

- **Vite** — build tool and dev server
- **Tailwind CSS** (Play CDN) — utility-first styling
- **Web Audio API** — sound effects with zero external files
- **Cookies** — persistent scores, history, and achievements
- **DDEV** — local development environment
- **GitHub Actions** — CI/CD to GitHub Pages

## License

Content based on [Lullabot's ADRs](https://architecture.lullabot.com/adrs/), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
