// 정수 n이 매개변수로 주어집니다.
// 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서
// 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
// 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록
// solution 함수를 완성해주세요.

//        1
//      2   9
//    3  10   8
//  4   5   6   7

function solution(n) {
  // 01. 입력값에 맞는 최종 2차원배열을 생성 (빈값으로 초기화)
  const tri = [];
  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
      temp.push(0);
    }
    tri.push(temp);
  }

  // 02. row를 -1번째로 설정, col을 0으로 설정, cnt를 1으로 설정
  let row = -1;
  let col = 0;
  let cnt = 1;

  while (n > 0) {
    // 03. row를 n번 내려가며 (row, col) 자리에 cnt를 입력, cnt 증가
    // n감소
    for (let i = 0; i < n; i++) {
      row++;
      tri[row][col] = cnt;
      cnt++;
    }
    n--;

    // 04. col을 n번 옮겨가며 해당 자리에 cnt를 입력, cnt 증가
    // n 감소
    for (let i = 0; i < n; i++) {
      col++;
      tri[row][col] = cnt;
      cnt++;
    }
    n--;

    // 05. row를 n번 올려가며, col은 1씩 줄여가며 (row, col) 자리에 cnt 입력, cnt 증가
    // n감소
    for (let i = 0; i < n; i++) {
      row--;
      col--;
      tri[row][col] = cnt;
      cnt++;
    }
    n--;

    // 06. 03번부터 다시 반복
  }

  const result = [];
  tri.forEach((row) => {
    row.forEach((item) => result.push(item));
  });

  return result;
}

console.log(solution(4)); // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6)); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
