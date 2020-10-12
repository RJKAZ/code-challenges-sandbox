/*

In this challenge, you'll work with arthmetic operators 

task - given the meal price (base cost of the meal), tip percent, and tax percent, find and print the meals total cost

There are 3 lines of numeric input:

the first line has a double,  mealCost    (cost of meal before tax and tip)
the second line has an integer, tipPercent (the percentage of mealCost being added as tip)
the third line has an integer, taxPercent (the percentage of mealCost being added as tax)

For output, print the total meal cost where totalCost is the rounded integer result of the entire bill. (mealCost with added Tax and Tip)

Sample Input

12.00
20
8

Sample Out Put 15

mealCost = 12, tipPercent = 20, taxPercent = 8

calculations

tip = 12 * 12/100 = 2.4
tax = 12 * 8/100 = 0.96

totalCost = mealCost + tip + tax = 
totalCost = 12 + 2.4 + 0.96 = 15.36
round(totalCost) = 15

we round totalCost to the nearest dollar (integer) and then print out result

*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {

    var res = (meal_cost + (meal_cost * tip_percent / 100) + (meal_cost * tax_percent / 100));
    console.log(Math.round(res));


}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
