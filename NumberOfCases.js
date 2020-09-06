// ========================================================================
// n Pi r
function permutationWithRepetition(items, r, result = []) {
  if (r === 0) return result;
  let newResult = [];
  if (result.length === 0) {
    items.forEach((item) => {
      newResult.push([item]);
    });
  } else {
    result.forEach((el) => {
      items.forEach((item) => {
        newResult.push(el.concat(item));
      });
    });
  }
  return permutationWithRepetition(items, r - 1, newResult);
}

console.log(permutationWithRepetition(['a', 'b', 'c'], 3));

// ========================================================================
// n P r
function permutation(items, r, result = []) {
  if (r === 0) return result;
  let newResult = [];
  if (result.length === 0) {
    items.forEach((item) => {
      newResult.push([item]);
    });
  } else {
    result.forEach((el) => {
      items.forEach((item) => {
        if (!el.includes(item)) newResult.push(el.concat(item));
      });
    });
  }
  return permutation(items, r - 1, newResult);
}

console.log(permutation(['a', 'b', 'c'], 3));

// ========================================================================
// n H r
function combinationWithRepetition(items, r) {
  const result = permutationWithRepetition(items, r);
  for (let i = result.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (isEqualComb(result[i], result[j])) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
}

console.log(combinationWithRepetition(['a', 'b', 'c'], 3));

// ========================================================================
// n C r
function combination(items, r) {
  const result = permutation(items, r);
  for (let i = result.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (isEqualComb(result[i], result[j])) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
}

console.log(combination(['a', 'b', 'c'], 2));

// ========================================================================
// helper function
function isEqualComb(comb1, comb2) {
  const frequencyCount = {};
  let result = true;
  comb1.forEach((item) => {
    if (!frequencyCount[item]) {
      frequencyCount[item] = 1;
    } else {
      frequencyCount[item]++;
    }
  });
  comb2.forEach((item) => {
    if (!frequencyCount[item]) {
      result = false;
    } else {
      frequencyCount[item]--;
    }
  });

  if (!result) return false;

  for (const key in frequencyCount) {
    if (frequencyCount[key] !== 0) return false;
  }
  return true;
}
