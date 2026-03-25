export function renderFillBlank(question, container, onAnswer) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mt-6 space-y-4';

  const sentenceEl = document.createElement('p');
  sentenceEl.className = 'text-lg text-slate-200 leading-relaxed';

  const parts = question.question.split('___');
  const select = document.createElement('select');
  select.className =
    'mx-1 px-3 py-1.5 rounded-lg bg-slate-700 border-2 border-teal-500 text-teal-300 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '— select —';
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  const shuffled = question.options.map((opt, i) => ({ text: opt, originalIndex: i }));
  shuffleArray(shuffled);

  shuffled.forEach(({ text, originalIndex }) => {
    const opt = document.createElement('option');
    opt.value = originalIndex;
    opt.textContent = text;
    select.appendChild(opt);
  });

  if (parts.length === 2) {
    sentenceEl.appendChild(document.createTextNode(parts[0]));
    sentenceEl.appendChild(select);
    sentenceEl.appendChild(document.createTextNode(parts[1]));
  } else {
    sentenceEl.textContent = question.question;
    wrapper.appendChild(select);
  }

  wrapper.appendChild(sentenceEl);

  const confirmBtn = document.createElement('button');
  confirmBtn.className =
    'w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
  confirmBtn.textContent = 'Confirm';
  confirmBtn.disabled = true;

  select.addEventListener('change', () => {
    confirmBtn.disabled = false;
  });

  confirmBtn.addEventListener('click', () => {
    const selectedIndex = parseInt(select.value);
    select.disabled = true;
    confirmBtn.disabled = true;
    onAnswer(selectedIndex);
  });

  wrapper.appendChild(confirmBtn);
  container.appendChild(wrapper);

  return { wrapper, select };
}

export function revealFillBlank({ select }, selectedIndex, correctIndex) {
  select.disabled = true;
  if (selectedIndex === correctIndex) {
    select.classList.remove('border-teal-500', 'text-teal-300');
    select.classList.add('border-green-500', 'text-green-300', 'bg-green-500/20');
  } else {
    select.classList.remove('border-teal-500', 'text-teal-300');
    select.classList.add('border-red-500', 'text-red-300', 'bg-red-500/20');
  }
}

export function applyFiftyFiftyFillBlank({ select }, correctIndex) {
  const options = Array.from(select.querySelectorAll('option')).filter(
    (o) => o.value !== '' && parseInt(o.value) !== correctIndex
  );
  shuffleArray(options);
  options.slice(0, 2).forEach((o) => {
    o.disabled = true;
    o.textContent = `${o.textContent} ✕`;
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
