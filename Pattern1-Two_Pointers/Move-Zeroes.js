/**
 * Problem: Move Zeroes 283.
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/move-zeroes/description/
 *
Approach:
 * - Use two pointers:
 *   - `j` scans the array
 *   - `i` tracks the position to place the next non-zero
 * - When nums[j] is non-zero, swap it with nums[i] and increment i
 * - This keeps non-zero elements in order and moves all zeros to the end
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var moveZeroes = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
