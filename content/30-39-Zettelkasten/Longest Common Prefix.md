---
title: Longest Common Prefix
source: https://leetcode.com/problems/longest-common-prefix/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:35:34
description: 'Can you solve this real interview question? Longest Common Prefix - Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "". Example 1:Input: strs = ["flower","flow","flight"]Output: "fl"Example 2:Input: strs = ["dog","racecar","car"]Output: ""Explanation: There is no common prefix among the input strings. Constraints: * 1 <= strs.length <= 200 * 0 <= strs[i].length <= 200 * strs[i] consists of only lowercase English letters if it is non-empty.'
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:35:34
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

**Input:** strs = ["flower","flow","flight"]
**Output:** "fl"

**Example 2:**

**Input:** strs = ["dog","racecar","car"]
**Output:** ""
**Explanation:** There is no common prefix among the input strings.

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

### My Answer

```python
from typing import List
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        common = ''
        for char in strs[0]:
            for word in strs:
                if not word.startswith(common+char):
                    return common
            common+= char
        return common
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
