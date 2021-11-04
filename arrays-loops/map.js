// I'm going to go thru every array method and modify this simple array of three names, and another array with numbers

let names = ['Tom', 'Dick', 'Harry'];
console.log(names);

let numbers = [1, 2, 3];
console.log(numbers);

// 1st Array - The Map Method - This method creates a new array with the results of calling a provided function on every elment in the array.

let doubledNumbers = numbers.map((element) => element * 2);
console.log(doubledNumbers);

// so in that above example, I created a new variable called doubledNumbers
// I set its value to the numbers array but with using the map method, using an arrow function, I took eveyr element in the array and multiplied it by 2.
console.log(numbers);
console.log(doubledNumbers);

// Using it on its own won't work
// let numbers2 = numbers.map();
// console.log(numbers2);

// So it needs to take it a function of some sort, but they don't have to be in the method as that example did.

// so here I have a simple multiplication function that will multipy what ever number is called with by 20. Since I'm calling the function with the parameter of 10, it will return 200

function multiplicationFunction(num) {
  return num * 20;
}
console.log(multiplicationFunction(10));

// to use this in context of the map method
// I'm making a new variable of newNumbers,
// and setting to the numbers array, but maping thru it and applying the multiplicationFunction

const newNumbers = numbers.map(multiplicationFunction);
console.log(newNumbers);

// lets do another example but with an Object

// this is an array of an object superheros real names

const superheros = [
  { firstname: 'Clark', lastname: 'Kent' },
  { firstname: 'Bruce', lastname: 'Wayne' },
  { firstname: 'Diana', lastname: 'Prince' },
];

// this a function that takes in an item, takes in that items first and last name, and combines them using the join method
function combineNames(item) {
  return [item.firstname, item.lastname].join(' ');
}

// so to use the map method on this

console.log(superheros.map(combineNames));

// here is another example of the map method in action

const test = 'Sammy';
const testing = Array.prototype.map;

const newTest = testing.call(test, (eachLetter) => {
  return `${eachLetter}a`;
});

console.log(newTest);
