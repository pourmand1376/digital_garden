---
created: 2026-02-19 01:50:53
shamsi: 1404-11-30 01:50:53
calendar: "[[2026-02-19]]"
tags:
aliases:
title: Daily Weekly Monthly Quarterly Yearly Notes Template in Templater
publish: true
---
This is my daily Notes template inside templater:

### Daily

```yaml
---
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
day: <% tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD") %>
shamsi: <% tp.user.getShamsiDate(tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")) %>
week: <% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>
month: <% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>
quarter: <% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
  - journaling
aliases:
  - <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
mood:
---

مرتبط‌ها: [[ Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %> | برنامه این هفته ]] - [[ Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %> | برنامه این ماه ]] - [[ Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %> | برنامه این فصل ]] - [[ Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %> | برنامه امسال ]]

دیروز و فردا - [[ Journaling/DailyNotes/<% tp.date.now("YYYY-MM", -1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %> | دیروز ]] - [[ Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> | فردا ]]

```

### Weekly

We start our week on Saturday not Monday. 

```yaml
---
<%* const first_day = moment(tp.file.title, 'YYYY-[W]ww').startOf('week').format('YYYY-MM-DD');
const date = first_day;
const last_day = moment(tp.file.title, 'YYYY-[W]ww').endOf('week').format('YYYY-MM-DD');
%>
First Day of Week: <% first_day %> 
Last Day of Week: <% last_day %> 
month: <% tp.date.now("YYYY-MM", 0, first_day, "YYYY-MM-DD") %>
quarter: <% tp.date.now("YYYY-[Q]Q", 0, first_day, "YYYY-MM-DD") %>
year: <% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>
tags:
  - journaling
---

[[ Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, date, "YYYY-MM-DD") %> | برنامه این ماه ]] - [[ Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, date, "YYYY-MM-DD") %> | برنامه این فصل ]] - [[ Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, date, "YYYY-MM-DD") %> | برنامه امسال ]]

روزهای این هفته
[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", -1, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", -1, first_day, "YYYY-MM-DD") %> | شنبه ]] - [[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 0, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 0, first_day, "YYYY-MM-DD") %> | یکشنبه ]] - [[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 1, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 1, first_day, "YYYY-MM-DD") %> | دوشنبه ]] - [[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 2, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 2, first_day, "YYYY-MM-DD") %> | سه‌شنبه ]] - [[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 3, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 3, first_day, "YYYY-MM-DD") %> | چهارشنبه ]] - [[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 4, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 4, first_day, "YYYY-MM-DD") %> | پنج‌شنبه ]] - [[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 5, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 5, first_day, "YYYY-MM-DD") %> | جمعه ]]


### اهداف اصلی این هفته


#### گزارش هفتگی


```

### Monthly

```yaml
---
month: <% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>
quarter: <% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
  - journaling
---

[[ Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %> | برنامه این فصل ]] - [[ Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %> | برنامه امسال ]]

هفته‌های این ماه
[[ Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %> | هفته اول ]] - [[ Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 7, tp.file.title, "YYYY-MM-DD") %> | هفته دوم ]] - [[ Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 14, tp.file.title, "YYYY-MM-DD") %> | هفته سوم ]] - [[ Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 21, tp.file.title, "YYYY-MM-DD") %> | هفته چهارم ]]

#### این‌ ماه چه کارهایی قرار بکنم؟


#### این ماه چه کارهایی کردم؟


#### از چه چیزهایی راضی بودم؟


#### چه کارهایی رو میشد بهتر انجام داد؟


```

### Quarterly

```yaml
---
<%* const date = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter');
const next_month = date.add(1,'months').format('YYYY-MM-DD');
const last_day = moment(tp.file.title, 'YYYY-[Q]Q').endOf('quarter').format('YYYY-MM-DD');
const first_day =  moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM-DD');
%>
First Day of Quarter: <% first_day %>
Last Day of Quarter: <% last_day %> 
tags:
  - journaling
---

[[ Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %> | برنامه امسال ]]

ماه‌های این فصل
[[ Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, first_day, "YYYY-MM-DD") %> | ماه اول ]] - [[ Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, next_month, "YYYY-MM-DD") %> | ماه دوم ]] - [[ Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, last_day, "YYYY-MM-DD") %> | ماه سوم ]] 


#### این‌ فصل چه کارهایی قرار بکنم؟


#### این فصل چه کارهایی کردم؟


```


### Yearly

```yaml
---
year: <% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
  - journaling
---

#### امسال چه کارهایی قرار بکنم؟


#### امسال چه کارهایی کردم؟

```

I would also enable folder templates so that all files in each folder have the template I say. 

```yaml
Journaling/DailyNotes: DailyNoteTemplate
Journaling/WeeklyNotes: WeeklyNoteTemplate
...
```

[Templater: A template plugin for obsidian](Templater%20A%20template%20plugin%20for%20obsidian.md)
[obsidian](Index%20-%20Obsidian.md)
