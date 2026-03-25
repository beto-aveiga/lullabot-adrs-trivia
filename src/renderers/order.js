export function renderOrder(question, container, onAnswer) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mt-6 space-y-3';

  const items = question.items.map((text, i) => ({ text, originalIndex: i }));
  shuffleArray(items);

  const list = document.createElement('div');
  list.className = 'space-y-2';

  items.forEach((item, displayIndex) => {
    const row = document.createElement('div');
    row.className =
      'flex items-center gap-3 p-3 rounded-xl bg-slate-700/60 border-2 border-slate-600 cursor-grab active:cursor-grabbing transition-all select-none';
    row.draggable = true;
    row.dataset.originalIndex = item.originalIndex;

    const handle = document.createElement('span');
    handle.className = 'text-slate-400 text-lg';
    handle.textContent = '⠿';

    const numberBadge = document.createElement('span');
    numberBadge.className = 'w-7 h-7 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 order-number';
    numberBadge.textContent = displayIndex + 1;

    const label = document.createElement('span');
    label.className = 'text-slate-200 font-medium font-mono text-sm';
    label.textContent = item.text;

    row.appendChild(handle);
    row.appendChild(numberBadge);
    row.appendChild(label);
    list.appendChild(row);

    row.addEventListener('dragstart', (e) => {
      e.dataTransfer.effectAllowed = 'move';
      row.classList.add('opacity-50');
      e.dataTransfer.setData('text/plain', '');
      list._draggedEl = row;
    });

    row.addEventListener('dragend', () => {
      row.classList.remove('opacity-50');
      list._draggedEl = null;
      updateNumbers();
    });

    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const dragged = list._draggedEl;
      if (!dragged || dragged === row) return;
      const rect = row.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      if (e.clientY < mid) {
        list.insertBefore(dragged, row);
      } else {
        list.insertBefore(dragged, row.nextSibling);
      }
    });

    let touchStartY = 0;
    row.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      row.classList.add('opacity-70');
      list._draggedEl = row;
    }, { passive: true });

    row.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!target) return;
      const targetRow = target.closest('[draggable]');
      const dragged = list._draggedEl;
      if (targetRow && dragged && targetRow !== dragged && list.contains(targetRow)) {
        const rect = targetRow.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        if (touch.clientY < mid) {
          list.insertBefore(dragged, targetRow);
        } else {
          list.insertBefore(dragged, targetRow.nextSibling);
        }
      }
    }, { passive: false });

    row.addEventListener('touchend', () => {
      row.classList.remove('opacity-70');
      list._draggedEl = null;
      updateNumbers();
    });
  });

  function updateNumbers() {
    list.querySelectorAll('.order-number').forEach((badge, i) => {
      badge.textContent = i + 1;
    });
  }

  wrapper.appendChild(list);

  const lockBtn = document.createElement('button');
  lockBtn.className =
    'w-full py-3 mt-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors';
  lockBtn.textContent = 'Lock In';

  lockBtn.addEventListener('click', () => {
    lockBtn.disabled = true;
    const currentOrder = Array.from(list.querySelectorAll('[draggable]')).map((el) =>
      parseInt(el.dataset.originalIndex)
    );
    onAnswer(currentOrder);
  });

  wrapper.appendChild(lockBtn);
  container.appendChild(wrapper);
  return { wrapper, list };
}

export function revealOrder({ list }, userOrder, correctOrder) {
  const rows = list.querySelectorAll('[draggable]');
  rows.forEach((row, i) => {
    row.draggable = false;
    row.classList.remove('cursor-grab', 'active:cursor-grabbing');
    const idx = parseInt(row.dataset.originalIndex);
    if (idx === correctOrder[i]) {
      row.classList.remove('border-slate-600', 'bg-slate-700/60');
      row.classList.add('border-green-500', 'bg-green-500/20');
    } else {
      row.classList.remove('border-slate-600', 'bg-slate-700/60');
      row.classList.add('border-red-500', 'bg-red-500/20');
    }
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
