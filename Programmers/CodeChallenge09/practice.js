function solution(n) {
  const tri = Array(n)
    .fill('')
    .map((_, idx) => {
      const row = [];
      for (let i = 0; i < idx + 1; i++) {
        row.push(0);
      }
      return row;
    });

  console.log(tri);

  let cnt = 1;

  // starting point
  let [r1, c1] = [0, 0]; // +2, +1
  let [r2, c2] = [n - 1, 1]; // -1, +1
  let [r3, c3] = [n - 2, n - 2]; // -1, -2

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      tri[r1 + i][c1] = cnt++;
    }
    n--;
    for (let i = 0; i < n; i++) {
      tri[r2][c2 + i] = cnt++;
    }
    n--;
    for (let i = 0; i < n; i++) {
      tri[r3 - i][c3 - i] = cnt++;
    }
    n--;

    [r1, c1] = [r1 + 2, c1 + 1];
    [r2, c2] = [r2 - 1, c2 + 1];
    [r3, c3] = [r3 - 1, c3 - 2];
  }

  console.log(tri);
}

solution(7);
// [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
