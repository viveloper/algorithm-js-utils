// ==============================================================
// nPr
// ==============================================================
function permutaion(items, r) {
  const permutaions = [];
  let count = 0;
  recursion(items, r);
  return {
    count,
    permutaions,
  };

  function recursion(items, r, store = []) {
    if (r === 0) {
      permutaions.push(store);
      count++;
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const nextItems = items.filter((item) => item !== items[i]);
      recursion(nextItems, r - 1, newStore);
    }
  }
}

console.log(permutaion([1, 2, 3], 2));

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
function permutaionWithRepetition(items, r) {
  const permutaions = [];
  let count = 0;
  recursion(items, r);
  return {
    count,
    permutaions,
  };

  function recursion(items, r, store = []) {
    if (r === 0) {
      permutaions.push(store);
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

console.log(permutaionWithRepetition([1, 2, 3], 3));

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
