import tick from './modules/clock.js';

console.log('main.js file was loaded');
tick();
setInterval(tick, 1000);
