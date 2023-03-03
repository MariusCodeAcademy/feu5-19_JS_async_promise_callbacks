'use strict';
console.log('fetch.js file was loaded');

// fetch(url) - grazina promise, parsiuncia get requesta

const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

function getPosts() {
  return fetch(urlPosts)
    .then((response) => {
      console.log('response ===', response);
      return response.json();
    })
    .then((dataInJs) => {
      const firstTen = dataInJs.slice(0, 30);
      // console.log('dataInJs ===', firstTen);
      // renderPosts(firstTen);
      return firstTen;
    })
    .catch((err) => {
      console.warn('getPosts klaida', err);
    });
}

// const postsArr = getPosts();
getPosts().then((posts) => renderPosts(posts));
// console.log('postsArr ===', postsArr); // promise
// renderPosts(postsArr);

function renderPosts(arr) {
  console.log('i magically draw some html with these posts', arr);
  // sukti ciklas ir generuoti korteles htmle
  // 3 korteles per ploti
}
