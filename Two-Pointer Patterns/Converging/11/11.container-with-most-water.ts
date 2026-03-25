/*
 * @lc app=leetcode id=11 lang=typescript
 *
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left: number = 0;
  let right: number = height.length - 1;
  let maxArea: number = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;

    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
// @lc code=end
