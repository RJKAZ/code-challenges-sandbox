/*

To start off with...I freaking hate how Hacker Rank words this challenge. 

So we have 3 preset Variables that are already declared and given values
*/

var i = 4;
var d = 4.0;
var s = "HackerRank ";

// ok Hackerrank has all this prebuilt in Javsascript code for stdin that gives everything values....its just confusing as hell to me. So will figure this out the best I could to apply it to VS Code. 

// so the first thing we are supposed to do is declare a second of each of the preset variables. The wording of this alone left me confused as hell. But its supposed to be this. 

var i2;
var d2;
var s2; 

//then we are to read and save an integer, double, and string to your variables. For this purpose, A Double refers to a number with a decimal point. (first time I've heard of this, but ok)

/*
so the hackerrank solution is

i2 = parseInt(readLine());
d2 = parseFloat(readLine());
s2 = readLine();

that whole readLine is where it gets the values, but its nowhere in the provided code untill you solve it, 



*/

var i2 = 12;
var d2 = 4.0;
var s2 = "is the best place to learn and practice coding!"

// and we combine them in the console log. 
// however the middle one of d + d1 is alittle tricker since that has to be a decimal point so we use the toFixed method to do so

console.log(i + i2);
console.log((d + d2).toFixed(1));
console.log(s + s2);
