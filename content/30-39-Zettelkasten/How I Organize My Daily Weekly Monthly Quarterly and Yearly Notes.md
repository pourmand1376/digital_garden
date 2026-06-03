---
created: 2026-02-19 01:32:32
shamsi: 1404-11-30 01:32:32
calendar: "[[2026-02-19]]"
tags:
aliases:
title: How I Organize My Daily Weekly Monthly Quarterly and Yearly Notes
publish: true
---
Previously, I used periodic notes and natural language dates in combination with some other plugins.  

[GitHub - liamcain/obsidian-periodic-notes: Create/manage your daily, weekly, and monthly notes in Obsidian](https://github.com/liamcain/obsidian-periodic-notes)

But now I use a simpler approach. I now use plugins for this matter. 

### Daily Note core plugin
```yaml
Date Format: Custom
Custom File Name: YYYY-MM/YYYY-MM-DD
New File Location: Journaling/DailyNotes
```

[Daily notes - Obsidian Help](https://help.obsidian.md/plugins/daily-notes)
### Templater
I have also enabled folder templates for files that are created inside folders. All files inside weekly notes should have weekly template. daily and monthly and etc is the same logic.  

[Templater: A template plugin for obsidian](Templater%20A%20template%20plugin%20for%20obsidian.md)
### Get Shamsi Date
I have also added a script `get_shamsi_date` so that I have shamsi date in all my daily notes as well. So, I will have two dates per note. The main one is Gregorian and the secondary is Shamsi. 

[[Add Shamsi Date to Obsidian]]
### NoteBook Navigator
This is also my notebook navigator config. 

```yaml
Daily Notes: [DailyNotes]/YYYY-MM/YYYY-MM-DD
Weekly Notes: [WeeklyNotes]/gggg-[W]ww
Monthly Notes: [MonthlyNotes]/YYYY-MM
Quarterly Notes: [QuarterlyNotes]/YYYY-[Q]Q
Yearly Notes: [YearlyNotes]/YYYY
```

[obsidian](Index%20-%20Obsidian.md)
[Obsidian Plugins](Obsidian%20Plugins.md)
