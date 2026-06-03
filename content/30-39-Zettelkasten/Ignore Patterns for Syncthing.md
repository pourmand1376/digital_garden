---
created: 2026-05-13 17:38:26
shamsi: 1405-02-23 17:38:26
calendar: "[[2026-05-13]]"
tags:
aliases:
title: Ignore Patterns for Syncthing
publish: true
---
[syncthing syncthing-macos Official frugal and native macOS Syncthing application bundle](syncthing%20syncthing-macos%20Official%20frugal%20and%20native%20macOS%20Syncthing%20application%20bundle.md)
[obsidian](Index%20-%20Obsidian.md)


Unfortunately, this file is not synced between clients. So you have to configure it from each device manually. 

For Obsidian, put this in `.stignore` or ignored patterns file. 
```
(?d).git
.gitignore
.gitattributes
.smart-env

.trash/
.obsidian/workspace
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/app.json.trash/
.obsidian/workspace
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.trash/
.DS_Store
```

General syncthing ignore pattern:
```
.trash/
.DS_Store
```

[syncthing syncthing-macos Official frugal and native macOS Syncthing application bundle](syncthing%20syncthing-macos%20Official%20frugal%20and%20native%20macOS%20Syncthing%20application%20bundle.md)
[Index MacOS](Index%20MacOS.md)
[Softwares I install](Softwares%20I%20install.md)
