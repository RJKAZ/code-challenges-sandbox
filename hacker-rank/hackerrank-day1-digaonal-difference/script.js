// so just when I think I got a handle of Javascript...I take the first "easy" question from hackerrank and...I'm like wtf is a square matrix?

/* so a Square Matrix Array is like this

1 2 3
4 5 6
9 8 9

Kind of like a telephone prompt keypad I guess...not sure why this example replaces the 7 with a 9, but whatever

Now a Square Matrix calcuates the absolute difference between the sums of its diagonals.

so we have the left to right diagonal which is 1, 5, & 9.

You add them, so the left to right diagonal = 1 + 5 + 9 = 15.

The right to left diagonal is the opposite, 3, 5, & 9

You add them, so the right to left diagonal = 3 + 5 + 9 = 17.

Their absolute difference between them is 2. (17-15=2)

.....up to this part I get it....

however the rest of this....way beyond my head

_________________________________________

So the function diagonalDifference takes the following parameter:
 int arr[n][m]: an array of integers 

 Return
 int: the absole diagonal difference

 Input Format

 The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
 each of the next n lines descrives a row, arr[i], and consists of n space-seperated integers arr[i][j]

 Constraints

 -100 < arr [i][j] < 100

 ________________________________________

 Not gonna lie everything above this confuses the heck out of me. 

 So the questions is return the absolute difference between the sums of the matrix's two diagonals as a single integer

 The sameple input is

 3
 11 2 4
 4 5 6
 10 8 -12

 (not sure what is up with that 3 at the top left?)

 and the sample output is 15

 So the primary diagonal = 11 + 5 -12 = 4

 the secondary diagonal = 4 + 5 + 10 = 19

 so the Absolute difference between 4 and 19, is 15. 

 So how to write this in Javascript....I have no idea...so I youtubed the answer. For someone who has a good grasp of Web-Dev focused JavaScript, I honestly feel this question does no way in hell belong to have an Easy caterogy.

 so this is the answer I saw on youtube. 

*/

function diagonalDifference(arr) {
    var n = arr[0].length;
    var leftSum = 0;
    var rightSum = 0;

    for (var i = 0, j = n -1; i < n; i++, j--){
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }

    var difference = leftsum = rightSum

    return Math.abs(difference);
}

// so this equals 15...but I am so lost on how it works.....

// also taking the code out of the hackerrank website and into VS code this code won't acctually run here
// I have no idea on how to enable the sample attribue  needed for the code to run 
/*

3
 11 2 4
 4 5 6
 10 8 -12
 
 */