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

console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('cinema', 'iceman')); // true
