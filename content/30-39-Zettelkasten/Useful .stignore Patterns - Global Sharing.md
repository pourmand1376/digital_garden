---
title: Useful .stignore Patterns
source: https://forum.syncthing.net/t/useful-stignore-patterns/1175
author:
  - "[[Cyphase]]"
published: 2014-10-17
created: 2026-06-05 12:05:30
description: I didn’t see any other post listing useful .stignore patterns, so I thought I’d create one. Obviously everyone’s needs are different, but I’
tags:
  - clippings
  - 
shamsi: 1405-03-15 12:05:30
calendar: "[[2026-06-05]]"
aliases:
publish: true
---
[syncthing-macos - native macOS Syncthing bundle](syncthing-macos%20-%20native%20macOS%20Syncthing%20bundle.md)

This is a very good way to sync ignore patterns between devices. Just create a file called `.stglobalignore` in your directories. It will be synced easily between devices. 

Then on each platform just do:
```
#include .stglobalignore
```

To ignore all files you don't need. 