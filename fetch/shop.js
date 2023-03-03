'use strict';
console.log('shop.js file was loaded');

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

// <button>show only "smartphones"</button>
// filterSmartphones() - is mainItemsArr atrenka tik tos kategorijos prekes
// ir viduje kviecia render(atrinkta masyva)
