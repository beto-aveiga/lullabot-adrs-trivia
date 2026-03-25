export function createLifelines(onUse) {
  const available = {
    fiftyFifty: 1,
    readAdr: 1,
    skip: 2,
  };

  function use(type) {
    if (available[type] > 0) {
      available[type]--;
      onUse(type);
      updateButtons();
      return true;
    }
    return false;
  }

  let buttons = {};

  function render(container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex gap-3 justify-center my-4';

    const defs = [
      { key: 'fiftyFifty', label: '50/50', icon: '✂️' },
      { key: 'readAdr', label: 'Read ADR', icon: '📖' },
      { key: 'skip', label: 'Skip', icon: '⏭️' },
    ];

    defs.forEach(({ key, label, icon }) => {
      const btn = document.createElement('button');
      btn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
      btn.innerHTML = `<span>${icon}</span><span>${label}</span>${available[key] > 1 ? `<span class="text-xs text-slate-400">(${available[key]})</span>` : ''}`;
      btn.addEventListener('click', () => use(key));
      buttons[key] = btn;
      wrapper.appendChild(btn);
    });

    container.appendChild(wrapper);
    updateButtons();
    return wrapper;
  }

  function updateButtons() {
    Object.entries(buttons).forEach(([key, btn]) => {
      btn.disabled = available[key] <= 0;
      const countEl = btn.querySelector('.text-xs');
      if (countEl && available[key] >= 0) {
        countEl.textContent = `(${available[key]})`;
      }
    });
  }

  function disableAll() {
    Object.values(buttons).forEach((btn) => {
      btn.disabled = true;
    });
  }

  function getAvailable() {
    return { ...available };
  }

  return { render, disableAll, getAvailable };
}
