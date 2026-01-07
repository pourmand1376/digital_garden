---
created: 2026-01-06 21:27:32
shamsi: 1404-10-16 21:27:32
calendar: "[[2026-01-06]]"
tags:
aliases:
title: Disable obsidian plugins only on mobile
publish: true
---
[obsidian](Index%20-%20Obsidian.md)

https://forum.obsidian.md/t/save-settings-for-which-plugins-are-enabled-for-mobile-and-desktop-separately/36740

This explains how you can disable a plugin only on mobile. 
What you do is to simply update the plugin manifest.json file and set `is desktop only` to true. 

This is the best solution so far. You just have to take care while updating the plugins. 
I can also write a simple script to execute after each update of plugins to disable them again. It would be simple bash script. 

```bash
#!/bin/bash
PLUGINS_TO_DISABLE=(
"obsidian-excalidraw-plugin"
"obsidian-advanced-uri"
"obsidian-git"
"obsidian-advanced-uri"
"smart-connections"
)
for plugin in "${PLUGINS_TO_DISABLE[@]}"; do
manifest="plugins/$plugin/manifest.json"
[ -f "$manifest" ] && sed -i '' 's/"isDesktopOnly": false/"isDesktopOnly": true/' "$manifest"
done
echo "Done"
```
