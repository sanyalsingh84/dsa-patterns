/**
 * Problem: Reverse String 344
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/reverse-string/description/
 *
 * Approach:
 * - Use left and right pointers
 * Always swap symmetric elements
 * Shrink the window after each swap
 * Stop when pointers cross
 *
 * Time: O(n)
 * Space: O(1)
 */

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
