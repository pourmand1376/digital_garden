---
title: A modern, maintained replacement for ls, written in rust
source: https://eza.rocks/
author:
published:
created: 2026-06-07 13:13:59
description: A modern, maintained replacement for ls, written in rust
tags:
  - clippings
  - 
shamsi: 1405-03-17 13:13:59
calendar: "[[2026-06-07]]"
aliases:
  - exa terminal
publish: true
---
How to install in mac:
```bash
brew install eza
```

Then Configure it:
```bash
cat >> ~/.zshrc <<'EOF'

# eza: better ls
alias ls='eza --group-directories-first'
alias ll='eza -lh --git --group-directories-first'
alias la='eza -lah --git --group-directories-first'
alias lt='eza --tree --level=2 --group-directories-first'
EOF
```

[github](سایت%20گیت‌هاب%20-%20Github.md)
[mac](Index%20MacOS.md)
[Softwares I install](Softwares%20I%20install.md)
[terminal](Index%20Terminal.md)
