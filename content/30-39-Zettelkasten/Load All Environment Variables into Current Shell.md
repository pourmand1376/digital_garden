---
created: 2026-01-27 12:30:32
shamsi: 1404-11-07 12:30:32
calendar: "[[2026-01-27]]"
tags:
aliases:
title: Load All Environment Variables into Current Shell
publish: true
---
This commands load `.env` file content into current shell. 

```bash
[ -f .env ] && { set -a; source .env; set +a; }
```

This is also what I previously used. But this doesn't support all usecases.

```bash
export $(cat .env | xargs)
```

[Python](Index%20Python.md)
[bash](Index%20-%20Bash.md)
[terminal](Index%20Terminal.md)
[My Custom Bash Scripts](My%20Custom%20Bash%20Scripts.md)

