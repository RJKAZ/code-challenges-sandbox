/*
In this challenge we will learn the difference between a class and an instance.

write a person class with an instance variable age and a constructor that takes an integer, initialAge as the parameter 

*/

function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge &amp;lt; 0){console.log("Age is not valid, setting age to 0."); age = 0; 
    } else { age = initialAge; }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
   

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
   };
}
