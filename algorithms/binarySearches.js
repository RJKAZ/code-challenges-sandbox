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

*/

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
