'use strict';
console.log('callbacks.js file was loaded');

function getPost1(callback) {
  setTimeout(() => {
    console.log('Header content');
    // iskviesti main kontent
    callback();
  }, 3000);
}

// sukurti getPost2() kuri atspausdina po 2 sekundziu
function getPost2() {
  setTimeout(() => {
    console.log('Main content');
  }, 2000);
}
// sukurti getPost3() kuri atspausdina po 1.5 sekundziu
function getPost3() {
  setTimeout(() => {
    console.log('Footer');
  }, 1500);
}

getPost1(getPost2);
// getPost2();
// getPost3();
// iskviesti visas funkcijas is eiles
// paziureti kokia eiles tvarka atsispausdina logai

// callback pavayzdys
function makeNum(callback) {
  const rez = callback(5);
  return rez;
}

function double(num) {
  return num * 2;
}
function tripple(num) {
  return num * 3;
}

const n1 = makeNum(tripple);
console.log('n1 ===', n1);

console.log(double(10));
