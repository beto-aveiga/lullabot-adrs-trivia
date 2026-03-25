const COOKIE_NAME = 'adrs_trivia';
const COOKIE_DAYS = 365;

function getDefaultData() {
  return {
    totalGames: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    bestStreak: 0,
    history: {},
    achievements: [],
    dailyChallenge: {},
  };
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function loadData() {
  const raw = getCookie(COOKIE_NAME);
  if (!raw) return getDefaultData();
  try {
    return { ...getDefaultData(), ...JSON.parse(raw) };
  } catch {
    return getDefaultData();
  }
}

export function saveData(data) {
  setCookie(COOKIE_NAME, JSON.stringify(data), COOKIE_DAYS);
}

export function recordAnswer(questionId, isCorrect) {
  const data = loadData();
  data.history[questionId] = isCorrect;
  data.totalAnswered++;
  if (isCorrect) data.totalCorrect++;
  saveData(data);
  return data;
}

export function recordGameEnd(correctCount, totalCount, highStreak) {
  const data = loadData();
  data.totalGames++;
  if (highStreak > data.bestStreak) data.bestStreak = highStreak;
  saveData(data);
  return data;
}

export function unlockAchievement(achievementId) {
  const data = loadData();
  if (!data.achievements.includes(achievementId)) {
    data.achievements.push(achievementId);
    saveData(data);
    return true;
  }
  return false;
}

export function saveDailyResult(dateKey, result) {
  const data = loadData();
  data.dailyChallenge[dateKey] = result;
  saveData(data);
  return data;
}

export function getDailyResult(dateKey) {
  const data = loadData();
  return data.dailyChallenge[dateKey] || null;
}

export function getMasteredCount() {
  const data = loadData();
  return Object.values(data.history).filter(Boolean).length;
}
