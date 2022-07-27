const testArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

/*
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 16));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 3));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 8));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1; 
}

console.log(binarySearch(testArray, 8));



function binarySearch(arr, target) { // function called binary search that takes in two arguments, an array and a target
  let start = 0; // setting the start at 0
  let end = arr.length - 1; // setting the end at the end of the array. In JavaScript, determining the end of an array is achieved by using the .length method minus 1

  while(start <= end) { // a while loop, while the start is less than or equal to the end. 
    // Define the middle using Math.floor which returns the largest integer less than or equal to a given number 
    let middle = Math.floor((start + end) / 2 ); // so the middle is equal to the start and the end added together and then divided by 2, so of that, the largest integer gets returned via the Math.floor
    if (arr[middle] < target) { // if the middle of the array is less then the target
      start = middle + 1; // the start becomes the middle of the array plus 1
    } else if (arr[middle] > target) { // else if the middle of the array is greater than the target
      end = middle - 1;  // the end is equal to the middle minus one
    } else if (arr[middle] === target) { // else if the middle of the array is equal to the target, 
      return middle; // return that middle
    }
  }
  return -1; // otherwise, if the target is nowhere in that array, return -1
}

console.log(binarySearch(testArray, 2));


const testArray2 = [1,2,3,4,5,6,7,8,9]
console.log(testArray2.length - 1)



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1; 
}

console.log(binarySearch(testArray, 2));


binary search function that takes in two arguments, an array and a target
  define the start at 0
  define the end as the last index of the array

  while loop that so long as the start is less than or equal to the end
    define the middle as the highest integer of the product of the start plus the end divded by 2. 
    if the arrays middle is less then the target
      set the start to be equal to the middle + 1
    else if the arrays middle is greater then the target
      set the end to be equal to the middle - 1
    else if the arrays middle is equal to the target
      return the middle
  otherwise return -1;


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while(start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target){
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 4));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while(start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch(testArray, 4));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 8));



function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2) 
    if (arr[middle] < target) {
      start = middle + 1; 
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    } 
  }
  return -1;
}

console.log(binarySearch(testArray, 1));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 1));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 1));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));


function binarySearch(list, winningNumber) {
  let firstPick = 0;
  let lastPick = list.length - 1;

  while (firstPick <= lastPick) {
    middlePick = Math.floor((firstPick + lastPick) / 2);
    if (list[middlePick] < winningNumber) {
      firstPick = middlePick + 1;
    } else if (list[middlePick] > winningNumber) {
      lastPick = middlePick - 1;
    } else if (list[middlePick] === winningNumber) {
      return middlePick;
    }
  }
  return 'you lose';
}
console.log(binarySearch(testArray, 200));


function binarySearch(arr, value) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] === value) {
      return arr[mid];
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return 'Not Found';
}

let array = [80, 2, 85, 4, 69, 5, 67, 9, 45, 12, 14];

let sorted = array.sort(function (a, b) {
  return a - b;
});

let foundNum = binarySearch(sorted, 90);

console.log(foundNum);


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return console.log('number not in array');
}

console.log(binarySearch(testArray, 10));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 5));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 5));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
    return middle;
  }
}

return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length - 1; 

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle; 
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target){
      return middle;
    }
  }
  return -1; 
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) { 
      start = middle + 1;
    } else if (arr[middle] > target){
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2)
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target){
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      middle = Math.floor((start + end) / 2);
      if (arr[middle] < target) {
        start = middle + 1;
      } else if (arr[middle] > target) {
        end = middle - 1;
      } else if (arr[middle] === target) {
        return middle;
      }
    }
    return -1;
  }

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (state <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (state <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (state <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (state <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (state <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target){
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1; 
    } else if (arr[middle] === target) {
      return middle; 
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1; 
    } else if (arr[middle] === target) {
      return middle; 
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1; 
    } else if (arr[middle] === target) {
      return middle; 
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0; 
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1; 
    } else if (arr[middle] === target) {
      return middle; 
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target){
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target){
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target){
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target){
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle +1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle +1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle +1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if(arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if(arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if(arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if(arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle -1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6))


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

console.log("time to go");


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

console.log("time to go");



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

console.log("time to go");


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

console.log("time to go");


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6)); 

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));



function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));


function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));

*/
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  return -1;
}
console.log(binarySearch(testArray, 6));