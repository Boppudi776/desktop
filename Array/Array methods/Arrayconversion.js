// Arrayconversion from Array to String using toString()

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("converting Array to String", fruits.toString());

// Arrayconversion from Array to String using join

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// with join you can keep any symbol between array elements
console.log("converting Array to String", fruits.join());

// With JSON.stringify() we can convert array into string
var fruits =[1,2,3,4,5];
console.log("converting Array to String", JSON.stringify(fruits));