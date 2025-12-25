/**
 * Problem: Minimum Size Subarray Sum (LeetCode 209)
 * Pattern: Sliding Window (Variable Size)
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * Approach:
 * - Use a sliding window with two pointers (left & right)
 * - Expand the window by adding nums[right] to currentSum
 * - When currentSum >= target:
 *   - Update minLength
 *   - Shrink window from left by subtracting nums[left] until currentSum < target
 * - Return 0 if no valid subarray found
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left]; // ✅ fixed
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
