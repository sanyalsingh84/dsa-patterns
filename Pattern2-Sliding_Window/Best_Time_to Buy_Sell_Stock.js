/**
 * Problem: Best Time to Buy and Sell Stock (LeetCode 121)
 * Pattern: Single Pass / Greedy
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Approach:
 * - Track the minimum price seen so far
 * - Iterate through the prices:
 *   - Update minPrice if current price is smaller
 *   - Calculate profit = current price - minPrice
 *   - Update maxProfit if profit is greater than current maxProfit
 * - Return maxProfit
 *
 * Time Complexity: O(n) — single pass through the array
 * Space Complexity: O(1) — only two variables used
 */

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
