function getDigit(num, i) {
  const q = Math.floor(num / Math.pow(10, i - 1));
  const r = q % 10;
  return r;
}

console.log(getDigit(4356621, 5));
console.log('\n');

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

console.log(digitCount(5235));
console.log('\n');

function mostDigit(arr) {
  let maxDigitCount = 0;
  arr.forEach((num) => {
    maxDigitCount = Math.max(maxDigitCount, digitCount(num));
  });
  return maxDigitCount;
}

function radixSort(arr) {
  const maxDigitCount = mostDigit(arr);

  for (let k = 1; k <= maxDigitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    arr.forEach((num) => {
      const key = getDigit(num, k);
      buckets[key].push(num);
    });
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(
  radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29])
);
console.log('\n');
