function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(
  binarySearch([1, 4, 5, 7, 9, 13, 15, 38, 41, 46, 67, 71, 72, 85, 98, 100], 15) // 6
);
console.log(
  binarySearch(
    ['abc', 'bred', 'camera', 'drama', 'django', 'effect', 'four'],
    'camera'
  )
); // 2
console.log('\n');

//======================================================================
