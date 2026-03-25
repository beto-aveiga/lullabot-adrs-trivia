import { playCountdownBeep } from './sounds.js';

const TOTAL_TIME = 20;

export function createTimer(container, onTimeUp) {
  let timeLeft = TOTAL_TIME;
  let intervalId = null;
  let lastBeepSecond = -1;

  const wrapper = document.createElement('div');
  wrapper.className = 'w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-6';

  const bar = document.createElement('div');
  bar.className = 'h-full rounded-full transition-all duration-1000 linear';
  bar.style.width = '100%';
  wrapper.appendChild(bar);

  const timeDisplay = document.createElement('div');
  timeDisplay.className = 'text-right text-sm text-slate-400 mb-2 font-mono';
  timeDisplay.textContent = `${TOTAL_TIME}s`;

  container.appendChild(timeDisplay);
  container.appendChild(wrapper);

  function updateBar() {
    const pct = (timeLeft / TOTAL_TIME) * 100;
    bar.style.width = `${pct}%`;

    if (pct > 50) {
      bar.className = 'h-full rounded-full transition-all duration-1000 linear bg-teal-500';
    } else if (pct > 25) {
      bar.className = 'h-full rounded-full transition-all duration-1000 linear bg-yellow-500';
    } else {
      bar.className = 'h-full rounded-full transition-all duration-1000 linear bg-red-500';
    }

    timeDisplay.textContent = `${timeLeft}s`;

    if (timeLeft <= 10 && timeLeft > 0 && timeLeft !== lastBeepSecond) {
      lastBeepSecond = timeLeft;
      playCountdownBeep(timeLeft);
    }
  }

  function start() {
    timeLeft = TOTAL_TIME;
    updateBar();
    intervalId = setInterval(() => {
      timeLeft--;
      updateBar();
      if (timeLeft <= 0) {
        stop();
        onTimeUp();
      }
    }, 1000);
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function getTimeLeft() {
    return timeLeft;
  }

  function getScoreMultiplier() {
    return timeLeft / TOTAL_TIME;
  }

  return { start, stop, getTimeLeft, getScoreMultiplier, element: { timeDisplay, wrapper } };
}
