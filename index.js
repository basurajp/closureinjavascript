// Create a function that returns another function, and the returned function should be a counter. It should increment and return the count each time it's called.

function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
