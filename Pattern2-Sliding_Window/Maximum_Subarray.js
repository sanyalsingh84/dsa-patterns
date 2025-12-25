/**
 * Problem: Maximum Subarray 53.
 * Pattern: Sliding Window / Dynamic Programming (Kadane’s Algorithm)
 * Link: https://leetcode.com/problems/maximum-subarray/description/
 *
 * Approach:
 * - Traverse the array once while maintaining:
 *   - currentSum: maximum subarray sum ending at the current index
 *   - maxSum: maximum subarray sum seen so far
 * - At each element:
 *   - Decide whether to extend the previous subarray or start a new one
 *   - If currentSum is negative, discard it and start fresh
 * - Update maxSum at every step
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var maxSubArray = function (arr) {
  let currentSum = 0;
  let maxSum = -Infinity;

  arr.forEach((element) => {
    if (currentSum < 0) {
      currentSum = element;
    } else {
      currentSum += element;
    }

    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
