---
created: 2024-10-28 11:09:00
shamsi: 1403-08-07
tags:
aliases:
publish: true
title: See how much disk space we have in each folder - Disk Usage - Linux
---
To see how much disk space we have in each folder

```bash
du -h --max-depth=1
```

```bash
du -h --max-depth=1 | sort -hr
```

```
du -sh ./*
```

```
sudo apt install ncdu
ncdu
```
	
[terminal](Index%20Terminal.md)
[Delete Unused or Extra Docker containers](Delete%20Unused%20or%20Extra%20Docker%20containers.md)
[linux](Index%20Linux.md)
