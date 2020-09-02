function bubbleSort(arr) {
  for (let i = arr.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
      }
    }
  }
  return arr;
}

console.log(bubbleSort([58, 1, 2, 8, 9, 11, 12, 78, 13]));
console.log('\n');

// ===============================================================

function optimizedBubbleSort(arr) {
  for (let i = arr.length; i > 1; i--) {
    let isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(optimizedBubbleSort([58, 1, 2, 8, 9, 11, 12, 78, 13]));
