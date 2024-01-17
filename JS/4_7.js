const regex = /^[a-zA-Z0-9]+$/;

const userInput = prompt("Enter a string:");
if (regex.test(userInput)) {
  console.log("Valid input!");
} else {
  console.log("Invalid input! Only alphanumeric characters are allowed.");
}
