'use strict';
console.log('setTimeout.js file was loaded');

// sinnhronine, blokuojanti, vienos gijos kalba

function sayHi(name) {
  console.log('hello from sayHi', name);
}

sayHi('james');

// vygdyti kazkoki koda po tam tikro laiko ms
// setTimeout(function, ko kiek laiko, fnParam1, fnParam2)

// setTimeout(() => sayHi('George'), 2000);
// setTimeout(sayHi, 2000, 'Mike');

// kartos funcion kodas kas nurodyta intervala
// setInterval(function, ko kiek laiko, fnParam1, fnParam2)

function make() {
  console.count('tick');
}

const timer1 = setInterval(make, 1000);

// gera praktika visada isvalyti timerius
// clearInterval(timer1);
setTimeout(() => clearInterval(timer1), 6000);
