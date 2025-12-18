/**
 * Problem: Count digits in a number *
 * Approach:
 * Repeatedly divide the number by 10
 * Each division removes one digit
 * Count how many times until number becomes 0
 *
 * Time: O(n)
 * Space: O(n)
 */

// recursive approch
function countDigitsRecursive(num) {
  // console.log(num, count);
  if (num < 10) return 1;

  return 1 + countDigits(Math.floor(num / 10));
}

// iterative

function countDigitsIterative(num) {
  if (num < 10) return 1;

  let count = 0;

  while (num !== 0) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
}

console.log("count", countDigits(12345));
console.log(countDigits(7));
console.log(countDigits(0));
