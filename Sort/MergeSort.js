function merge(arr1, arr2) {
  const mergedArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }
  while (arr1.length > 0) {
    mergedArr.push(arr1.shift());
  }
  while (arr2.length > 0) {
    mergedArr.push(arr2.shift());
  }

  return mergedArr;
}

console.log(merge([1, 4, 8, 23], [4, 5, 7, 9, 21]));

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);
  return merge(mergeSort(arr1), mergeSort(arr2));
}

console.log(mergeSort([5, 21, 2, 6, 1, 6, 8, 23, 2, 521, 67, 34]));
