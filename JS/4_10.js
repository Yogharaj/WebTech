// Assigning functions to variables
const greet = function (name) {
    return "Hello, " + name + "!";
  };
  
  // Passing functions as arguments
  const capitalize = function (func, name) {
    return func(name).toUpperCase();
  };
  
  // Returning functions from other functions
  const getGreeter = function () {
    return function (name) {
      return "Hi, " + name + "!";
    };
  };
  
  // Using functions as values in objects
  const person = {
    name: "John",
    greet: function () {
      return "Hola, " + this.name + "!";
    },
  };
  
  console.log(greet("Alice")); // Output: Hello, Alice!
  console.log(capitalize(greet, "Bob")); // Output: HELLO, BOB!
  console.log(getGreeter()("Charlie")); // Output: Hi, Charlie!
  console.log(person.greet()); // Output: Hola, John!
// Higher-order function that takes a function as an argument
const applyOperation = function (operation, a, b) {
    return operation(a, b);
  };
  
  // Example operations
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  
  console.log(applyOperation(add, 2, 3)); // Output: 5
  console.log(applyOperation(multiply, 2, 3)); // Output: 6
    