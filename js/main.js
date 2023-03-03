import tick from './modules/clock.js';

console.log('main.js file was loaded');
tick();
const clockInterval = setInterval(tick, 1000);

// add an event listener for the beforeunload event
window.addEventListener('beforeunload', function () {
  clearInterval(clockInterval);
});
