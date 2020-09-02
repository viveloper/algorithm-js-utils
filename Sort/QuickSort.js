function pivot(arr, start = 0, end = arr.length - 1) {
  let j = start + 1;
  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  const pivotIdx = j - 1;
  [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];

  return pivotIdx;
}

console.log(pivot([5, 8, 9, 11, 4, 6, 3, 2, 20]));
console.log('\n');

//====================================================================

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIdx = pivot(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  return arr;
}

console.log(quickSort([5, 8, 9, 11, 4, 6, 3, 2, 20]));
