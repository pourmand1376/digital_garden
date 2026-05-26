---
created: 2026-03-29 12:19:47
shamsi: 1405-01-09 12:19:47
calendar: "[[2026-03-29]]"
tags:
aliases:
title: rebase and squash as natural partnerz
publish: true
---
Gemini said

If you’ve decided to use **squash commits**, you are likely prioritizing a clean, linear project history. While you can technically do both, **rebase** is the natural partner for squashing, whereas **merge** often defeats the purpose of squashing in the first place.

When you `git rebase master`, Git takes your commits, sets them aside, pulls in the new changes from `master`, and then "replays" your commits on top.

- **The Result:** Your branch looks like it started _after_ the latest work on `master`.
- **Why it helps squashing:** When it’s time to squash, all your commits are neatly stacked together at the very end of the timeline. There are no "interruptions" from other people's work.



[git](Index%20Git.md)