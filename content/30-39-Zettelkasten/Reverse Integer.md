---
title: Reverse Integer
source: https://leetcode.com/problems/reverse-integer/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:32:31
description: "Can you solve this real interview question? Reverse Integer - Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.Assume the environment does not allow you to store 64-bit integers (signed or unsigned). Example 1:Input: x = 123Output: 321Example 2:Input: x = -123Output: -321Example 3:Input: x = 120Output: 21 Constraints: * -231 <= x <= 231 - 1"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:32:31
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given a signed 32-bit integer `x`, return `x` _with its digits reversed_. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

**Example 1:**

**Input:** x = 123
**Output:** 321

**Example 2:**

**Input:** x = -123
**Output:** -321

**Example 3:**

**Input:** x = 120
**Output:** 21

**Constraints:**

- `-231 <= x <= 231 - 1`

### My Answer

```python
class Solution:
    def reverse(self, x: int) -> int:
        negative = 1 if abs(x) == x else -1
        result = negative * int(str(abs(x))[::-1])
        if abs(result) > 2**31 or result< -2**31-1:
            return 0
        return result 
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)

