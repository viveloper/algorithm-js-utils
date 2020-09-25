function permutation(items, r) {
  const permutations = [];
  let count = 0;
  recursion(items, r);
  return {
    count,
    permutations,
  };

  function recursion(items, r, store = []) {
    if (r === 0) {
      count++;
      permutations.push(store);
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const newItems = items.filter((item) => item !== items[i]);
      recursion(newItems, r - 1, newStore);
    }
  }
}

console.log(permutation([1, 2, 3], 2));

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
      count++;
      combinations.push(store);
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const newItems = items.slice(i + 1, items.length);
      recursion(newItems, r - 1, newStore);
    }
  }
}

console.log(combination([1, 2, 3], 2));

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
      count++;
      permutations.push(store);
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const newItems = items;
      recursion(newItems, r - 1, newStore);
    }
  }
}

console.log(permutationWithRepetition([1, 2, 3], 3));

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
      count++;
      combinations.push(store);
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const newStore = [...store, items[i]];
      const newItems = items.slice(i, items.length);
      recursion(newItems, r - 1, newStore);
    }
  }
}

console.log(combinationWithRepetition([1, 2, 3], 2));
