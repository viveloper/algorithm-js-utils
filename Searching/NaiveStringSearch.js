function naiveStringSearch(long, short) {
  let count = 0;
  let j;
  for (let i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
    }
    if (j === short.length) count++;
  }
  return count;
}

console.log(naiveStringSearch('hello world! word.', 'wor')); // 2
console.log(naiveStringSearch('hello world! word.', 'kaka')); // 0
