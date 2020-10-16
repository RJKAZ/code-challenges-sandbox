/*

So this lesson is about Array Data Structres 

the Task is given an Array, A, of N integers, print A's elements in reverse order as a single line of space seperated numbers. 

input format 

the first line contains an integer, N (the size of our array)
the second line contains N space-seperated integers describing arrays A's elements

constraints 
1 < N < 1000
1 < A < 10000, where Ai is the ith integer in the array

Output format
Print the elements of Array A in reverse order as a single line of space seperated numbers. 

Sample Input 

4
1 4 3 2

Sample Output

2 3 4 1

*/

// for this one all you really had to do was add the console.log statement. 

function main () {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  console.log(arr.reverse().join(' '));
}