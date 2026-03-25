# Container With Most Water

## Problem Description

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

**Return** the maximum area of water the container can store.

**Note:** You may not slant the container.

## Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Example

**Input:** `height = [1,8,6,2,5,4,8,3,7]`

**Output:** `49`

**Explanation:** The vertical lines are at indices 0 and 1. The area formed is `min(1, 8) * (1 - 0) = 1 * 1 = 1`. The area between indices 1 and 8 is `min(8, 7) * (8 - 1) = 7 * 7 = 49`.
