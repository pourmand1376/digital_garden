---
title: Jump Game
source: https://leetcode.com/problems/jump-game/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:29:48
description: "Can you solve this real interview question? Jump Game - You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.Return true if you can reach the last index, or false otherwise. Example 1:Input: nums = [2,3,1,1,4]Output: trueExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.Example 2:Input: nums = [3,2,1,0,4]Output: falseExplanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. Constraints: * 1 <= nums.length <= 104 * 0 <= nums[i] <= 105"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:29:48
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` _if you can reach the last index, or_ `false` _otherwise_.

**Example 1:**

**Input:** nums = [2,3,1,1,4]
**Output:** true
**Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.

**Example 2:**

**Input:** nums = [3,2,1,0,4]
**Output:** false
**Explanation:** You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

**Constraints:**

- `1 <= nums.length <= 104`
- `0 <= nums[i] <= 105`
## My Answer

```python
# https://leetcode.com/problems/jump-game/
from typing import List
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        jump_array = [False]*len(nums)
        jump_array[0] = True
        for i in range(1,len(nums)):
            for k in range(1,i+1):
                if jump_array[i-k] and nums[i-k]>=k:
                    jump_array[i] = True
                    break

        return jump_array[len(nums)-1]
    
print(Solution().canJump([2,3,1,1,4]))
print(Solution().canJump([3,2,1,0,4]))
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
