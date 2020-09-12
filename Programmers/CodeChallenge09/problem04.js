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

console.log(
  combination(
    Array(300)
      .fill('')
      .map((_, idx) => idx + 1),
    150
  )
);
