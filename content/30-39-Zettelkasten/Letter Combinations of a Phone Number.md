---
title: Letter Combinations of a Phone Number
source: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:36:44
description: "Can you solve this real interview question? Letter Combinations of a Phone Number - Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.[https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png] Example 1:Input: digits = \"23\"Output: [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]Example 2:Input: digits = \"2\"Output: [\"a\",\"b\",\"c\"] Constraints: * 1 <= digits.length <= 4 * digits[i] is a digit in the range ['2', '9']."
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:36:44
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

**Example 1:**

**Input:** digits = "23"
**Output:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]

**Example 2:**

**Input:** digits = "2"
**Output:** ["a","b","c"]

**Constraints:**

- `1 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

### My Answers

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        self.phone_dict = {
            '2': ['a','b','c'],
            '3': ['d','e','f'],
            '4': ['g','h','i'],
            '5': ['j','k','l'],
            '6': ['m','n','o'],
            '7': ['p','q','r','s'],
            '8': ['t','u','v'],
            '9': ['w','x','y','z'],
        }
        return self.multiply(digits, "")

    
    def multiply(self, remaining_digits: str, to_now: str) -> List[str]:
        if len(remaining_digits) == 0:
            return [to_now] if len(to_now) > 0 else []

        results = []
        for value in self.phone_dict[remaining_digits[0]]:
            results.extend(self.multiply(remaining_digits[1:], to_now+value))
                    
        return results
```
[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
