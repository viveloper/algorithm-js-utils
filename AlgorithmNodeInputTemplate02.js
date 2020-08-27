// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let t = 0;

rl.on('line', function (line) {
  if (t === 0) {
    t = parseInt(line);
  } else {
    lines.push(line);
    if (lines.length === t) {
      lines.forEach((item) => {
        const [n, m] = item.split(' ').map((el) => parseInt(el));
        solution(n, m);
      });
      rl.close();
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(n, m) {
  const productNumList = [];
  for (let i = 12; i >= 5; i--) {
    const x = Math.floor(n / i);
    const y = i === 12 ? x : Math.floor(m / (12 - i));
    const productNum = Math.min(x, y);
    productNumList.push(productNum);
  }
  const answer = Math.max(...productNumList);

  console.log(answer);
}
