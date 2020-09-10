function solution(numbers) {
  const resultSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      resultSet.add(sum);
    }
  }

  const result = Array.from(resultSet);
  result.sort((a, b) => a - b);
  return result;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
