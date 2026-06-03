---
created: 2026-04-30 23:15:47
shamsi: 1405-02-10 23:15:47
calendar: "[[2026-04-30]]"
tags:
aliases:
title: Bash brace expansion
publish: true
---
Brace expansion is a mechanism by which arbitrary strings may be generated. It occurs _before_ any other expansions and is handled by the shell itself, not the specific command (like `wget` or `cat`).

- **The Example:** `archive.{001..016}`
- **Expansion:** `archive.001 archive.002 ... archive.016`

```bash
wget download_url.archive{00..16}
```

So we can use:

```bash
cat archive.7z.{001..004} > combined.7z
```

instead of 
```bash
cat archive.7z.001 archive.7z.002 archive.7z.003 archive.7z.004 > combined.7z
```

> Note: don't use \ before { sign. It will ignore expansion and treat it as a regular character. 

I used this to shorten my commands. This is very helpful. 

[bash](Index%20-%20Bash.md)
[terminal](Index%20Terminal.md)
[Terminal CheatSheet](Terminal%20CheatSheet.md)
[My Custom Bash Scripts](My%20Custom%20Bash%20Scripts.md)
