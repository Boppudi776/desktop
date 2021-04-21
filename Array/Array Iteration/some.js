// The some() method check if some array values pass a test.

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

console.log("Some over 18 is " , someOver18)

function myFunction(value, index, array) {
  return value > 18;
}