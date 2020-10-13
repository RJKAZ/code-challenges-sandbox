/*
Intro to conditional statements 

given an integer, n, perform the follwing conditional actions

if n is odd, print Weird
if n is even, and in the inclusive range of 2 to 5, print weird
if n is even and in the inclusive range of 6-20, print weird
if n is even and greater then 20, print Not weird 

complete the stub code provided in your editor to print whether or not n is weird
*/


function main(){
  var N = 40;
  if (N%2 != 0 || (N > 5 && N < 21))
  console.log("Weird");
  else
  console.log("Not Weird");

}

main()

// so to explain that code, the if statement 

/* the biggest headache for me is the percentage % sign. In Javascript that sign is the Modulu, it is the operation used to find the remainder after division of one number by another. 

7 % 3 = 1
10 % 2 = 0
9 % 5 = 4

it is the Modulu that determines if n is even or odd in this challenge 

so....using N%2, if it comes out to zero, then the number is even. 

adding != (not eqaul) to zero would mean its odd

then it uses the logical OR operator ( || ) and the And operator (&&) to determine if its greater then 5 and less then 21.





*/
