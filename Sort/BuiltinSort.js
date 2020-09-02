console.log(
  ['hello', 'photo', 'choco', 'vanilla', 'react', 'vue', 'angular'].sort()
);

console.log([5, 2, 8, 6, 1, 3, 5, 78, 3].sort());

console.log([5, 2, 8, 6, 1, 3, 5, 78, 3].sort((a, b) => a - b));

console.log(
  ['hello', 'photo', 'choco', 'vanilla', 'react', 'vue', 'angular'].sort(
    (str1, str2) => str1.length - str2.length
  )
);
