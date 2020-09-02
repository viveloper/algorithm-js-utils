function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([2, 5, 2, 6, 12, 65, 12, 56, 12], 6));
console.log(linearSearch([2, 5, 2, 6, 12, 65, 12, 56, 12], 100));
console.log('\n');

//======================================================================
