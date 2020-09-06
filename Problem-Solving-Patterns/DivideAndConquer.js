function naiveSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
// O(N)

// if sorted array
function search(arr, val) {
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
// O(log(N))

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
console.log('\n');

// ====================================================================================

function naiveCountZeroes(arr) {
  return arr.reduce((acc, el) => (el === 0 ? acc + 1 : acc), 0);
}

function countZeroes(arr) {
  // special case
  if (arr.length === 0) return 0;
  if (arr[0] === 0) return arr.length;
  if (arr[arr.length - 1] === 1) return 0;

  // general case
  const firstZeroIdx = getFirstZeroIdx(arr);
  return arr.length - firstZeroIdx;
}

function getFirstZeroIdx(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === 0 && arr[mid - 1] === 1) return mid;
    if (arr[mid] === 0 && arr[mid - 1] === 0) {
      right = mid - 1;
    } else if ((arr[mid] === 1 && arr[mid - 1] === 1) || !arr[mid - 1]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return null;
}

const input = [];
for (let i = 0; i <= 50000000; i++) {
  input.push(1);
}
for (let i = 0; i <= 50000100; i++) {
  input.push(0);
}

let start = new Date().getTime();
console.log(naiveCountZeroes(input));
let end = new Date().getTime();
console.log(
  'Call to naiveCountZeroes took ' + (end - start) + ' milliseconds.'
);

start = new Date().getTime();
console.log(countZeroes(input));
end = new Date().getTime();
console.log('Call to countZeroes took ' + (end - start) + ' milliseconds.');

// ====================================================================================

function sortedFrequency(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  const firstFindIdx = getFirstFindIdx(arr, val);
  const lastFindIdx = getLastFindIdx(arr, val);
  if (firstFindIdx === -1 || lastFindIdx === -1) return -1;
  return lastFindIdx - firstFindIdx + 1;
}

function getFirstFindIdx(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === val && arr[mid - 1] < val) return mid;
    if (arr[mid] >= val && arr[mid - 1] >= val) {
      right = mid - 1;
    } else if ((arr[mid] < val && arr[mid - 1] < val) || !arr[mid - 1]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

function getLastFindIdx(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[arr.length - 1] === val) return arr.length - 1;

  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === val && arr[mid + 1] > val) return mid;
    if ((arr[mid] > val && arr[mid + 1] > val) || !arr[mid + 1]) {
      right = mid - 1;
    } else if (arr[mid] <= val && arr[mid + 1] <= val) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}
