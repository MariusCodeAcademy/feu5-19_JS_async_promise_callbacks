const timeEl = document.getElementById('time');

if (!timeEl) {
  console.warn('nera el su id time');
  throw new Error('nera el su id time');
}

function tick() {
  const now = new Date();
  const timeString = now.toLocaleString('lt-LT', { timeStyle: 'medium' });
  timeEl.textContent = timeString;
}

export default tick;
