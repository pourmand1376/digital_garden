---
title: Two Sum
source: https://leetcode.com/problems/two-sum/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:41:18
description: "Can you solve this real interview question? Two Sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order. Example 1:Input: nums = [2,7,11,15], target = 9Output: [0,1]Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].Example 2:Input: nums = [3,2,4], target = 6Output: [1,2]Example 3:Input: nums = [3,3], target = 6Output: [0,1] Constraints: * 2 <= nums.length <= 104 * -109 <= nums[i] <= 109 * -109 <= target <= 109 * Only one valid answer exists. Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:41:18
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Example 1:**
**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**
**Input:** nums = [3,2,4], target = 6
**Output:** [1,2]

**Example 3:**
**Input:** nums = [3,3], target = 6
**Output:** [0,1]

**Constraints:**
- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **Only one valid answer exists.**

### My Answer
```python
class Solution:
   def twoSum(self, nums: List[int], target: int) -> List[int]:
       seen = {}
       for i, value in enumerate(nums):
           remaining = target - nums[i]
           
           if remaining in seen:
               return [i, seen[remaining]]
            
           seen[value] = i 
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
