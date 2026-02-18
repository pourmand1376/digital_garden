---
title: Valid Parentheses
source: https://leetcode.com/problems/valid-parentheses/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:40:08
description: "Can you solve this real interview question? Valid Parentheses - Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.An input string is valid if: 1. Open brackets must be closed by the same type of brackets. 2. Open brackets must be closed in the correct order. 3. Every close bracket has a corresponding open bracket of the same type. Example 1:Input: s = \"()\"Output: trueExample 2:Input: s = \"()[]{}\"Output: trueExample 3:Input: s = \"(]\"Output: falseExample 4:Input: s = \"([])\"Output: trueExample 5:Input: s = \"([)]\"Output: false Constraints: * 1 <= s.length <= 104 * s consists of parentheses only '()[]{}'."
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:40:08
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**
**Input:** s = "()"
**Output:** true

**Example 2:**
**Input:** s = "()[]{}"
**Output:** true

**Example 3:**
**Input:** s = "(]"
**Output:** false

**Example 4:**
**Input:** s = "([])"
**Output:** true

**Example 5:**
**Input:** s = "([)]"
**Output:** false

**Constraints:**
- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.

### My Answer

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        parentheses = {'[':']', '(':')', '{':'}'}
        for item in s:
            if item in parentheses:
                stack.append(item)
            elif item in parentheses.values():
                if len(stack) == 0:
                    return False
                value=stack.pop()
                if parentheses[value] != item:
                    return False
        return stack == []
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)

