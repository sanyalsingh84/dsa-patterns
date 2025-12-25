/**
 * Problem: Container With Most Water (LeetCode 11)
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Approach:
 * - Use two pointers starting at both ends of the array
 * - The area is determined by:
 *   - Width = distance between pointers
 *   - Height = minimum of the two heights
 * - At each step:
 *   - Calculate the area
 *   - Move the pointer pointing to the shorter height
 * - Moving the shorter height is the only way to possibly increase area
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var maxArea = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let area = width * Math.min(arr[left], arr[right]);
    maxArea = Math.max(area, maxArea);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
