function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const map = {};

  // 첫번째 배열의 모든 값에 대해 제곱값을 구하면서,
  // 그 값이 몇 번 나오는지 해시맵에 기록
  arr1.forEach((el) => {
    const key = Math.pow(el, 2);
    if (!map[key]) {
      map[key] = 1;
    } else {
      map[key]++;
    }
  });

  // 두번째 배열의 모든 값에 대해 해시맵을 업데이트
  arr2.forEach((el) => {
    const key = el;
    if (!map[key]) return false;
    map[key]--;
  });

  // 해시맵의 모든 값이 0이면 true, 아니면 false
  for (const key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter = {};

  for (let i = 0; i < str1.length; i++) {
    const key = str1[i];
    if (!frequencyCounter[key]) frequencyCounter[key] = 1;
    else frequencyCounter[key]++;
  }

  for (let i = 0; i < str2.length; i++) {
    const key = str2[i];
    if (!frequencyCounter[key]) return false;
    frequencyCounter[key]--;
  }

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] !== 0) return false;
  }

  return true;
}
// O(N)

console.log(validAnagram('texttwist', 'twisttext'));
