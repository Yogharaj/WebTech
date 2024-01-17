// Memoization function for caching results
function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    
    if (cache[key]) {
      console.log("Result fetched from cache!");
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example function to be memoized
const add = (a, b) => {
  console.log("Performing expensive calculation...");
  return a + b;
};

// Memoizing the 'add' function
const memoizedAdd = memoize(add);

// Testing the memoized function
console.log(memoizedAdd(2, 3)); // Output: Performing expensive calculation... 5
console.log(memoizedAdd(2, 3)); // Output: Result fetched from cache! 5
