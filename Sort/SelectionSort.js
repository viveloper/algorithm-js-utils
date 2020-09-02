function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // swap
  }
  return arr;
}

console.log(selectionSort([5, 21, 2, 6, 1, 6, 8, 23, 2, 521, 67, 34]));
