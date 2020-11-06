function maxSubarraySum(arr, num) {
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let sum = max;
  for (let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    if (sum > max) max = sum;
  }

  return max;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// ============================================================

function findLongestSubstring(str) {
  let seen = {};
  let len = 0;
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]] === undefined) {
      seen[str[i]] = i;
      len++;
      if (len > max) max = len;
    } else {
      i = seen[str[i]];
      seen = {};
      len = 0;
    }
  }
  if (max === -Infinity) max = 0;
  console.log(max);
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
