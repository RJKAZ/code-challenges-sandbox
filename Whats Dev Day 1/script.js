function reverseString(str) {
    //so we create a variable named string array "strArr" and we use the .split method
    // and for the delimiter (a delimiter...is an object that specifices a boundry between things...like a comma )
    // for this purpose the delimiter is an emtpy string....not an empty space, but specifically an empty string.
    // so what we're saying is to split the string by an empty string.
    var strArr = str.split("");
    // we create another varibale, that takes the previous variable (the string split into an array) and we use the reverse method to reverse the array.
    var reverseStrArray = strArr.reverse();
    // now to combine the reverse string back into a string, we use the .join method.
    var reversedString = reverseStrArray.join("");
    // and this will return the reversed array now combined back into a string.
    // however there is a much quicker way to do this problem. that will be in the 2nd javascript file


    console.log(reverseStrArray);

    console.log(reversedString);

     


}

console.log(reverseString("hello"));


// this is the starter code and when the function is called it should reverse the string "hello" to "olleh"

//the first step is to create a variable 

// there is no built in Javascript method to reverse a string but there is a method to reverse an array.
var random = ["h", "e", "l"];
console.log(random.reverse())

//when console.logged, it returns the array in reverse 

// the reverse the string, we must first turn it into an array