function removeChar(str){
str = str.substring(1, str.length-1);

console.log(str);

};

removeChar('Welcome')

// this is accomplished using the substring method. the 1 parameter hits the first letter, and calling the string's lenght with a -1 targets the last letter. 

