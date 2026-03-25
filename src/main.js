import { loadData, getDailyResult, getMasteredCount } from './storage.js';
import { renderAchievements, ACHIEVEMENTS } from './achievements.js';
import { createGame } from './game.js';
import { launchConfetti } from './confetti.js';
import { playFanfare } from './sounds.js';
import { questions } from './questions/index.js';

const app = document.getElementById('app');

function showStartScreen() {
  app.innerHTML = '';
  const data = loadData();
  const mastered = getMasteredCount();
  const todayKey = new Date().toISOString().slice(0, 10);
  const dailyDone = getDailyResult(todayKey);

  app.innerHTML = `
    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-2">
        ADR Trivia
      </h1>
      <p class="text-slate-400">Test your knowledge of Lullabot's Architecture Decision Records</p>
    </div>
  `;

  // Stats
  if (data.totalGames > 0) {
    const stats = document.createElement('div');
    stats.className = 'grid grid-cols-3 gap-3 mb-6';
    stats.innerHTML = `
      <div class="bg-slate-800 rounded-xl p-3 text-center">
        <div class="text-2xl font-bold text-teal-400">${data.totalGames}</div>
        <div class="text-xs text-slate-400">Games</div>
      </div>
      <div class="bg-slate-800 rounded-xl p-3 text-center">
        <div class="text-2xl font-bold text-teal-400">${mastered}/${questions.length}</div>
        <div class="text-xs text-slate-400">Mastered</div>
      </div>
      <div class="bg-slate-800 rounded-xl p-3 text-center">
        <div class="text-2xl font-bold text-orange-400">🔥 ${data.bestStreak}</div>
        <div class="text-xs text-slate-400">Best Streak</div>
      </div>
    `;
    app.appendChild(stats);

    const progressContainer = document.createElement('div');
    progressContainer.className = 'mb-6';
    const pct = questions.length > 0 ? Math.round((mastered / questions.length) * 100) : 0;
    progressContainer.innerHTML = `
      <div class="flex justify-between text-sm text-slate-400 mb-1">
        <span>Mastery Progress</span>
        <span>${pct}%</span>
      </div>
      <div class="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all" style="width: ${pct}%"></div>
      </div>
    `;
    app.appendChild(progressContainer);
  }

  // Mode selection
  const modeSection = document.createElement('div');
  modeSection.className = 'mb-6';
  modeSection.innerHTML = `<h3 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Game Mode</h3>`;

  let selectedMode = 'classic';
  const allAdrSources = [...new Set(questions.map((q) => q.source))].sort();
  const selectedAdrSources = new Set(allAdrSources);

  const modeGrid = document.createElement('div');
  modeGrid.className = 'grid grid-cols-1 sm:grid-cols-3 gap-3';

  const modes = [
    { id: 'classic', name: 'Classic', desc: '3 lives, all questions', icon: '♥' },
    { id: 'adr', name: 'ADR Focus', desc: 'Choose specific ADRs', icon: '🎯' },
    { id: 'daily', name: 'Daily Challenge', desc: '10 daily questions', icon: '📅' },
  ];

  modes.forEach((m) => {
    const btn = document.createElement('button');
    btn.className = `p-4 rounded-xl border-2 text-left transition-all ${m.id === selectedMode ? 'border-teal-500 bg-teal-500/10' : 'border-slate-600 bg-slate-800 hover:border-slate-500'}`;
    btn.innerHTML = `
      <div class="text-xl mb-1">${m.icon}</div>
      <div class="font-semibold text-slate-200">${m.name}</div>
      <div class="text-xs text-slate-400">${m.desc}</div>
    `;
    if (m.id === 'daily' && dailyDone) {
      btn.innerHTML += `<div class="text-xs text-teal-400 mt-1">✓ Completed today (${dailyDone.score}/${dailyDone.total})</div>`;
    }
    btn.addEventListener('click', () => {
      selectedMode = m.id;
      modeGrid.querySelectorAll('button').forEach((b) => {
        b.classList.remove('border-teal-500', 'bg-teal-500/10');
        b.classList.add('border-slate-600', 'bg-slate-800');
      });
      btn.classList.remove('border-slate-600', 'bg-slate-800');
      btn.classList.add('border-teal-500', 'bg-teal-500/10');
      categorySection.style.display = m.id === 'classic' ? 'block' : 'none';
      adrSection.style.display = m.id === 'adr' ? 'block' : 'none';
      refreshStartButtonLabel();
    });
    modeGrid.appendChild(btn);
  });

  modeSection.appendChild(modeGrid);
  app.appendChild(modeSection);

  // Category filter
  const categorySection = document.createElement('div');
  categorySection.className = 'mb-6';
  categorySection.innerHTML = `<h3 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Categories</h3>`;

  const allCategories = [...new Set(questions.map((q) => q.category))].sort();
  const selectedCategories = new Set(allCategories);

  const catGrid = document.createElement('div');
  catGrid.className = 'flex flex-wrap gap-2';

  allCategories.forEach((cat) => {
    const count = questions.filter((q) => q.category === cat).length;
    const btn = document.createElement('button');
    btn.className = 'px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all border-teal-500 bg-teal-500/10 text-teal-300';
    btn.textContent = `${cat} (${count})`;
    btn.addEventListener('click', () => {
      if (selectedCategories.has(cat)) {
        if (selectedCategories.size === 1) return;
        selectedCategories.delete(cat);
        btn.classList.remove('border-teal-500', 'bg-teal-500/10', 'text-teal-300');
        btn.classList.add('border-slate-600', 'bg-slate-800', 'text-slate-400');
      } else {
        selectedCategories.add(cat);
        btn.classList.remove('border-slate-600', 'bg-slate-800', 'text-slate-400');
        btn.classList.add('border-teal-500', 'bg-teal-500/10', 'text-teal-300');
      }
    });
    catGrid.appendChild(btn);
  });

  categorySection.appendChild(catGrid);
  app.appendChild(categorySection);

  // ADR selector
  const adrSection = document.createElement('div');
  adrSection.className = 'mb-6';
  adrSection.style.display = 'none';
  adrSection.innerHTML = `<h3 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">ADRs</h3>`;

  const adrInfo = document.createElement('div');
  adrInfo.className = 'text-xs text-slate-400 mb-2';
  adrSection.appendChild(adrInfo);

  const adrToolbar = document.createElement('div');
  adrToolbar.className = 'flex gap-2 mb-2';

  const selectAllBtn = document.createElement('button');
  selectAllBtn.className = 'px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors';
  selectAllBtn.textContent = 'Select all';
  selectAllBtn.addEventListener('click', () => {
    allAdrSources.forEach((src) => selectedAdrSources.add(src));
    renderAdrButtons();
  });

  const clearBtn = document.createElement('button');
  clearBtn.className = 'px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors';
  clearBtn.textContent = 'Clear';
  clearBtn.addEventListener('click', () => {
    selectedAdrSources.clear();
    renderAdrButtons();
  });

  adrToolbar.appendChild(selectAllBtn);
  adrToolbar.appendChild(clearBtn);
  adrSection.appendChild(adrToolbar);

  const adrGrid = document.createElement('div');
  adrGrid.className = 'max-h-64 overflow-y-auto pr-1 flex flex-wrap gap-2';
  adrSection.appendChild(adrGrid);

  function renderAdrButtons() {
    adrGrid.innerHTML = '';
    adrInfo.textContent = `Selected ${selectedAdrSources.size} of ${allAdrSources.length} ADRs`;
    allAdrSources.forEach((src) => {
      const btn = document.createElement('button');
      const selected = selectedAdrSources.has(src);
      btn.className = `px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all ${selected ? 'border-teal-500 bg-teal-500/10 text-teal-300' : 'border-slate-600 bg-slate-800 text-slate-400'}`;
      btn.textContent = formatAdrLabel(src);
      btn.title = src;
      btn.addEventListener('click', () => {
        if (selectedAdrSources.has(src)) {
          selectedAdrSources.delete(src);
        } else {
          selectedAdrSources.add(src);
        }
        renderAdrButtons();
      });
      adrGrid.appendChild(btn);
    });
  }

  renderAdrButtons();
  app.appendChild(adrSection);

  // Achievements
  if (data.achievements.length > 0) {
    const achSection = document.createElement('div');
    achSection.className = 'mb-6';
    achSection.innerHTML = `<h3 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Achievements</h3>`;
    renderAchievements(achSection);
    app.appendChild(achSection);
  }

  // Start button
  const startBtn = document.createElement('button');
  startBtn.className =
    'w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-lg transition-all shadow-lg shadow-teal-500/20';
  function refreshStartButtonLabel() {
    startBtn.textContent = selectedMode === 'daily' && dailyDone ? 'Play Daily Again' : 'Start Game';
  }
  refreshStartButtonLabel();
  startBtn.addEventListener('click', () => {
    const cats = selectedMode === 'classic' ? [...selectedCategories] : [];
    const adrs = selectedMode === 'adr' ? [...selectedAdrSources] : [];
    if (selectedMode === 'adr' && adrs.length === 0) {
      alert('Select at least one ADR for ADR Focus mode.');
      return;
    }
    startGame(selectedMode, cats, adrs);
  });
  app.appendChild(startBtn);

  // Footer
  const footer = document.createElement('div');
  footer.className = 'text-center mt-8 text-xs text-slate-500';
  footer.innerHTML = `Based on <a href="https://architecture.lullabot.com/adrs/" target="_blank" rel="noopener" class="text-teal-500 hover:text-teal-400 underline">Lullabot's ADRs</a> · CC-BY 4.0`;
  app.appendChild(footer);
}

function startGame(mode, categories, adrSources = []) {
  createGame(
    app,
    {
      mode,
      categories,
      adrSources,
      onExit: showStartScreen,
    },
    (gameState, newAchievements, continueCallback) => {
      showResultsScreen(gameState, newAchievements, continueCallback);
    }
  );
}

function formatAdrLabel(source) {
  const slug = source.replace(/\/+$/, '').split('/').pop() || source;
  const title = slug
    .replace(/^\d{8}-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return title.length > 44 ? `${title.slice(0, 41)}...` : title;
}

function showResultsScreen(gameState, newAchievements, continueCallback) {
  app.innerHTML = '';

  const { correct, total, highStreak, score, answers, skipped, mode, livesRemaining, elapsedSeconds } = gameState;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  if (pct === 100 && total >= 10) {
    launchConfetti();
    playFanfare();
  }

  const rank = pct === 100 ? 'ADR Master!' : pct >= 80 ? 'ADR Expert!' : pct >= 60 ? 'Getting There' : pct >= 40 ? 'Apprentice' : 'Rookie';

  app.innerHTML = `
    <div class="text-center mb-8">
      <div class="text-6xl mb-4">${pct === 100 ? '🏆' : pct >= 70 ? '🎉' : '📚'}</div>
      <h2 class="text-3xl font-extrabold text-slate-100 mb-2">${rank}</h2>
      <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">${score}</div>
      <div class="text-slate-400 text-sm mt-1">points</div>
    </div>
  `;

  // Stats grid
  const statsGrid = document.createElement('div');
  statsGrid.className = 'grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6';
  statsGrid.innerHTML = `
    <div class="bg-slate-800 rounded-xl p-3 text-center">
      <div class="text-xl font-bold text-green-400">${correct}/${total}</div>
      <div class="text-xs text-slate-400">Correct</div>
    </div>
    <div class="bg-slate-800 rounded-xl p-3 text-center">
      <div class="text-xl font-bold text-orange-400">🔥 ${highStreak}</div>
      <div class="text-xs text-slate-400">Best Streak</div>
    </div>
    <div class="bg-slate-800 rounded-xl p-3 text-center">
      <div class="text-xl font-bold text-slate-200">${elapsedSeconds}s</div>
      <div class="text-xs text-slate-400">Time</div>
    </div>
    <div class="bg-slate-800 rounded-xl p-3 text-center">
      <div class="text-xl font-bold text-yellow-400">${skipped.length}</div>
      <div class="text-xs text-slate-400">Skipped</div>
    </div>
  `;
  app.appendChild(statsGrid);

  // New achievements
  if (newAchievements.length > 0) {
    const achDiv = document.createElement('div');
    achDiv.className = 'mb-6 p-4 rounded-xl bg-purple-500/10 border-2 border-purple-500/30';
    achDiv.innerHTML = `<h3 class="font-bold text-purple-300 mb-2">🏅 New Achievements Unlocked!</h3>`;
    newAchievements.forEach((id) => {
      const ach = ACHIEVEMENTS.find((a) => a.id === id);
      if (ach) {
        achDiv.innerHTML += `<div class="text-sm text-slate-300 mb-1">${ach.icon} ${ach.name} — ${ach.desc}</div>`;
      }
    });
    app.appendChild(achDiv);
  }

  // Daily challenge share
  if (mode === 'daily') {
    const todayKey = new Date().toISOString().slice(0, 10);
    const grid = answers.map((a) => (a.skipped ? '🟡' : a.correct ? '🟩' : '🟥')).join('');
    const shareText = `ADR Trivia ${todayKey}: ${correct}/${total} ${grid}${highStreak >= 3 ? ` 🔥${highStreak} streak` : ''}`;

    const shareDiv = document.createElement('div');
    shareDiv.className = 'mb-6 p-4 rounded-xl bg-slate-800';
    shareDiv.innerHTML = `
      <p class="font-mono text-sm text-slate-300 mb-3">${shareText}</p>
    `;
    const copyBtn = document.createElement('button');
    copyBtn.className = 'px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium transition-colors';
    copyBtn.textContent = '📋 Copy to Clipboard';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(shareText).then(() => {
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => (copyBtn.textContent = '📋 Copy to Clipboard'), 2000);
      });
    });
    shareDiv.appendChild(copyBtn);
    app.appendChild(shareDiv);
  }

  // Action buttons
  const actions = document.createElement('div');
  actions.className = 'space-y-3';

  const reviewBtn = document.createElement('button');
  reviewBtn.className = 'w-full py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-colors';
  reviewBtn.textContent = '📝 Review Answers';
  reviewBtn.addEventListener('click', () => showReview(answers));
  actions.appendChild(reviewBtn);

  if (mode === 'daily' && continueCallback) {
    const continueBtn = document.createElement('button');
    continueBtn.className = 'w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors';
    continueBtn.textContent = '🎮 Keep Playing';
    continueBtn.addEventListener('click', continueCallback);
    actions.appendChild(continueBtn);
  }

  const restartBtn = document.createElement('button');
  restartBtn.className = 'w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors';
  restartBtn.textContent = '← Back to Start';
  restartBtn.addEventListener('click', showStartScreen);
  actions.appendChild(restartBtn);

  app.appendChild(actions);
}

function showReview(answers) {
  app.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between mb-6';
  header.innerHTML = `<h2 class="text-2xl font-bold text-slate-100">Review Answers</h2>`;

  const backBtn = document.createElement('button');
  backBtn.className = 'px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors';
  backBtn.textContent = '← Back';
  backBtn.addEventListener('click', showStartScreen);
  header.appendChild(backBtn);
  app.appendChild(header);

  // Filter tabs
  let filter = 'all';
  const tabs = document.createElement('div');
  tabs.className = 'flex gap-2 mb-4';

  const wrongCount = answers.filter((a) => !a.correct && !a.skipped).length;
  const skippedCount = answers.filter((a) => a.skipped).length;

  ['all', 'wrong', 'skipped'].forEach((f) => {
    const count = f === 'all' ? answers.length : f === 'wrong' ? wrongCount : skippedCount;
    const tab = document.createElement('button');
    tab.className = `px-3 py-1.5 rounded-full text-sm font-medium transition-all ${f === filter ? 'bg-teal-500/20 text-teal-300 border-2 border-teal-500' : 'bg-slate-800 text-slate-400 border-2 border-slate-600'}`;
    tab.textContent = `${f.charAt(0).toUpperCase() + f.slice(1)} (${count})`;
    tab.addEventListener('click', () => {
      filter = f;
      renderCards();
      tabs.querySelectorAll('button').forEach((b) => {
        b.classList.remove('bg-teal-500/20', 'text-teal-300', 'border-teal-500');
        b.classList.add('bg-slate-800', 'text-slate-400', 'border-slate-600');
      });
      tab.classList.remove('bg-slate-800', 'text-slate-400', 'border-slate-600');
      tab.classList.add('bg-teal-500/20', 'text-teal-300', 'border-teal-500');
    });
    tabs.appendChild(tab);
  });
  app.appendChild(tabs);

  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'space-y-4';
  app.appendChild(cardsContainer);

  function renderCards() {
    cardsContainer.innerHTML = '';
    const filtered = filter === 'all' ? answers : filter === 'wrong' ? answers.filter((a) => !a.correct && !a.skipped) : answers.filter((a) => a.skipped);

    const cardStyles = {
      correct: 'bg-green-500/10 border-green-500/30',
      wrong: 'bg-red-500/10 border-red-500/30',
      skipped: 'bg-yellow-500/10 border-yellow-500/30',
    };
    const statusStyles = {
      correct: 'text-green-400',
      wrong: 'text-red-400',
      skipped: 'text-yellow-400',
    };

    filtered.forEach((a) => {
      const kind = a.skipped ? 'skipped' : a.correct ? 'correct' : 'wrong';
      const card = document.createElement('div');
      card.className = `p-4 rounded-xl border-2 ${cardStyles[kind]}`;
      card.innerHTML = `
        <div class="flex items-start justify-between mb-2">
          <h3 class="font-semibold text-slate-200 leading-snug flex-1">${a.question.question}</h3>
          <span class="ml-2 text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">${a.question.category}</span>
        </div>
        <div class="text-sm mb-2 ${statusStyles[kind]}">
          ${a.skipped ? '⏭️ Skipped' : a.correct ? '✓ Correct' : '✗ Wrong'}
        </div>
        <p class="text-sm text-slate-300 leading-relaxed mb-2">${a.question.explanation}</p>
        <a href="${a.question.source}" target="_blank" rel="noopener" class="text-teal-400 hover:text-teal-300 text-sm underline">📖 Read this ADR →</a>
      `;
      cardsContainer.appendChild(card);
    });

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `<p class="text-center text-slate-500 py-8">No questions in this category.</p>`;
    }
  }

  renderCards();
}

// Boot
showStartScreen();
