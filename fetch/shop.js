'use strict';
console.log('shop.js file was loaded');

// taikomes
const appEl = document.getElementById('app');

// parisiusti prekes is
// https://dummyjson.com/product
const url = 'https://dummyjson.com/product';

// turim globalu masyva prekems saugoti
let mainItemsArr = [];
// sugeneruoti hmlt prekiu korteles su nurodytais duomenimis

fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    console.log('dataInJs ===', dataInJs);
    const { products } = dataInJs;
    console.log('products ===', products);
    mainItemsArr = products;
    // appEl.append(makeOneShopItem(products[0]));
    console.log('products[0] ===', JSON.stringify(products[0]));
  })
  .catch(console.warn);

// one shop item

let shopItem = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ],
};

// reikalingos funkcijos
// render(arr) - tiesiog sugeneruoja elementus is arr masyvo i html
// makeOneShopItem() - funkcija sukurtirti vienam elementui.(galima ir be)
/*
<li class="shopItem">
  <img src="" alt="hoodie">
  <h3>title (id)</h3>
  <p><em>Category:</em>smartphones</p>
  <p class="text">Price: $45.99</p>
  <div class="control">
    <button class="btn">Buy now</button>
    <button class="btn">Add to cart</button>
  </div>
</li>
*/
function makeOneShopItem(shObj) {
  const liEl = document.createElement('li');
  liEl.className = 'shopItem';
  liEl.innerHTML = `
  <img src="${shObj.thumbnail}" alt="${shObj.title}">
  <div class="info">
    <h3>${shObj.title} (${shObj.id})</h3>
    <p><em>Category:</em>${shObj.category}</p>
    <p class="text">Price: $${shObj.price.toFixed(2)}</p>
    <div class="control">
      <button class="btn">Buy now</button>
      <button class="btn">Add to cart</button>
    </div>
  </div>

  `;
  return liEl;
}

// <button>show only "smartphones"</button>
// filterSmartphones() - is mainItemsArr atrenka tik tos kategorijos prekes
// ir viduje kviecia render(atrinkta masyva)
