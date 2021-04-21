// Sort method changes the order of array elements in Alphabetical order

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before Sort", fruits);
fruits.sort(); 
console.log("After Sort", fruits.sort());

// to get reverse of alphabetical order we have to sort it and then we have to reverse the array

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before Sort", fruits2);
fruits2.sort(); 
console.log("After Sort", fruits2.sort().reverse());