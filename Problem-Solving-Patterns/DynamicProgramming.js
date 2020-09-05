function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(45));

function fib_dp(m) {
  const memo = {};
  return fib(m);

  function fib(n) {
    if (n <= 2) return 1;
    if (!memo[n - 1]) {
      memo[n - 1] = fib(n - 1);
    }
    if (!memo[n - 2]) {
      memo[n - 2] = fib(n - 2);
    }
    return memo[n - 1] + memo[n - 2];
  }
}

// console.log(fib_dp(45));

function fib_dp2(n, memo = {}) {
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fib_dp2(n - 1, memo) + fib_dp2(n - 2, memo);
  return memo[n];
}

console.log(fib_dp2(45));
