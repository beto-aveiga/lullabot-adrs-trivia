import { questions } from './questions/index.js';
import { createTimer } from './timer.js';
import { createLifelines } from './lifelines.js';
import { recordAnswer, recordGameEnd, loadData, saveData, saveDailyResult, getDailyResult } from './storage.js';
import { playCorrectSound, playWrongSound, playStreakSound, playLifeLost } from './sounds.js';
import { checkAchievements } from './achievements.js';
import { renderMultipleChoice, revealMultipleChoice, applyFiftyFifty } from './renderers/multiple-choice.js';
import { renderFillBlank, revealFillBlank, applyFiftyFiftyFillBlank } from './renderers/fill-blank.js';
import { renderOrder, revealOrder } from './renderers/order.js';
import { renderMatching, revealMatching, isMatchingCorrect } from './renderers/matching.js';

const BASE_POINTS = 1000;
const MAX_LIVES = 3;

export function createGame(app, options, onGameEnd) {
  const { mode, categories } = options;
  let gameQuestions = getQuestionsForMode(mode, categories);
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let highStreak = 0;
  let lives = mode === 'classic' ? MAX_LIVES : Infinity;
  let correct = 0;
  let skipped = [];
  let answers = [];
  let timer = null;
  let lifelines = null;
  let currentRendererData = null;
  let startTime = Date.now();
  let readAdrUseCount = 0;
  let continueMode = false;

  function getQuestionsForMode(mode, categories) {
    let pool = [...questions];
    if (categories && categories.length > 0) {
      pool = pool.filter((q) => categories.includes(q.category));
    }
    shuffleArray(pool);
    if (mode === 'daily') {
      const seed = getDailySeed();
      pool = seededShuffle(questions.filter((q) => !categories || categories.length === 0 || categories.includes(q.category)), seed);
      return pool.slice(0, 10);
    }
    return pool;
  }

  function getDailySeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function seededShuffle(arr, seed) {
    const copy = [...arr];
    let s = seed;
    for (let i = copy.length - 1; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderQuestion() {
    app.innerHTML = '';
    if (currentIndex >= gameQuestions.length) {
      endGame();
      return;
    }
    if (lives <= 0) {
      endGame();
      return;
    }

    const q = gameQuestions[currentIndex];

    // Header
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between mb-4';

    const scoreEl = document.createElement('div');
    scoreEl.className = 'text-lg font-bold text-teal-400';
    scoreEl.innerHTML = `<span class="text-slate-400 text-sm font-normal">Score</span> <span id="score-display">${score}</span>`;

    const streakEl = document.createElement('div');
    streakEl.id = 'streak-display';
    streakEl.className = streak > 0 ? 'text-orange-400 font-bold' : 'text-slate-500';
    streakEl.textContent = streak > 0 ? `🔥 x${streak}` : '';

    const livesEl = document.createElement('div');
    livesEl.className = 'flex gap-1';
    if (mode === 'classic' && !continueMode) {
      for (let i = 0; i < MAX_LIVES; i++) {
        const heart = document.createElement('span');
        heart.className = `text-xl ${i < lives ? 'text-red-500' : 'text-slate-700'} ${lives === 1 && i < lives ? 'animate-pulse-heart' : ''}`;
        heart.textContent = '♥';
        livesEl.appendChild(heart);
      }
    }

    header.appendChild(scoreEl);
    header.appendChild(streakEl);
    header.appendChild(livesEl);
    app.appendChild(header);

    // Progress
    const progress = document.createElement('div');
    progress.className = 'flex items-center gap-3 mb-2';
    const progressText = document.createElement('span');
    progressText.className = 'text-sm text-slate-400';
    const total = mode === 'daily' && !continueMode ? 10 : gameQuestions.length;
    progressText.textContent = `Question ${currentIndex + 1} of ${total}`;

    const progressBar = document.createElement('div');
    progressBar.className = 'flex-1 h-2 bg-slate-700 rounded-full overflow-hidden';
    const progressFill = document.createElement('div');
    progressFill.className = 'h-full bg-teal-500 rounded-full transition-all duration-500';
    progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
    progressBar.appendChild(progressFill);

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300';
    categoryBadge.textContent = q.category;

    progress.appendChild(progressText);
    progress.appendChild(progressBar);
    progress.appendChild(categoryBadge);
    app.appendChild(progress);

    // Timer
    const timerContainer = document.createElement('div');
    app.appendChild(timerContainer);
    timer = createTimer(timerContainer, () => handleAnswer(null, true));
    timer.start();

    // Question text
    const questionEl = document.createElement('h2');
    questionEl.className = 'text-xl font-bold text-slate-100 mt-4 leading-snug';
    questionEl.textContent = q.question;
    app.appendChild(questionEl);

    // Lifelines
    lifelines = createLifelines((type) => {
      if (type === 'fiftyFifty') {
        if (q.type === 'multiple-choice' && currentRendererData) {
          applyFiftyFifty(currentRendererData, q.correctIndex);
        } else if (q.type === 'fill-blank' && currentRendererData) {
          applyFiftyFiftyFillBlank(currentRendererData, q.correctIndex);
        }
      } else if (type === 'readAdr') {
        readAdrUseCount++;
        const data = loadData();
        data.readAdrUses = (data.readAdrUses || 0) + 1;
        saveData(data);
        window.open(q.source, '_blank');
      } else if (type === 'skip') {
        timer.stop();
        lifelines.disableAll();
        skipped.push(currentIndex);
        answers.push({ question: q, answer: null, correct: false, skipped: true });
        currentIndex++;
        renderQuestion();
      }
    });
    const lifelinesContainer = document.createElement('div');
    app.appendChild(lifelinesContainer);
    lifelines.render(lifelinesContainer);

    // Renderer
    const rendererContainer = document.createElement('div');
    app.appendChild(rendererContainer);

    if (q.type === 'multiple-choice') {
      currentRendererData = renderMultipleChoice(q, rendererContainer, (idx) => handleAnswer(idx));
    } else if (q.type === 'fill-blank') {
      currentRendererData = renderFillBlank(q, rendererContainer, (idx) => handleAnswer(idx));
    } else if (q.type === 'order') {
      currentRendererData = renderOrder(q, rendererContainer, (order) => handleAnswer(order));
    } else if (q.type === 'matching') {
      currentRendererData = renderMatching(q, rendererContainer, (pairs) => handleAnswer(pairs));
    }
  }

  function handleAnswer(answer, timedOut = false) {
    timer.stop();
    lifelines.disableAll();
    const q = gameQuestions[currentIndex];
    let isCorrect = false;

    if (timedOut) {
      isCorrect = false;
    } else if (q.type === 'multiple-choice' || q.type === 'fill-blank') {
      isCorrect = answer === q.correctIndex;
    } else if (q.type === 'order') {
      isCorrect = JSON.stringify(answer) === JSON.stringify(q.correctOrder);
    } else if (q.type === 'matching') {
      isCorrect = isMatchingCorrect(answer, q.correctPairs);
    }

    // Points
    let pointsEarned = 0;
    if (isCorrect) {
      correct++;
      streak++;
      if (streak > highStreak) highStreak = streak;
      const multiplier = getStreakMultiplier(streak);
      pointsEarned = Math.round(BASE_POINTS * timer.getScoreMultiplier() * multiplier);
      score += pointsEarned;
      playCorrectSound();
      if (streak > 1) playStreakSound(streak);
    } else {
      streak = 0;
      if (mode === 'classic' && !continueMode) {
        lives--;
        playLifeLost();
      } else {
        playWrongSound();
      }
    }

    recordAnswer(q.id, isCorrect);
    answers.push({ question: q, answer, correct: isCorrect, skipped: false, pointsEarned });

    showFeedback(q, answer, isCorrect, pointsEarned, timedOut);
  }

  function showFeedback(q, answer, isCorrect, pointsEarned, timedOut) {
    // Reveal correct/wrong on renderer
    if (q.type === 'multiple-choice') {
      revealMultipleChoice(currentRendererData, answer, q.correctIndex);
    } else if (q.type === 'fill-blank') {
      revealFillBlank(currentRendererData, answer, q.correctIndex);
    } else if (q.type === 'order') {
      revealOrder(currentRendererData, answer, q.correctOrder);
    } else if (q.type === 'matching') {
      revealMatching(currentRendererData, answer, q.correctPairs);
    }

    // Screen shake on wrong
    if (!isCorrect) {
      app.classList.add('animate-shake');
      setTimeout(() => app.classList.remove('animate-shake'), 400);
    }

    // Feedback section
    const feedback = document.createElement('div');
    feedback.className = `mt-6 p-4 rounded-xl border-2 ${isCorrect ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`;

    const emojis = isCorrect
      ? ['🎯', '🔥', '💡', '✨', '👏', '🙌']
      : ['😬', '💔', '😅', '🤔'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    const headerText = timedOut
      ? `⏱️ Time's up!`
      : isCorrect
        ? `${emoji} Correct! +${pointsEarned} pts${streak > 1 ? ` (x${getStreakMultiplier(streak)} streak)` : ''}`
        : `${emoji} Wrong!`;

    feedback.innerHTML = `
      <div class="font-bold text-lg mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}">${headerText}</div>
      <p class="text-slate-300 text-sm leading-relaxed mb-3">${q.explanation}</p>
      <a href="${q.source}" target="_blank" rel="noopener" class="text-teal-400 hover:text-teal-300 text-sm underline">📖 Read this ADR →</a>
    `;
    app.appendChild(feedback);

    // Update score display with animation
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
      scoreDisplay.classList.add('animate-roll-up');
      scoreDisplay.textContent = score;
      setTimeout(() => scoreDisplay.classList.remove('animate-roll-up'), 300);
    }

    // Update streak
    const streakDisplay = document.getElementById('streak-display');
    if (streakDisplay) {
      if (streak > 0) {
        streakDisplay.className = 'text-orange-400 font-bold animate-roll-up';
        streakDisplay.textContent = `🔥 x${streak}`;
      } else {
        streakDisplay.className = 'text-slate-500';
        streakDisplay.textContent = '';
      }
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'w-full py-3 mt-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-colors';

    const isLastInDailySet = mode === 'daily' && !continueMode && currentIndex === 9;
    const isGameOver = lives <= 0 || currentIndex >= gameQuestions.length - 1;

    nextBtn.textContent = isLastInDailySet || isGameOver ? 'See Results' : 'Next Question →';
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      if (isLastInDailySet) {
        endGame();
      } else {
        renderQuestion();
      }
    });
    app.appendChild(nextBtn);
  }

  function endGame() {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const total = answers.length;

    recordGameEnd(correct, total, highStreak);

    const gameState = {
      mode: continueMode ? 'relaxed' : mode,
      correct,
      total,
      highStreak,
      score,
      skipped,
      answers,
      livesRemaining: mode === 'classic' ? lives : null,
      elapsedSeconds: elapsed,
    };

    const newAchievements = checkAchievements(gameState, questions);

    if (mode === 'daily' && !continueMode) {
      const dateKey = new Date().toISOString().slice(0, 10);
      const grid = answers.map((a) => (a.skipped ? '🟡' : a.correct ? '🟩' : '🟥')).join('');
      saveDailyResult(dateKey, { score: correct, total, grid, highStreak });
    }

    onGameEnd(gameState, newAchievements, () => {
      // Continue playing callback (for daily mode)
      continueMode = true;
      const remaining = questions.filter((q) => !answers.some((a) => a.question.id === q.id));
      shuffleArray(remaining);
      gameQuestions = remaining;
      currentIndex = 0;
      lives = Infinity;
      startTime = Date.now();
      renderQuestion();
    });
  }

  function getStreakMultiplier(s) {
    if (s >= 7) return 4;
    if (s >= 5) return 3;
    if (s >= 3) return 2;
    return 1;
  }

  renderQuestion();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
