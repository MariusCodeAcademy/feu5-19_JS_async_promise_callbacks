'use strict';
console.log('posts.js file was loaded');

// taikomes
const appEl = document.getElementById('app');

const posts = [
  { title: 'Post One', body: 'This is post One body' },
  { title: 'Post Two', body: 'This is post Two body' },
];

// gauti postus imituojam kad truka 1.5sek juos gauti
function getPosts() {
  setTimeout(() => {
    appEl.innerHTML = '';
    posts.forEach(({ title, body }) => {
      const pEl = document.createElement('p');
      pEl.textContent = `Title: ${title}. ${body}`;
      appEl.append(pEl);
    });
  }, 1500);
}

// create post funkcija kuti ideda nauja posta i pos masyva
function createPost(newPostObj) {
  setTimeout(() => {
    posts.push(newPostObj);
    console.log('created Post');
  }, 2500);
}
// debugger;
createPost({ title: 'Post Three', body: 'This is post Three body' });

getPosts();

// 1 iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
// 2 iskviesti getPosts tik po to kai sukurem posta su createPost su callback fn
