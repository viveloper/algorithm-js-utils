function solution(a) {
  if (a.length === 1) return 1;
  if (a.length === 2) return 2;

  let cnt = 2;

  for (let i = 1; i < a.length - 1; i++) {
    // 01. i번째 풍선 왼쪽의 최소값을 구한다.
    const leftArr = a.slice(0, i);
    const leftMin = Math.min(...leftArr);
    // 02. i번째 풍선의 오른쪽 최소값을 구한다.
    const rightArr = a.slice(i + 1);
    const rightMin = Math.min(...rightArr);
    // 03. 왼쪽 최소와 오른쪽 최소중 하나라도 i번짹 풍선보다 크면 가능.
    if (leftMin > a[i] || rightMin > a[i]) cnt++;
  }

  return cnt;
}

console.log(solution([9, -1, -5])); // 3
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])); // 6
// -16, -92, -71, -68, -61, -33
