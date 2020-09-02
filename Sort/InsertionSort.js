function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (var j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([5, 21, 2, 6, 1, 6, 8, 23, 2, 521, 67, 34]));
