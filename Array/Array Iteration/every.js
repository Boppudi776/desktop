// The every() method check if all array values pass a test.

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

console.log("All over 18 is " , allOver18)

function myFunction(value, index, array) {
  return value > 18;
}