/*
Today we are learning about key value pair-mappings using a map or dictionary data structure. 

Given N names and phone numbers, assemble a phone book that maps friedns names to their respective phone numbers. 
You will be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a lew line the form name=phoneNumber

if an entry for name is not found, print "Not Found" instead.
*/

function processData(input) {
    //Enter your code here (name, phoneNumber)
    input = input.split('\n'); //Input of "sam 99912222" is split into "sam" "99912222" etc
    var n = parseInt(input[0]); //parseInt-An integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned. //"3" is the first thing in input so we get out "3" as number of entries (n).
    var phoneBook = [];
     
    //Add values to the phoneBook dictionary.
    for (var i = 0; i < n; i++){
        var newinput = input[i+1];
        newinput = newinput.split(' ');
        phoneBook[newinput[0]] = newinput[1];
    } //[ sam: '99912222', tom: '11122222', harry: '12299933' ]
     
    //Check if values are in dictionary.
    for (var i = n+1; i < input.length; i++){
        var num = (phoneBook[input[i]]);
        if (num !== undefined) {
            console.log(input[i]+'='+num);
        } else {
            console.log('Not found');
        }
    }
} 
