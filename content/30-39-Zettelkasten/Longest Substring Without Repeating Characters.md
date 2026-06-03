---
title: Longest Substring Without Repeating Characters
source: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:31:38
description: 'Can you solve this real interview question? Longest Substring Without Repeating Characters - Given a string s, find the length of the longest substring without duplicate characters. Example 1:Input: s = "abcabcbb"Output: 3Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.Example 2:Input: s = "bbbbb"Output: 1Explanation: The answer is "b", with the length of 1.Example 3:Input: s = "pwwkew"Output: 3Explanation: The answer is "wke", with the length of 3.Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. Constraints: * 0 <= s.length <= 5 * 104 * s consists of English letters, digits, symbols and spaces.'
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:31:38
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given a string `s`, find the length of the **longest** **substring** without duplicate characters.

**Example 1:**

**Input:** s = "abcabcbb"
**Output:** 3
**Explanation:** The answer is "abc", with the length of 3. Note that `"bca"` and `"cab"` are also correct answers.

**Example 2:**

**Input:** s = "bbbbb"
**Output:** 1
**Explanation:** The answer is "b", with the length of 1.

**Example 3:**

**Input:** s = "pwwkew"
**Output:** 3
**Explanation:** The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

**Constraints:**

- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols and spaces.

## My Answer

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        substring = dict() # char, last_appearance_index
        length = 0

        max_length = 0
        best_solution_set = None

        index = 0
        while index < len(s):
            if s[index] not in substring:
                substring[s[index]] = index
                length += 1
            else:
                if length > max_length:
                    best_solution_set = substring
                    max_length = length
                
                index = substring[s[index]]+1 # change to index last repeated character
                if index >= len(s):
                    break
                substring = {s[index]:index}
                length = 1
            
            if length > max_length:
                    best_solution_set = substring
                    max_length = length

            index = index + 1

        print(best_solution_set)
        return max_length
```
[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)

