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
week: "[[Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]"
month: "[[Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]"
quarter: "[[Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>]]"
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>]]"
yesterday: "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", -1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]"
tomorrow: "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]"
tags:
- journaling
aliases:
- <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
mood:
---
```

### Weekly

We start our week on Saturday not Monday. 

```yaml
---
<%* const first_day = moment(tp.file.title, 'YYYY-[W]ww').startOf('week').format('YYYY-MM-DD');
const date = first_day;
const last_day = moment(tp.file.title, 'YYYY-[W]ww').endOf('week').format('YYYY-MM-DD');
const prev_week = moment(tp.file.title, 'YYYY-[W]ww').subtract(1, 'week').format('YYYY-[W]ww');
const next_week = moment(tp.file.title, 'YYYY-[W]ww').add(1, 'week').format('YYYY-[W]ww');
%>
first_day: <% first_day %>
last_day: <% last_day %>
month: "[[Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, first_day, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM", 0, first_day, "YYYY-MM-DD") %>]]"
quarter: "[[Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, first_day, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[Q]Q", 0, first_day, "YYYY-MM-DD") %>]]"
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>|<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>]]"
prev_week: "[[Journaling/WeeklyNotes/<% prev_week %>|<% prev_week %>]]"
next_week: "[[Journaling/WeeklyNotes/<% next_week %>|<% next_week %>]]"
days:
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", -1, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", -1, first_day, "YYYY-MM-DD") %>|شنبه]]"
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 0, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 0, first_day, "YYYY-MM-DD") %>|یکشنبه]]"
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 1, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 1, first_day, "YYYY-MM-DD") %>|دوشنبه]]"
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 2, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 2, first_day, "YYYY-MM-DD") %>|سه‌شنبه]]"
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 3, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 3, first_day, "YYYY-MM-DD") %>|چهارشنبه]]"
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 4, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 4, first_day, "YYYY-MM-DD") %>|پنج‌شنبه]]"
- "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 5, first_day, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 5, first_day, "YYYY-MM-DD") %>|جمعه]]"
tags:
- journaling
---

### اهداف اصلی این هفته


#### گزارش هفتگی

```

### Monthly

```yaml
---
<%*
const prev_month = moment(tp.file.title, 'YYYY-MM').subtract(1, 'month').format('YYYY-MM');
const next_month = moment(tp.file.title, 'YYYY-MM').add(1, 'month').format('YYYY-MM');
%>
quarter: "[[Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>]]"
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM") %>]]"
prev_month: "[[Journaling/MonthlyNotes/<% prev_month %>|<% prev_month %>]]"
next_month: "[[Journaling/MonthlyNotes/<% next_month %>|<% next_month %>]]"
weeks:
- "[[Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM") %>]]"
- "[[Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 7, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[W]ww", 7, tp.file.title, "YYYY-MM") %>]]"
- "[[Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 14, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[W]ww", 14, tp.file.title, "YYYY-MM") %>]]"
- "[[Journaling/WeeklyNotes/<% tp.date.now("YYYY-[W]ww", 21, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[W]ww", 21, tp.file.title, "YYYY-MM") %>]]"
tags:
- journaling
---


#### این‌ ماه چه کارهایی قرار بکنم؟

  
#### این ماه چه کارهایی کردم؟

  
#### از چه چیزهایی راضی بودم؟


#### چه کارهایی رو میشد بهتر انجام داد؟

```

### Quarterly

```yaml
---
<%*
const first_day = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM-DD');
const last_day = moment(tp.file.title, 'YYYY-[Q]Q').endOf('quarter').format('YYYY-MM-DD');
const month1 = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM');
const month2 = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').add(1, 'month').format('YYYY-MM');
const month3 = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').add(2, 'month').format('YYYY-MM');
const prev_quarter = moment(tp.file.title, 'YYYY-[Q]Q').subtract(1, 'quarter').format('YYYY-[Q]Q');
const next_quarter = moment(tp.file.title, 'YYYY-[Q]Q').add(1, 'quarter').format('YYYY-[Q]Q');
%>
first_day: <% first_day %>
last_day: <% last_day %>
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>|<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>]]"
prev_quarter: "[[Journaling/QuarterlyNotes/<% prev_quarter %>|<% prev_quarter %>]]"
next_quarter: "[[Journaling/QuarterlyNotes/<% next_quarter %>|<% next_quarter %>]]"
months:
- "[[Journaling/MonthlyNotes/<% month1 %>|<% month1 %>]]"
- "[[Journaling/MonthlyNotes/<% month2 %>|<% month2 %>]]"
- "[[Journaling/MonthlyNotes/<% month3 %>|<% month3 %>]]"
tags:
- journaling
---


#### این‌ فصل چه کارهایی قرار بکنم؟


#### این فصل چه کارهایی کردم؟

```


### Yearly

```yaml
---
<%*
const prev_year = moment(tp.file.title, 'YYYY').subtract(1, 'year').format('YYYY');
const next_year = moment(tp.file.title, 'YYYY').add(1, 'year').format('YYYY');
const year = moment(tp.file.title, 'YYYY').format('YYYY');
%>
prev_year: "[[Journaling/YearlyNotes/<% prev_year %>|<% prev_year %>]]"
next_year: "[[Journaling/YearlyNotes/<% next_year %>|<% next_year %>]]"
quarters:
- "[[Journaling/QuarterlyNotes/<% year %>-Q1|<% year %>-Q1]]"
- "[[Journaling/QuarterlyNotes/<% year %>-Q2|<% year %>-Q2]]"
- "[[Journaling/QuarterlyNotes/<% year %>-Q3|<% year %>-Q3]]"
- "[[Journaling/QuarterlyNotes/<% year %>-Q4|<% year %>-Q4]]"
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
# do this for others as well
```

[Templater: A template plugin for obsidian](Templater%20A%20template%20plugin%20for%20obsidian.md)
[obsidian](Index%20-%20Obsidian.md)
