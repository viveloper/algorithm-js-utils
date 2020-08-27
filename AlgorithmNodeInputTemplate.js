// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
  if (lines.length === 2) {
    const [n, k] = lines[0].split(' ').map((item) => parseInt(item));
    const numbers = lines[1].split(' ').map((item) => parseInt(item));

    console.log(solution(n, k, numbers));

    rl.close();
  }
}).on('close', function () {
  process.exit();
});

function solution(n, k, numbers) {
  let cnt = 0;
  const queue = [...numbers];
  const stack = [];
  while (true) {
    cnt++;
    for (let i = 0; i < k; i++) {
      if (queue.length > 0) {
        stack.push(queue.shift());
      } else {
        return cnt;
      }
    }
    if (queue.length > 0) {
      queue.unshift(stack.pop());
    } else {
      return cnt;
    }
  }
}
