function search(arr, num) {
  return recursion(0, arr.length - 1);

  function recursion(start, end) {
    console.log([start, end]);
    if (start > end) return -1;
    let idx = Math.floor((start + end) / 2);
    if (arr[idx] === num) return idx;
    if (arr[idx] < num) return recursion(idx + 1, end);
    if (arr[idx] > num) return recursion(start, idx - 1);
  }
}

console.log(search([2, 6, 7, 8, 11, 45, 99, 101], 45)); // 5
