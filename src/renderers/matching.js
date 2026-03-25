export function renderMatching(question, container, onAnswer) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mt-6 relative';

  const shuffledRight = question.right.map((text, i) => ({ text, originalIndex: i }));
  shuffleArray(shuffledRight);

  const columns = document.createElement('div');
  columns.className = 'grid grid-cols-2 gap-8';

  const leftCol = document.createElement('div');
  leftCol.className = 'space-y-3';
  const rightCol = document.createElement('div');
  rightCol.className = 'space-y-3';

  const state = {
    selectedLeft: null,
    pairs: [],
    leftItems: [],
    rightItems: [],
  };

  question.left.forEach((text, i) => {
    const item = document.createElement('button');
    item.className =
      'w-full text-left p-3 rounded-xl bg-slate-700/60 border-2 border-slate-600 text-slate-200 font-medium text-sm transition-all hover:border-teal-400';
    item.textContent = text;
    item.dataset.side = 'left';
    item.dataset.index = i;
    item.addEventListener('click', () => handleLeftClick(i, item));
    leftCol.appendChild(item);
    state.leftItems.push(item);
  });

  shuffledRight.forEach(({ text, originalIndex }) => {
    const item = document.createElement('button');
    item.className =
      'w-full text-left p-3 rounded-xl bg-slate-700/60 border-2 border-slate-600 text-slate-200 font-medium text-sm transition-all hover:border-teal-400';
    item.textContent = text;
    item.dataset.side = 'right';
    item.dataset.index = originalIndex;
    item.addEventListener('click', () => handleRightClick(originalIndex, item));
    rightCol.appendChild(item);
    state.rightItems.push(item);
  });

  columns.appendChild(leftCol);
  columns.appendChild(rightCol);
  wrapper.appendChild(columns);

  const pairsDisplay = document.createElement('div');
  pairsDisplay.className = 'mt-4 space-y-1';
  wrapper.appendChild(pairsDisplay);

  function handleLeftClick(index, item) {
    if (state.pairs.some((p) => p[0] === index)) return;
    state.leftItems.forEach((el) => el.classList.remove('border-teal-400', 'bg-teal-500/20'));
    state.selectedLeft = index;
    item.classList.add('border-teal-400', 'bg-teal-500/20');
  }

  function handleRightClick(index, item) {
    if (state.selectedLeft === null) return;
    if (state.pairs.some((p) => p[1] === index)) return;

    state.pairs.push([state.selectedLeft, index]);

    const leftItem = state.leftItems[state.selectedLeft];
    leftItem.classList.remove('border-teal-400', 'bg-teal-500/20');
    leftItem.classList.add('border-purple-500', 'bg-purple-500/10', 'pointer-events-none');
    item.classList.add('border-purple-500', 'bg-purple-500/10', 'pointer-events-none');

    const pairLabel = document.createElement('div');
    pairLabel.className = 'text-sm text-purple-300 flex items-center gap-2';
    pairLabel.innerHTML = `<span>${question.left[state.selectedLeft]}</span><span class="text-slate-500">↔</span><span>${question.right[index]}</span>`;
    pairsDisplay.appendChild(pairLabel);

    state.selectedLeft = null;

    if (state.pairs.length === question.left.length) {
      confirmBtn.disabled = false;
    }
  }

  const confirmBtn = document.createElement('button');
  confirmBtn.className =
    'w-full py-3 mt-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
  confirmBtn.textContent = 'Confirm Matches';
  confirmBtn.disabled = true;

  confirmBtn.addEventListener('click', () => {
    confirmBtn.disabled = true;
    state.leftItems.forEach((el) => (el.disabled = true));
    state.rightItems.forEach((el) => (el.disabled = true));
    onAnswer(state.pairs);
  });

  wrapper.appendChild(confirmBtn);
  container.appendChild(wrapper);

  return { wrapper, state, pairsDisplay };
}

export function revealMatching({ state, pairsDisplay }, userPairs, correctPairs) {
  pairsDisplay.innerHTML = '';

  userPairs.forEach(([leftIdx, rightIdx]) => {
    const isCorrect = correctPairs.some((p) => p[0] === leftIdx && p[1] === rightIdx);
    const pairLabel = document.createElement('div');
    pairLabel.className = `text-sm flex items-center gap-2 p-2 rounded-lg ${isCorrect ? 'text-green-300 bg-green-500/10' : 'text-red-300 bg-red-500/10'}`;
    pairLabel.innerHTML = `<span>${isCorrect ? '✓' : '✗'}</span><span>${state.leftItems[leftIdx]?.textContent}</span><span class="text-slate-500">↔</span><span>${state.rightItems.find((el) => parseInt(el.dataset.index) === rightIdx)?.textContent || ''}</span>`;
    pairsDisplay.appendChild(pairLabel);

    state.leftItems[leftIdx]?.classList.remove('border-purple-500', 'bg-purple-500/10');
    state.leftItems[leftIdx]?.classList.add(
      isCorrect ? 'border-green-500' : 'border-red-500',
      isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'
    );
  });
}

export function isMatchingCorrect(userPairs, correctPairs) {
  if (userPairs.length !== correctPairs.length) return false;
  return correctPairs.every((cp) => userPairs.some((up) => up[0] === cp[0] && up[1] === cp[1]));
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
