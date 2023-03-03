'use strict';
console.log('fetch.js file was loaded');

// taikomes
const appEl = document.getElementById('app');

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
  arr.forEach((pObj) => {
    const oneEl = makeOnePost(pObj);
    appEl.append(oneEl);
  });
  // 3 korteles per ploti
}

/* 
<li data-id="id" class="postItem">
  <h3>title</h3>
  <p><em>user id: 45</em></p>
  <p class="text">body</p>
</li>
*/
function makeOnePost(obj) {
  const liEl = document.createElement('li');
  liEl.className = 'postItem';
  liEl.dataset.id = obj.id;
  liEl.innerHTML = `
  <h3>${obj.title}</h3>
  <p><em>user id: ${obj.userId}</em></p>
  <p class="text">${obj.body}</p>
  `;
  return liEl;
}
