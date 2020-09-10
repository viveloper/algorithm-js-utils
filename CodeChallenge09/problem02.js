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

  let mode = 0;
  let cnt = 1;
  let row = 0;
  let col = 0;
  while (true) {
    let flag = false;
    if (mode % 3 === 0) {
      while (row < n && tri[row][col] === 0) {
        tri[row][col] = cnt++;
        row++;
        flag = true;
      }
      if (!flag) break;
    } else if (mode % 3 === 1) {
      while (col < n && tri[row][col] === 0) {
        tri[row][col] = cnt++;
        col++;
        flag = true;
      }
      if (!flag) break;
    } else {
      while (row >= 0 && tri[row][col] === 0) {
        tri[row][col] = cnt++;
        row--;
        col--;
        flag = true;
      }
      if (!flag) break;
    }

    if (mode % 3 === 0) {
      row--;
      col++;
    } else if (mode % 3 === 1) {
      row--;
      col -= 2;
    } else {
      row += 2;
      col++;
    }
    mode++;
  }
  console.log(tri);
  const result = [];
  tri.forEach((row) => {
    row.forEach((el) => {
      result.push(el);
    });
  });
  console.log(result);
}

solution(6);
// [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
