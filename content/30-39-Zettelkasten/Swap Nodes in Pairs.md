---
title: Swap Nodes in Pairs
source: https://leetcode.com/problems/swap-nodes-in-pairs/description/
author:
  - "[[LeetCode]]"
published:
created: 2026-02-18 14:36:07
description: "Can you solve this real interview question? Swap Nodes in Pairs - Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.) Example 1:Input: head = [1,2,3,4]Output: [2,1,4,3]Explanation:[https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg]Example 2:Input: head = []Output: []Example 3:Input: head = [1]Output: [1]Example 4:Input: head = [1,2,3]Output: [2,1,3] Constraints: * The number of nodes in the list is in the range [0, 100]. * 0 <= Node.val <= 100"
tags:
  - clippings
  - 
shamsi: 1404-11-29 14:36:07
calendar: "[[2026-02-18]]"
aliases:
publish: true
---
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

**Example 1:**

**Input:** head = [1,2,3,4]

**Output:** [2,1,4,3]

**Explanation:**

![](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

**Example 2:**

**Input:** head = []

**Output:** []

**Example 3:**

**Input:** head = [1]

**Output:** [1]

**Example 4:**

**Input:** head = [1,2,3]

**Output:** [2,1,3]

**Constraints:**

- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`

### My Answer

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __str__(self):
        item = [self.val]
        while self.next is not None:
            self = self.next
            item.append(self.val)
        return str(item)

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head

        dummyNode = ListNode()
        previous_node = dummyNode
        curent_node = head
        while curent_node and curent_node.next:
            previous_node.next = curent_node.next
            curent_node.next = previous_node.next.next
            previous_node.next.next = curent_node

            previous_node = curent_node
            curent_node = curent_node.next

        return dummyNode.next
```

[LeetCode - The World's Leading Programming Learning Platform](LeetCode%20-%20The%20Worlds%20Leading%20Programming%20Learning%20Platform.md)
[technical interview](Index%20-%20Technical%20Interview.md)
