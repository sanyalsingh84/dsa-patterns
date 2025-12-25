/**
 * Problem: Remove Duplicates from Sorted Array (LeetCode 26)
 * Pattern: Two Pointers
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Approach:
 * - Since the array is sorted, duplicates appear consecutively
 * - Use two pointers:
 *   - `j` scans the array
 *   - `lastUniqueIndex` tracks the index of the last unique element
 * - When nums[j] is different from nums[lastUniqueIndex]:
 *   - Increment lastUniqueIndex
 *   - Copy nums[j] to nums[lastUniqueIndex]
 * - The first (lastUniqueIndex + 1) elements are unique
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let lastUniqueIndex = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[lastUniqueIndex]) {
      lastUniqueIndex++;
      nums[lastUniqueIndex] = nums[j];
    }
  }

  return lastUniqueIndex + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
