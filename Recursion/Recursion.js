function power(n, m) {
  if (m === 0) return 1;
  return n * power(n, m - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log('\n');

//================================================================================

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.log(factorial(0)); // 1
console.log('\n');

//================================================================================

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log('\n');

//================================================================================

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log('\n');

//================================================================================

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
console.log('\n');

//================================================================================

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa
console.log(reverse('rithmschool')); // 'loohcsmhtir'
console.log('\n');

//================================================================================

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log('\n');

//================================================================================

function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
console.log('\n');

//================================================================================

function flatten(arr) {
  if (!arr.find((el) => Array.isArray(el))) return arr;
  let newArr = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      newArr = newArr.concat(el);
    } else {
      newArr.push(el);
    }
  });
  return flatten(newArr);
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
console.log('\n');

//================================================================================

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const firstWord = arr[0];
  const capitalizeWord = firstWord[0].toUpperCase() + firstWord.slice(1);

  return [capitalizeWord].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car', 'Taco', 'banana'])); // ['Car','Taco','Banana']
console.log('\n');

//================================================================================

function nestedEvenSum(obj) {
  let res = 0;
  for (const key in obj) {
    const el = obj[key];
    if (typeof el === 'number' && el % 2 === 0) {
      res += el;
    } else if (typeof el === 'object' && el !== null) {
      res += nestedEvenSum(el);
    }
  }
  return res;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
console.log('\n');

//================================================================================

function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  const firstWord = arr[0];
  return [firstWord.toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log('\n');

//================================================================================

function stringifyNumbers(obj) {
  const res = {};
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      res[key] = obj[key].toString();
    } else if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      res[key] = stringifyNumbers(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}

let obj3 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj3));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
console.log('\n');

//================================================================================

function collectStrings(obj) {
  let res = [];
  for (const key in obj) {
    const el = obj[key];
    if (typeof el === 'string') {
      console.log(el);
      res.push(el);
    } else if (typeof el === 'object' && el !== null && !Array.isArray(el)) {
      res = res.concat(collectStrings(el));
    }
  }
  return res;
}

const obj4 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj4)); // ["foo", "bar", "baz"])
console.log('\n');

//================================================================================
