---
created: 2026-06-18 10:35:00
shamsi: 1405-03-28 10:35:00
calendar: "[[2026-06-18]]"
tags:
aliases:
title: Git Push Force with Lease
publish: true
---
Always use git push with the option of `--force-with-lease`.

This makes sure that you don't overwrite someone else commit by accident. Git push force would just rewrite any history with no checks. 

With Lease is safer to do since it doesn't allow rewrite when somebody else has pushes a commit. 

[git](Index%20Git.md)
[Rebase in Pull Requests](Rebase%20in%20Pull%20Requests.md)
[Rebase Onto](Rebase%20Onto.md)
[Create Merge Request Procedure](Create%20Merge%20Request%20Procedure.md)
