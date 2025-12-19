/**
 * Problem: Fibonacci Number 509.
 * Pattern: recursion
 * Link: https://leetcode.com/problems/reverse-string/description/
 *
 * Approach:
 * Fibonacci is a classic recursion / DP problem.
 * Each number depends on the previous two numbers.
 * Fib(0) = 0, Fib(1) = 1
 * Fib(n) = Fib(n-1) + Fib(n-2), for n > 1
 *
 * Time: O(n)
 * Space: O(1)
 */
// iterative
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev2 = 0; // Fib(0)
  let prev1 = 1; // Fib(1)
  for (let i = 2; i <= n; i++) {
    let currFib = prev1 + prev2;
    prev2 = prev1;
    prev1 = currFib;
  }
  return prev1;
};

function fibrecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibrecursive(n - 1) + fibrecursive(n - 2);
}
// fibrecursive(3 - 1) + fibrecursive(3 - 2);
// fibrecursive(2 - 1) + 1
// 1 + 1

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(6));
