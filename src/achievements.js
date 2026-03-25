import { loadData, unlockAchievement } from './storage.js';

export const ACHIEVEMENTS = [
  { id: 'first-steps', name: 'First Steps', desc: 'Complete your first game', icon: '🎮' },
  { id: 'on-fire', name: 'On Fire', desc: 'Reach a 5-answer streak', icon: '🔥' },
  { id: 'unstoppable', name: 'Unstoppable', desc: 'Reach a 10-answer streak', icon: '⚡' },
  { id: 'drupal-guru', name: 'Drupal Guru', desc: 'Answer all Drupal questions correctly', icon: '💧' },
  { id: 'frontend-wizard', name: 'Front-end Wizard', desc: 'Answer all front-end questions correctly', icon: '🎨' },
  { id: 'speed-demon', name: 'Speed Demon', desc: 'Finish a 10-question game in under 90 seconds', icon: '⚡' },
  { id: 'perfect-game', name: 'Perfect Game', desc: '100% score with 10+ questions', icon: '🏆' },
  { id: 'scholar', name: 'Scholar', desc: 'Use "Read the ADR" lifeline 5 times', icon: '📚' },
  { id: 'survivor', name: 'Survivor', desc: 'Win Classic mode with 1 heart remaining', icon: '💪' },
  { id: 'completionist', name: 'Completionist', desc: 'Answer all 50 questions correctly', icon: '🌟' },
];

export function checkAchievements(gameState, allQuestions) {
  const newlyUnlocked = [];

  const data = loadData();

  if (data.totalGames >= 1) {
    if (tryUnlock('first-steps')) newlyUnlocked.push('first-steps');
  }

  if (gameState.highStreak >= 5) {
    if (tryUnlock('on-fire')) newlyUnlocked.push('on-fire');
  }

  if (gameState.highStreak >= 10) {
    if (tryUnlock('unstoppable')) newlyUnlocked.push('unstoppable');
  }

  if (gameState.correct === gameState.total && gameState.total >= 10) {
    if (tryUnlock('perfect-game')) newlyUnlocked.push('perfect-game');
  }

  if (gameState.elapsedSeconds < 90 && gameState.total >= 10) {
    if (tryUnlock('speed-demon')) newlyUnlocked.push('speed-demon');
  }

  if (gameState.livesRemaining === 1 && gameState.mode === 'classic') {
    if (tryUnlock('survivor')) newlyUnlocked.push('survivor');
  }

  if ((data.readAdrUses || 0) >= 5) {
    if (tryUnlock('scholar')) newlyUnlocked.push('scholar');
  }

  const drupalQs = allQuestions.filter((q) => q.category === 'drupal');
  if (drupalQs.length > 0 && drupalQs.every((q) => data.history[q.id] === true)) {
    if (tryUnlock('drupal-guru')) newlyUnlocked.push('drupal-guru');
  }

  const feQs = allQuestions.filter((q) => q.category === 'frontend');
  if (feQs.length > 0 && feQs.every((q) => data.history[q.id] === true)) {
    if (tryUnlock('frontend-wizard')) newlyUnlocked.push('frontend-wizard');
  }

  const masteredCount = Object.values(data.history).filter(Boolean).length;
  if (masteredCount >= allQuestions.length && allQuestions.length > 0) {
    if (tryUnlock('completionist')) newlyUnlocked.push('completionist');
  }

  return newlyUnlocked;
}

function tryUnlock(id) {
  return unlockAchievement(id);
}

export function renderAchievements(container) {
  const data = loadData();
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-5 gap-3 my-4';

  ACHIEVEMENTS.forEach((a) => {
    const earned = data.achievements.includes(a.id);
    const badge = document.createElement('div');
    badge.className = `flex flex-col items-center p-2 rounded-lg text-center transition-all ${earned ? 'bg-slate-700' : 'bg-slate-800 opacity-40'}`;
    badge.title = `${a.name}: ${a.desc}`;
    badge.innerHTML = `
      <span class="text-2xl mb-1">${a.icon}</span>
      <span class="text-xs font-medium ${earned ? 'text-slate-200' : 'text-slate-500'}">${a.name}</span>
    `;
    grid.appendChild(badge);
  });

  container.appendChild(grid);
}
