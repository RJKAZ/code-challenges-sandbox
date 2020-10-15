/*
Day 5 Loops

In this challenge, we're going to use loops to help us do some simple math. 

Task - Given an integer, n, print its first 10 multiples. Each multiple n x i (where 1 <i<10) shoyld be printed on a new line in the form: 
n x i = result 

input format - a single integer, n

constraints - 2 < n < 20

output format
Print 10 lines of output; each line i (where 1 < i < 10) contains the result of n x i in the form
n x i = result 

sample input -  2

sample output - 
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20

*/

function main() {
    var n = 2; //Collect n to use for our multiplication table.
        for (i = 1; i < 11; i++){ //Iterate through i from 1 to 10.
            console.log(n + ' x ' + i + ' = ' + (n*i)); //{variable n} x {variable i} = {n * i result}
        }
}
main();