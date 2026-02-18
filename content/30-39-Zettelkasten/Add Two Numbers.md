---
title: Add Two Numbers
source: https://leetcode.com/problems/add-two-numbers/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:39:31
description: "Can you solve this real interview question? Add Two Numbers - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself. Example 1:[https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg]Input: l1 = [2,4,3], l2 = [5,6,4]Output: [7,0,8]Explanation: 342 + 465 = 807.Example 2:Input: l1 = [0], l2 = [0]Output: [0]Example 3:Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]Output: [8,9,9,9,0,0,0,1] Constraints: * The number of nodes in each linked list is in the range [1, 100]. * 0 <= Node.val <= 9 * It is guaranteed that the list represents a number that does not have leading zeros."
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:39:31
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

**Input:** l1 = [2,4,3], l2 = [5,6,4]
**Output:** [7,0,8]
**Explanation:** 342 + 465 = 807.

**Example 2:**

**Input:** l1 = [0], l2 = [0]
**Output:** [0]

**Example 3:**

**Input:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
**Output:** [8,9,9,9,0,0,0,1]

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.


### My Answer
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result =self.convert_to_int(l1)+self.convert_to_int(l2)
        return self.convert_to_list(result)
    
    def convert_to_int(self, node: ListNode):
        result = ""
        while node is not None:
            result =  str(node.val) + result
            node = node.next
        return int(result)
    
    def convert_to_list(self, number:int):
        number = str(number)
        node = None
        for item in number: 
            node = ListNode(int(item), next=node)
        return node
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)

