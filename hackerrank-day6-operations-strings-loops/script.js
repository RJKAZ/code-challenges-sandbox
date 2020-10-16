/*
Objective - we shall combine strings with loops 

Task - Given a string S, or length N that is indexed from 0 to N -1, print its even-indexed and odd-indexed characters as 2 space-seperated strings on a single line
(0 is to be considered an even index)


*/

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