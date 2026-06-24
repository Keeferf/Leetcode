/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") stack.push(")");
    else if (char === "{") stack.push("}");
    else if (char === "[") stack.push("]");
    else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// @lc code=end
