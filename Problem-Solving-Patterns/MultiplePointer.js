function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }

  return undefined;
}
// O(N^2)

console.log(naiveSumZero([-3, -1, 0, 2, 3]));
console.log(naiveSumZero([-2, 0, 1, 3]));
console.log(naiveSumZero([1, 2, 3]));
console.log(naiveSumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// ===============================================================

function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum < 0) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return undefined;
}
// O(N)

console.log(sumZero([-3, -1, 0, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
