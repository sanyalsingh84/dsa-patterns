/**
 * Problem: Valid Palindrome 125.
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/valid-palindrome/
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

// solving with iterative approach
// var isPalindrome = function (s) {
//   if (s === "") return true;
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     let leftLetter = s[left].toLowerCase();
//     let righttLetter = s[right].toLowerCase();
//     // console.log(leftLetter, righttLetter);
//     if (leftLetter.charCodeAt(0) < 97) {
//       left++;
//       continue;
//     }
//     if (righttLetter.charCodeAt(0) < 97) {
//       right--;
//       continue;
//     }
//     if (leftLetter !== righttLetter) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// solving with recurssion approach
var isPalindrome = function (s, left = 0, right = s.length - 1) {
  s = s.toLowerCase();
  console.log(s[left], s[right]);
  // Base case: pointers crossed
  if (left >= right) return true;

  // Skip non-alphanumeric from left
  if (!isAlphaNumeric(s[left])) {
    return isPalindrome(s, left + 1, right);
  }

  // Skip non-alphanumeric from right
  if (!isAlphaNumeric(s[right])) {
    return isPalindrome(s, left, right - 1);
  }

  // Compare characters (case-insensitive)
  if (s[left].toLowerCase() !== s[right].toLowerCase()) {
    return false;
  }

  // Recurse inward
  return isPalindrome(s, left + 1, right - 1);
};

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 97 && code <= 122) // a-z
  );
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(""));
