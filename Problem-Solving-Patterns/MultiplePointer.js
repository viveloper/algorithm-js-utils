function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }

  return undefined;
}
// O(N^2)

console.log(naiveSumZero([-3, -1, 0, 2, 3]));
console.log(naiveSumZero([-2, 0, 1, 3]));
console.log(naiveSumZero([1, 2, 3]));
console.log(naiveSumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// ===============================================================

function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum < 0) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return undefined;
}
// O(N)

console.log(sumZero([-3, -1, 0, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// ===============================================================

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([0]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log('\n');

// ===============================================================

function areThereDuplicates(...args) {
  if (args.length < 2) return false;

  args.sort();

  let i = 0;
  for (let j = i + 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
    i = j;
  }
  return false;
}
// Time : O(NlogN)
// Space : O(1)

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log('\n');

// ===============================================================

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const tempAvg = (arr[left] + arr[right]) / 2;
    if (tempAvg === avg) {
      return true;
    } else if (tempAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
// time : O(N)
// space : O(1)

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log('\n');

// ===============================================================

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }
  if (i === str1.length) {
    return true;
  } else {
    return false;
  }
}
// time : O(N + M)
// space : O(1)

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('', 'acb')); // true
console.log('\n');
