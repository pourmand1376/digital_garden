---
title: Permutations
source: https://leetcode.com/problems/permutations/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:38:57
description: "Can you solve this real interview question? Permutations - Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. Example 1:Input: nums = [1,2,3]Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]Example 2:Input: nums = [0,1]Output: [[0,1],[1,0]]Example 3:Input: nums = [1]Output: [[1]] Constraints: * 1 <= nums.length <= 6 * -10 <= nums[i] <= 10 * All the integers of nums are unique."
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:38:57
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.

**Example 1:**
**Input:** nums = [1,2,3]
**Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

**Example 2:**
**Input:** nums = [0,1]
**Output:** [[0,1],[1,0]]

**Example 3:**
**Input:** nums = [1]
**Output:** [[1]]

**Constraints:**
- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of `nums` are **unique**.

### My Answer

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1:
            return [nums]
        permuted = []
        for index,item in enumerate(nums):
            new_list = nums[:index] + nums[index+1:]
            for permute_item in self.permute(new_list):
                permuted.append([item] + permute_item)

        return permuted
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)

