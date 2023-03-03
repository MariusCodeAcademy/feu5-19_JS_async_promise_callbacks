'use strict';
console.log('callbackHell.js file was loaded');

// set timeout HEll
setTimeout(() => {
  console.log('3');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('1');
    }, 1000);
  }, 1000);
}, 1000);
