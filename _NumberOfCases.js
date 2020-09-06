// Permuation with Repetition
function permuationWithRepetition(items, n) {
  const result = [];
  recursion([]);
  return result;

  function recursion(arr) {
    if (arr.length === n) {
      result.push([...arr]);
      return;
    }
    items.forEach((item) => {
      arr.push(item);
      recursion(arr);
      arr.pop();
    });
  }
}

const case01 = permuationWithRepetition(['a', 'b', 'c'], 3);
console.log(case01, case01.length);

// Permuation
function permutation(items, n) {
  const result = [];
  recursion(items, []);
  return result;

  function recursion(restItems, arr) {
    if (arr.length === n) {
      result.push([...arr]);
      return;
    }
    restItems.forEach((restItem) => {
      arr.push(restItem);
      recursion(
        restItems.filter((item) => item !== restItem),
        arr
      );
      arr.pop();
    });
  }
}

const case02 = permutation(['a', 'b', 'c'], 3);
console.log(case02, case02.length);

// Combination with Repetition
function combinationWithRepetition(items, n) {
  const result = [];
  recursion([]);
  return result;

  function recursion() {}
}

// Combination
function combination(items, n) {
  const result = [];
  recursion([]);
  return result;

  function recursion() {}
}
