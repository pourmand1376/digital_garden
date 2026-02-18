---
title: Combination Sum
source: https://leetcode.com/problems/combination-sum/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:37:23
description: "Can you solve this real interview question? Combination Sum - Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input. Example 1:Input: candidates = [2,3,6,7], target = 7Output: [[2,2,3],[7]]Explanation:2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.7 is a candidate, and 7 = 7.These are the only two combinations.Example 2:Input: candidates = [2,3,5], target = 8Output: [[2,2,2,2],[2,3,3],[3,5]]Example 3:Input: candidates = [2], target = 1Output: [] Constraints: * 1 <= candidates.length <= 30 * 2 <= candidates[i] <= 40 * All elements of candidates are distinct. * 1 <= target <= 40"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:37:23
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all **unique combinations** of_ `candidates` _where the chosen numbers sum to_ `target`_._ You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

**Example 1:**

**Input:** candidates = [2,3,6,7], target = 7
**Output:** [[2,2,3],[7]]
**Explanation:**
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

**Example 2:**

**Input:** candidates = [2,3,5], target = 8
**Output:** [[2,2,2,2],[2,3,3],[3,5]]

**Example 3:**

**Input:** candidates = [2], target = 1
**Output:** []

**Constraints:**

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are **distinct**.
- `1 <= target <= 40`


### My Answer

```python
# https://leetcode.com/problems/combination-sum/
from typing import List
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
       candidates = sorted(candidates)
       self.results = []
       self.sum_dfs(candidates, target, [])
       return self.results

    def sum_dfs(self, candidates: List[int], target: int, used_items: List[int]) -> List[List[int]]:
        if target < 0:
            return 
        if target == 0:
            return used_items
        
        for item in candidates:
            if len(used_items)>0 and used_items[-1] > item:
                continue
            result=self.sum_dfs(candidates, target - item, used_items + [item])
            if result:
                self.results.append(result)
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)


