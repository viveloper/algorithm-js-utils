function naiveMaxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  if (arr.length < n) return null;

  let max = -Infinity;

  for (let i = 0; i <= arr.length - n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}
// O(N^2)

function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
// O(N)

// window {startIndex: i, length: n}
//  i                 i
// [2, 6, 9, 2, 1, 8, 5, 6, 3]
// [2, 6, 9, 2, 1, 8, 5, 6, 3]

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum([], 0));
console.log(maxSubarraySum([1, 2], 3));
console.log(maxSubarraySum([3], 1));
console.log('\n');

// ===============================================================

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let i = 0;
  let maxSum = 0;
  for (let j = 0; j < n; j++) {
    maxSum += arr[j];
  }

  let tempSum = maxSum;
  for (i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}
// time: O(N)
// space: O(1)

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
console.log('\n');

// ===============================================================

function minSubArrayLen(arr, val) {
  let i = 1;
  let n = 1; // window size
  let minLen = Infinity;
  let tempSum = arr[0];
  while (i <= arr.length) {
    if (tempSum >= val) {
      minLen = Math.min(minLen, n);
      tempSum = tempSum - arr[i - n];
      n--;
    } else {
      tempSum = tempSum + arr[i];
      i++;
      n++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
// time: O(N)
// space: O(1)

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
console.log('\n');

// ===============================================================

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    if (seen[key] !== undefined) {
      start = Math.max(start, seen[key] + 1);
    }
    longest = Math.max(longest, i - start + 1);
    seen[key] = i;
  }

  return longest;
}
// time: O(N)

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
console.log('\n');
