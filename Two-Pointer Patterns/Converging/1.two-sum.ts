/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const element = target - nums[i];
    if (seen.has(element)) {
      return [seen.get(element)!, i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
// @lc code=end
