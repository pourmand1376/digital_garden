---
title: Substring with Concatenation of All Words
source: https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:38:02
description: 'Can you solve this real interview question? Substring with Concatenation of All Words - You are given a string s and an array of strings words. All the strings of words are of the same length.A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated. * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order. Example 1:Input: s = "barfoothefoobarman", words = ["foo","bar"]Output: [0,9]Explanation:The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.Example 2:Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]Output: []Explanation:There is no concatenated substring.Example 3:Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]Output: [6,9,12]Explanation:The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"]. Constraints: * 1 <= s.length <= 104 * 1 <= words.length <= 5000 * 1 <= words[i].length <= 30 * s and words[i] consist of lowercase English letters.'
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:38:02
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
You are given a string `s` and an array of strings `words`. All the strings of `words` are of **the same length**.

A **concatenated string** is a string that exactly contains all the strings of any permutation of `words` concatenated.

- For example, if `words = ["ab","cd","ef"]`, then `"abcdef"`, `"abefcd"`, `"cdabef"`, `"cdefab"`, `"efabcd"`, and `"efcdab"` are all concatenated strings. `"acdbef"` is not a concatenated string because it is not the concatenation of any permutation of `words`.

Return an array of _the starting indices_ of all the concatenated substrings in `s`. You can return the answer in **any order**.

**Example 1:**

**Input:** s = "barfoothefoobarman", words = ["foo","bar"]
**Output:** [0,9]
**Explanation:**

The substring starting at 0 is `"barfoo"`. It is the concatenation of `["bar","foo"]` which is a permutation of `words`.  
The substring starting at 9 is `"foobar"`. It is the concatenation of `["foo","bar"]` which is a permutation of `words`.

**Example 2:**
**Input:** s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"
**Output:** []

**Explanation:**
There is no concatenated substring.

**Example 3:**

**Input:** s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
**Output:** [6,9,12]
**Explanation:**

The substring starting at 6 is `"foobarthe"`. It is the concatenation of `["foo","bar","the"]`.  
The substring starting at 9 is `"barthefoo"`. It is the concatenation of `["bar","the","foo"]`.  
The substring starting at 12 is `"thefoobar"`. It is the concatenation of `["the","foo","bar"]`.

**Constraints:**
- `1 <= s.length <= 104`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `s` and `words[i]` consist of lowercase English letters.

### My Answer

```python
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        words = sorted(words)
        sort_length = len(words) * len(words[0])

        result = []
        for index, word in enumerate(s):
            substring=s[index:index+sort_length]

            if len(substring) < sort_length:
                continue
            
            comparison_array = ([substring[i*len(value):(i+1)*len(value)] 
                                 for i,value in enumerate(words)])
            if sorted(comparison_array) == words:
                result.append(index)

        return result
```
[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
