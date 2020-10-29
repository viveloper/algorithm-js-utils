// ==============================================================
// nPr
// ==============================================================
function permutation(items, r) {
  const permutations = [];
  let count = 0;
  recursion(items, r);
  return permutations;

  function recursion(items, r, store = []) {
    if (r === 0) {
      permutations.push(store);
      count++;
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const nextItems = [...items];
      nextItems.splice(i, 1);
      recursion(nextItems, r - 1, newStore);
    }
  }
}

console.log(permutation([1, 2, 3], 2));

// ==============================================================
// nCr
// ==============================================================
function combination(items, r) {
  const combinations = [];
  let count = 0;
  recursion(items, r);
  return {
    count,
    combinations,
  };

  function recursion(items, r, store = []) {
    if (r === 0) {
      combinations.push(store);
      count++;
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const nextItems = items.slice(i + 1, items.length);
      recursion(nextItems, r - 1, newStore);
    }
  }
}

console.log(combination([1, 2, 3], 2));

// ==============================================================
// n Pi r
// ==============================================================
function permutationWithRepetition(items, r) {
  const permutations = [];
  let count = 0;
  recursion(items, r);
  return {
    count,
    permutations,
  };

  function recursion(items, r, store = []) {
    if (r === 0) {
      permutations.push(store);
      count++;
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const nextItems = [...items];
      recursion(nextItems, r - 1, newStore);
    }
  }
}

console.log(permutationWithRepetition([1, 2, 3], 3));

// ==============================================================
// nHr
// ==============================================================
function combinationWithRepetition(items, r) {
  const combinations = [];
  let count = 0;
  recursion(items, r);
  return {
    count,
    combinations,
  };

  function recursion(items, r, store = []) {
    if (r === 0) {
      combinations.push(store);
      count++;
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const nextItems = items.slice(i, items.length);
      recursion(nextItems, r - 1, newStore);
    }
  }
}

console.log(combinationWithRepetition([1, 2, 3], 2));
