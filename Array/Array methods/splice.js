// Adding elements to an array at ay index using splice

// First parameter is from which index we have to add
// Second parameter is for how many elements we have to remove from given index in first parameter 
// third parameter onwards the new elements to be added to the array

var h = [1,2,3,4,5];
console.log("h before splice",h);
h.splice(2,0,6,7);
console.log("h after splice",h);

// Removing elements from array at ay index using splice

var i = [1,2,3,4,5];
console.log("i before splice",i);
i.splice(2,1);
console.log("i after splice",i);
