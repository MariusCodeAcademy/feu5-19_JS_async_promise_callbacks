'use strict';
console.log('promise.js file was loaded');

// cosnt pr1 = new Promise((resolve, reject) => {})
// promise naudojami daziausiai asynhroniniam kodui
// pr1 visada yra vienoje is 3 stadiju
// 1 - pending - vygdoma
// 2 - resolved/fulfilled - sekmingas atsakymas
// 3 - rejected - nesekmingas atsakymas

// mes perkam lektuvo bilietus

const buyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let noError = true;
    noError = Boolean(Math.random() > 0.5 ? 1 : 0);

    if (noError) {
      resolve('Operacija sekminga');
    } else {
      reject('Ivyko klaida, bandyti veliau');
    }
  }, 1500);
});

console.log('buyPromise ===', buyPromise); // promise pending nes nepraejo 3000

// is promise reikmes mes pasiimam su .then()

// buyPromise.then(() => console.log('pavyko')).catch(() => console.warn('nepavyko Klaida'));

buyPromise
  .then((msg) => {
    // sekmingas atsakymas
    console.log(msg);
  })
  .catch((errMsg) => {
    // nesekmingas
    console.warn(errMsg);
  });
