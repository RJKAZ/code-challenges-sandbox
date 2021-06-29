/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1 Cat Years 15 cat years for first year +9 cat years for second year +4 cat years for each year after that Dog Years 15 dog years for first year +9 dog years for second year +5 dog years for each year after that
*/

/* this solution doens't work, or at least I can't make it work

// making this an arrow function stored as a variable named catDog
const catDog = (humanYears) => {
  // need to make variables for carYears and dogYears setting them to 0
  let catYears = 0;
  let dogYears = 0;

  // now we have a loop that loops thru the humanYears lenght and increments by 1 for each loop.
  for(let i = 1; i < humanYears.length; i++){
    if (humanYears === 1){
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
  
}

catDog(4);

console.log(catDog);
*/



// this is another solution that does work. I don't get that final bit of Math though.

const ages = (humanYears) => {
  let catYears, dogYears;
  if (humanYears === 1) return [1, 15, 15];
  else if (humanYears === 2) return [2, 24, 24];
  else {
    catYears = 4 * (humanYears -2) + 24;
    dogYears = 5 * (humanYears -2) + 24;
    return [humanYears, catYears, dogYears];

  }
};

console.log(ages(1));
console.log(ages(2));
console.log(ages(5));