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

// console.log(countUniqueValues([-3, -2, -2, 0, 1]));
// console.log(countUniqueValues([1, 1, 1, 2]));
// console.log(countUniqueValues([]));

// ============================================================

function averagePair(arr, avg) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const tempAvg = (arr[i] + arr[j]) / 2;
    if (tempAvg === avg) {
      console.log(true);
      return;
    }
    if (tempAvg < avg) i++;
    else if (tempAvg > avg) j--;
  }
  console.log(false);
}

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

// ============================================================

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i === str1.length) console.log(true);
  else console.log(false);
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
