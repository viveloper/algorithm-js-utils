function solution(n, k) {
  const map = {};
  for (let i = 1; i <= n; i++) {
    map[i] = 0;
  }

  let check = n;
  let cnt = 0;
  while (check > 1) {
    for (let i = 1; i <= n; i++) {
      if (map[i] === 0) {
        cnt++;
        if (cnt === k) {
          map[i] = 1;
          cnt = 0;
          check--;
        }
      }
    }
  }

  for (const key in map) {
    if (map[key] === 0) return key;
  }
}

console.log(solution(8, 3)); // 7
