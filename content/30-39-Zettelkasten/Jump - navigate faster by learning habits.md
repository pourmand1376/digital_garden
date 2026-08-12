---
title: "gsamokovarov/jump: Jump helps you navigate faster by learning your habits. ✌️"
source: https://github.com/gsamokovarov/jump
author:
published:
created: 2026-06-07 00:10:09
description: Jump helps you navigate faster by learning your habits. ✌️ - gsamokovarov/jump
tags:
  - clippings
  - 
shamsi: 1405-03-17 00:10:09
calendar: "[[2026-06-07]]"
aliases:
publish: true
---
[github](سایت%20گیت‌هاب%20-%20Github.md)
[mac](Index%20MacOS.md)
[Softwares I install](Softwares%20I%20install.md)

My Setup for mac:
```bash
brew install jump
eval "$(jump shell)"
eval "$(jump shell --bind=cd)"
```

Adding to end of `.zshrc` (if it is not there):
```bash
LINE='eval "$(jump shell)"'  
  
if ! grep -qF "$LINE" ~/.zshrc; then  
echo "$LINE" >> ~/.zshrc  
fi  

LINE='eval "$(jump shell --bind=cd)"'  
  
if ! grep -qF "$LINE" ~/.zshrc; then  
echo "$LINE" >> ~/.zshrc  
fi
```

or Maybe:
```bash
echo 'eval "$(jump shell)"' >> ~/.zshrc
echo 'eval "$(jump shell --bind=cd)"' >> ~/.zshrc
```









