---
created: 2025-12-05 00:33:15
shamsi: 1404-09-14 00:33:15
calendar: "[[2025-12-05]]"
tags:
aliases:
title: Fix Corrupted Windows Install
publish: true
---

Fix Corrupted Windows Install

This uses DISM command to restore. 

https://christitus.com/fix-corrupt-windows-install/

[5 commands that could SAVE your computer! - YouTube](https://www.youtube.com/watch?v=ti36VnKXxEs)
1. Windows Memory Diagnostic Check
2. Chkdsk (Fix or Repair)
	Fix should be done first. Only use repair if you have a lot of problems. Fix takes a look at filesystem to see actually files that filesystem think they exist, actually exist. 
```
chkdsk /f
```

Repair takes a look at files. Reads all the files to see if they are in good state. 
```
chkdsk /r
```

3. SFC (System File Checker)
```
sfc /scannow
```
Chris says that it doesn't do anything useful.

4. Deployment Imaging and service management
This actually works very good. 

```
dism /Online /CleanUp-image /RestoreHealth
```

Last Solution would be to do a complete restart. 
I should explain why shutdown in not enough. 

[windows](Index%20Windows.md)
[[People - Chris Titus Tech]]
