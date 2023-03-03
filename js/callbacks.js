'use strict';
console.log('callbacks.js file was loaded');

function getPost1() {
  setTimeout(() => {
    console.log('Post 1');
  }, 3000);
}

// sukurti getPost2() kuri atspausdina po 2 sekundziu
// sukurti getPost3() kuri atspausdina po 1.5 sekundziu

// iskviesti visas funkcijas is eiles
// paziureti kokia eiles tvarka atsispausdina logai
