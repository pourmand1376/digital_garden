---
title: Contains Duplicate
source: https://leetcode.com/problems/contains-duplicate/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:34:44
description: "Can you solve this real interview question? Contains Duplicate - Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. Example 1:Input: nums = [1,2,3,1]Output: trueExplanation:The element 1 occurs at the indices 0 and 3.Example 2:Input: nums = [1,2,3,4]Output: falseExplanation:All elements are distinct.Example 3:Input: nums = [1,1,1,3,3,4,3,2,4,2]Output: true Constraints: * 1 <= nums.length <= 105 * -109 <= nums[i] <= 109"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:34:44
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

**Input:** nums = [1,2,3,1]

**Output:** true

**Explanation:**

The element 1 occurs at the indices 0 and 3.

**Example 2:**

**Input:** nums = [1,2,3,4]

**Output:** false

**Explanation:**

All elements are distinct.

**Example 3:**

**Input:** nums = [1,1,1,3,3,4,3,2,4,2]

**Output:** true

**Constraints:**

- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

### My Answer

```python
# https://leetcode.com/problems/contains-duplicate/
from typing import List
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        visited = set()
        for item in nums:
            if item in visited:
                return True
            visited.add(item)
        return False
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
