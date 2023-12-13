// Problem 1: Swapping Elements
// Write a Javascript function swapElements(array) that uses array destructuring to swap the first and second elements of an array.


let swapElements = (arr) => {
 [arr[0], arr[1]] = [arr[1], arr[0]];
return arr
};


let arr = [1, 2, 3, 5];
console.log(swapElements(arr));
