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
