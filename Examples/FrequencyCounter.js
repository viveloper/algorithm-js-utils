function same(arr1, arr2) {
  const frequency = {};

  arr1.forEach((item) => {
    const key = item * item;
    if (!frequency[key]) frequency[key] = 1;
    else frequency[key] += 1;
  });

  arr2.forEach((item) => {
    const key = item;
    if (!frequency[key]) frequency[key] = -1;
    else frequency[key] -= 1;
  });

  for (const key in frequency) {
    if (frequency[key] !== 0) return false;
  }

  return true;
}

// console.log(same([1, 2, 2, 3], [1, 4, 4, 9]));

// ==============================================================

function validAnagram(str1, str2) {
  const frequency = {};

  for (let i = 0; i < str1.length; i++) {
    const key = str1[i];
    frequency[key] = frequency[key] === undefined ? 1 : frequency[key] + 1;
  }

  for (let i = 0; i < str1.length; i++) {
    const key = str2[i];
    frequency[key] = frequency[key] === undefined ? -1 : frequency[key] - 1;
  }

  for (const key in frequency) {
    if (frequency[key] !== 0) return false;
  }
  return true;
}

// console.log(validAnagram('aaz', 'zza')); // false
// console.log(validAnagram('cinema', 'iceman')); // true

// ==============================================================

function sameFrequency(num1, num2) {
  const frequency = {};
  let q = num1;
  while (q > 0) {
    const digit = q % 10;
    q = Math.floor(q / 10);
    frequency[digit] =
      frequency[digit] === undefined ? 1 : frequency[digit] + 1;
  }

  q = num2;
  while (q > 0) {
    const digit = q % 10;
    q = Math.floor(q / 10);
    frequency[digit] =
      frequency[digit] === undefined ? -1 : frequency[digit] - 1;
  }

  for (const digit in frequency) {
    if (frequency[digit] !== 0) return false;
  }
  return true;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// ==============================================================

function areThereDuplicates(...args) {
  const frequency = {};
  args.forEach((arg) => {
    if (frequency[arg] === undefined) frequency[arg] = 1;
    else frequency[arg] += 1;
  });
  for (const arg in frequency) {
    if (frequency[arg] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
