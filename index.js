// Problem 1: Swapping Elements
// Write a Javascript function swapElements(array) that uses array destructuring to swap the first and second elements of an array.

// let swapElements = (arr) => {
//  [arr[0], arr[1]] = [arr[1], arr[0]];
// return arr
// };

// let arr = [1, 2, 3, 5];
// console.log(swapElements(arr));

// Problem 2: Mapping Price
// You have an array of objects where each object represents a product with a name and price. Write a Javascript function mapPrices(products) that uses map to create a new array where each object has a name, price and priceWithTax (which is calculated as price * 1.15).

let products = [
  { name: "product 1", price: 100 },
  { name: "product 2", price: 200 },
];

let mapPrices = (products) => {
  return products.map((product) => {
    return {
      ...product,

      productWithTx: product.price * 1.15,
    };
  });
};

console.log(mapPrices(products));
