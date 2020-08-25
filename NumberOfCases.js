function getAllCases(items, n) {
  const allCases = [];
  recursion([], 3);
  return allCases;

  function recursion(arr, n) {
    if (arr.length === n) {
      allCases.push([...arr]);
      return;
    }
    items.forEach((item) => {
      arr.push(item);
      recursion(arr, n);
      arr.pop();
    });
  }
}

const allCases = getAllCases(['a', 'b', 'c'], 3);

console.log(allCases, allCases.length);
