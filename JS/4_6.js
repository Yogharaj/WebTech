const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

const encoded = escape("Hello, World!");
console.log(encoded);

const decoded = unescape(encoded);
console.log(decoded);
window.print();

window.blur();
window.focus();

console.log("Hello, console!");
const myMap = new Map();
myMap.set(1, "One");
myMap.set(2, "Two");

console.log(myMap.get(1)); // Output: One
console.log([...myMap.entries()]); // Output: [[1, 'One'], [2, 'Two']]
console.log(myMap.has(3)); // Output: false
