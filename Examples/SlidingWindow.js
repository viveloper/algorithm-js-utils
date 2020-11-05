function maxSubarraySum(arr, num) {
  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let prevSum = max;
  for (let i = 0; i < arr.length - num; i++) {
    temp = temp - arr[i] + arr[i + num];
  }
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
