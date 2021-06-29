/*
Task 

Given a list of integers, determine whether the sum of its elements is odd or even

give your answer as a string matching "odd" or "even"

if the input array is empty consider it as: [0] (array with a zero)

examples

Input: [0]
output: "even"

Input: [0, 1, 4]
output: "odd"

Input [0, -1, -5]
*/

// this works, but I don't understand the math/logic of how this works

function oddOrEven(array) {
  return array.reduce(function(sum, item) {
    return sum + item 
  }, 0) % 2 == 0 ? 'even' : 'odd';
}

console.log(oddOrEven([1, 2]));
console.log(oddOrEven([1, 2, 9]));
console.log(oddOrEven([10, -3]));