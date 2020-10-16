/*
Objective - we shall combine strings with loops 

Task - Given a string S, or length N that is indexed from 0 to N -1, print its even-indexed and odd-indexed characters as 2 space-seperated strings on a single line
(0 is to be considered an even index)




function processData(input) {
    //Enter your code here
    input.split("\n").reduce((target, item, index) => {
        if (index && Number.isNaN(+item)) {
            let result = item.split('').reduce((target, text, index) => {
                target[+(index % 2 !== 0)] += text;

                return target;
            }, new Array(2).fill('')).join(' ')

            console.log(result);
        }

        return target;
    }, '');
}

// https://marcuscript.wordpress.com/2017/05/16/30doc-day-6-lets-review/

function processData(input) {
    //Ie: "Hacker" and  "Rank" becomes:
    //"Hce akr" even values - odd values [H, a, c, k, e, r] equals [0, 1, 2, 3, 4, 5]
    //"Rn ak" even values - odd values [R, a, n, k] equals [0, 1, 2, 3]
    var myArray = input.split("\n"); //Splitting string between each newline into myArray values.
    //input is: "2\nHacker\nRank". myArray = [[2], ["Hacker"], ["Rank"]], [[0], [1], [2]]
    var evenChar = "";
    var oddChar = "";
 
    for (var i = 1; i &lt; myArray.length; i++){ //Starting from 1 (Hacker) to length of array (3 values) &amp; incrementing by 1.
        for (var j = 0; j &lt; myArray[i].length; j++) {//j is counting but array is already set to start at "Hacker" element.
            if (j%2 == 0) { //If j mod 2 equals 0, that means it's an even number.
                evenChar += myArray[i][j]; //Therefore, add value to evenChar string.
            } else {
                oddChar += myArray[i][j]; //If odd, add value to oddChar string.
            }
        }
        console.log(evenChar + " " + oddChar);
        evenChar = "";
        oddChar = "";
    }
}

*/

// the above two codes, don't fully work. This code below does

function processData(input) {
    //Enter your code here
    input = input.split('\n');
  
    for (i = 1; i < input.length; i++) {
      var splitWord = input[i].split('');
  
      var even = '';
      var odd = '';
  
      for (x = 0; x < splitWord.length; x++) {
        if (x % 2 === 0) {
          even = even + splitWord[x];
        } else {
          odd = odd + splitWord[x];
        }
      }
      console.log(even + ' ' + odd);
    }
  }
