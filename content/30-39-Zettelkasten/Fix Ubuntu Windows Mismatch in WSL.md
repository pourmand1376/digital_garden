---
created: 2026-01-27 13:52:54
shamsi: 1404-11-07 13:52:54
calendar: "[[2026-01-27]]"
tags:
aliases:
title: Fix Ubuntu Windows Mismatch in WSL
publish: true
---
[terminal](Index%20Terminal.md)
[git](Index%20Git.md)
[My Custom Bash Scripts](My%20Custom%20Bash%20Scripts.md)

These two lines of code fix whenever there is a mismatch between ubuntu and windows git status. 

```bash
git config core.autocrlf true
git config core.filemode false
```
