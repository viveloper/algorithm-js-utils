function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < 0) {
      i++;
    } else if (arr[i] + arr[j] > 0) {
      j--;
    }
  }
  return undefined;
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 4]));
// console.log(sumZero([-3, -2, -1, 0, 1, 2]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// ============================================================

// function countUniqueValues(arr) {
//   const mySet = new Set();
//   arr.forEach((item) => {
//     mySet.add(item);
//   });
//   return mySet.size;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else if (arr[i] === arr[j]) {
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-3, -2, -2, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 2]));
console.log(countUniqueValues([]));
