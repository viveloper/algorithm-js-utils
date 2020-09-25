function solution(a) {
  // 01 각 컬럼에서 1을 선택할수 있는 조합을 구함
  const combinations = [];
  for (let i = 0; i < a[0].length; i++) {
    const selectedRowCnt = a.reduce(
      (acc, row) => (row[i] === 1 ? acc + 1 : acc),
      0
    );
    const tempArr = Array(a.length)
      .fill('')
      .map((_, idx) => idx);
    const comb = combination(tempArr, selectedRowCnt);
    combinations.push(comb);
  }

  // 02 각 컬럼별 선택간 조합을 구함
  const allComb = groupCombination(combinations);

  // 03 각 row의 합이 짝수인 경우만 카운트
  const count = allComb.reduce((acc, oneCase) => {
    const frequencyCount = {};
    oneCase.forEach((oneSelect) => {
      oneSelect.forEach((row) => {
        if (!frequencyCount[row]) {
          frequencyCount[row] = 1;
        } else {
          frequencyCount[row]++;
        }
      });
    });

    for (const key in frequencyCount) {
      const count = frequencyCount[key];
      if (count % 2 !== 0) return acc;
    }
    return acc + 1;
  }, 0);

  // 04 그 개수를 리턴
  return count;
}

function groupCombination(groups) {
  const result = [];
  recursion(groups);
  return result;

  function recursion(_groups, memo = []) {
    if (_groups.length === 0) {
      result.push(memo);
      return;
    }
    const firstgGroup = _groups[0];
    for (let i = 0; i < firstgGroup.length; i++) {
      newMemo = [...memo, firstgGroup[i]];
      recursion(_groups.slice(1), newMemo);
    }
  }
}

function combination(items, r) {
  const combinations = [];
  let count = 0;
  recursion(items, r);
  return combinations;

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
  solution([
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
// 6

console.log(
  solution([
    [1, 0, 0],
    [1, 0, 0],
  ])
);
// 0

console.log(
  solution([
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
// 72
