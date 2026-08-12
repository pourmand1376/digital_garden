---
created: 2026-02-19 01:50:53
shamsi: 1404-11-30 01:50:53
calendar: "[[2026-02-19]]"
tags:
aliases:
title: Daily Weekly Monthly Quarterly Yearly Notes Template in Templater
publish: true
---
At first you should add a scripts folder with two files in it as well:
- `getShamsiDate()` ([Github Gist Link](https://gist.github.com/pourmand1376/23e7d6522080b8fe5f274b45bdba1fe6))
- `SatWeek()` ([Github GIst Link](https://gist.github.com/pourmand1376/2245f7c35085cb2e9c75898b4f72cd7c))


This is my daily Notes template inside templater:
### Daily

```yaml
---
<%*
const wkLabel = tp.user.satWeek().label(tp.file.title);
%>
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
day: <% tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD") %>
shamsi: <% tp.user.getShamsiDate(tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")) %>
week: "[[Journaling/WeeklyNotes/<% wkLabel %>|<% wkLabel %>]]"
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
<%*
const sat = tp.user.satWeek();
const start = sat.startFromLabel(tp.file.title);
const end = start.clone().add(6, 'days');
const first_day = start.format('YYYY-MM-DD');
const last_day = end.format('YYYY-MM-DD');
const prev_week = sat.label(start.clone().subtract(1, 'week'));
const next_week = sat.label(start.clone().add(1, 'week'));
const labels = { 0: 'یکشنبه', 1: 'دوشنبه', 2: 'سه‌شنبه', 3: 'چهارشنبه', 4: 'پنج‌شنبه', 5: 'جمعه', 6: 'شنبه' };
const days = Array.from({length: 7}, (_, i) => start.clone().add(i, 'day'));
const majority = (vals) => Object.entries(vals.reduce((a, v) => (a[v] = (a[v] || 0) + 1, a), {}))
  .sort((a, b) => b[1] - a[1])[0][0];
const monthsList = [...new Set(days.map(d => d.format('YYYY-MM')))];
const monthYaml = monthsList.length === 1
  ? `month: "[[Journaling/MonthlyNotes/${monthsList[0]}|${monthsList[0]}]]"`
  : 'month:\n' + monthsList.map(v => `  - "[[Journaling/MonthlyNotes/${v}|${v}]]"`).join('\n');
const quarter = majority(days.map(d => d.format('YYYY-[Q]Q')));
const year = majority(days.map(d => d.format('YYYY')));
const daysYaml = days.map(d =>
  `  - "[[Journaling/DailyNotes/${d.format('YYYY-MM')}/${d.format('YYYY-MM-DD')}|${labels[d.day()]}]]"`
).join('\n');
%>
first_day: <% first_day %>
last_day: <% last_day %>
<% monthYaml %>
quarter: "[[Journaling/QuarterlyNotes/<% quarter %>|<% quarter %>]]"
year: "[[Journaling/YearlyNotes/<% year %>|<% year %>]]"
prev_week: "[[Journaling/WeeklyNotes/<% prev_week %>|<% prev_week %>]]"
next_week: "[[Journaling/WeeklyNotes/<% next_week %>|<% next_week %>]]"
days:
<% daysYaml %>
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
const sat = tp.user.satWeek();
const m = moment(tp.file.title, 'YYYY-MM');
const prev_month = m.clone().subtract(1, 'month').format('YYYY-MM');
const next_month = m.clone().add(1, 'month').format('YYYY-MM');
const last = m.clone().endOf('month');
const weeks = [];
let cur = sat.startOfWeek(m.clone().startOf('month'));
while (cur.isSameOrBefore(last, 'day')) {
  weeks.push(sat.label(cur));
  cur.add(1, 'week');
}
const weeksYaml = weeks.map(w => `  - "[[Journaling/WeeklyNotes/${w}|${w}]]"`).join('\n');
%>
quarter: "[[Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>]]"
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM") %>]]"
prev_month: "[[Journaling/MonthlyNotes/<% prev_month %>|<% prev_month %>]]"
next_month: "[[Journaling/MonthlyNotes/<% next_month %>|<% next_month %>]]"
weeks:
<% weeksYaml %>
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
