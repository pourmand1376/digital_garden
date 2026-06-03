---
title: Palindrome Number
source: https://leetcode.com/problems/palindrome-number/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:40:48
description: "Can you solve this real interview question? Palindrome Number - Given an integer x, return true if x is a palindrome, and false otherwise. Example 1:Input: x = 121Output: trueExplanation: 121 reads as 121 from left to right and from right to left.Example 2:Input: x = -121Output: falseExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.Example 3:Input: x = 10Output: falseExplanation: Reads 01 from right to left. Therefore it is not a palindrome. Constraints: * -231 <= x <= 231 - 1 Follow up: Could you solve it without converting the integer to a string?"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:40:48
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given an integer `x`, return `true` _if_ `x` _is a_ _**palindrome**__, and_ `false` _otherwise_.

**Example 1:**

**Input:** x = 121
**Output:** true
**Explanation:** 121 reads as 121 from left to right and from right to left.

**Example 2:**

**Input:** x = -121
**Output:** false
**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

**Example 3:**

**Input:** x = 10
**Output:** false
**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.

**Constraints:**

- `-231 <= x <= 231 - 1`


### My Answer
```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        value = str(x)
        length = len(value)
        for i,item in enumerate(value):
            if item != value[length-i-1]:
                return False
        return True
```
[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)

