export function renderMultipleChoice(question, container, onAnswer) {
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6';

  const shuffled = question.options.map((opt, i) => ({ text: opt, originalIndex: i }));
  shuffleArray(shuffled);

  shuffled.forEach(({ text, originalIndex }) => {
    const btn = document.createElement('button');
    btn.className =
      'w-full text-left p-4 rounded-xl bg-slate-700/60 border-2 border-slate-600 hover:border-teal-400 hover:bg-slate-700 transition-all text-slate-100 font-medium leading-snug';
    btn.textContent = text;
    btn.dataset.index = originalIndex;
    btn.addEventListener('click', () => {
      disableAll(grid);
      onAnswer(originalIndex);
    });
    grid.appendChild(btn);
  });

  container.appendChild(grid);
  return grid;
}

export function revealMultipleChoice(grid, selectedIndex, correctIndex) {
  const buttons = grid.querySelectorAll('button');
  buttons.forEach((btn) => {
    const idx = parseInt(btn.dataset.index);
    btn.disabled = true;
    btn.classList.remove('hover:border-teal-400', 'hover:bg-slate-700');
    if (idx === correctIndex) {
      btn.classList.remove('border-slate-600', 'bg-slate-700/60');
      btn.classList.add('border-green-500', 'bg-green-500/20', 'ring-2', 'ring-green-500/50');
    } else if (idx === selectedIndex && selectedIndex !== correctIndex) {
      btn.classList.remove('border-slate-600', 'bg-slate-700/60');
      btn.classList.add('border-red-500', 'bg-red-500/20');
    }
  });
}

export function applyFiftyFifty(grid, correctIndex) {
  const buttons = Array.from(grid.querySelectorAll('button'));
  const wrongButtons = buttons.filter((b) => parseInt(b.dataset.index) !== correctIndex);
  shuffleArray(wrongButtons);
  wrongButtons.slice(0, 2).forEach((btn) => {
    btn.disabled = true;
    btn.classList.add('opacity-20', 'pointer-events-none');
  });
}

function disableAll(grid) {
  grid.querySelectorAll('button').forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove('hover:border-teal-400', 'hover:bg-slate-700');
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
