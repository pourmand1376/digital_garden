---
created: 2025-12-05 00:33:15
shamsi: 1404-09-14 00:33:15
calendar: "[[2025-12-05]]"
tags:
aliases:
title: Git Linux Windows FileMode
publish: true
---

Sometimes we have problems when integrating windows and linux FileEndings. We can solve it by ignorance. 

```bash
git config --global core.filemode false
git config --unset core.filemode
```

My guess is I should only run this on windows! not on linux. 

Maybe this time I should test for global support
```
git config --global core.filemode false
git config --global --unset core.filemode
```

[git](Index%20Git.md)
[windows](Index%20Windows.md)
[linux](Index%20Linux.md)
