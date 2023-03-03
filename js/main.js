import tick from './modules/clock.js';

console.log('main.js file was loaded');
tick();
const clockInterval = setInterval(tick, 1000);

// add an event listener for the beforeunload event
window.addEventListener('beforeunload', function () {
  clearInterval(clockInterval);
});

const arr = [1, 2, 3];
// hof
arr.map((sk) => sk * 2);
