---
created: 2026-02-19 01:43:28
shamsi: 1404-11-30 01:43:28
calendar: "[[2026-02-19]]"
tags:
aliases:
title: Add Shamsi Date to Obsidian
publish: true
---
First copy this code into a new file called `GetShamsiDate.js` and put that inside your obsidian vault. I recommend in a separate folder called `Templates/scripts`.

```js
// Simplified Gregorian to Shamsi date converter
function toJalaali(gy, gm, gd) {
  var g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  gy = parseInt(gy) - 1600;
  gm = parseInt(gm) - 1;
  gd = parseInt(gd) - 1;

  var g_day_no = 365 * gy + parseInt((gy + 3) / 4) - parseInt((gy + 99) / 100) + parseInt((gy + 399) / 400);

  for (var i = 0; i < gm; ++i)
    g_day_no += g_days_in_month[i];
  if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)))
    ++g_day_no;
  g_day_no += gd;

  var j_day_no = g_day_no - 79;

  var j_np = parseInt(j_day_no / 12053);
  j_day_no %= 12053;

  var jy = 979 + 33 * j_np + 4 * parseInt(j_day_no / 1461);
  j_day_no %= 1461;

  if (j_day_no >= 366) {
    jy += parseInt((j_day_no - 1) / 365);
    j_day_no = (j_day_no - 1) % 365;
  }

  var jm, jd;
  for (i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
    j_day_no -= j_days_in_month[i];
  }
  jm = i + 1;
  jd = j_day_no + 1;

  return [jy, jm, jd];
}

// Function to pad numbers with leading zeros
function padWithZeros(number, length) {
  return String(number).padStart(length, '0');
}

// Main function to get formatted Shamsi date
function getShamsiDate(inputDate) {
  let date;
  
  if (inputDate) {
    date = new Date(inputDate);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date input. Please use a valid date format (e.g., "YYYY-MM-DD" or a valid Date object).');
    }
  } else {
    date = new Date();
  }

  var [jy, jm, jd] = toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());

  const dateParts = {
    year: jy,
    month: padWithZeros(jm, 2),
    day: padWithZeros(jd, 2),
    hours: padWithZeros(date.getHours(), 2),
    minutes: padWithZeros(date.getMinutes(), 2),
    seconds: padWithZeros(date.getSeconds(), 2)
  };

  // Check if input contains time components
  const hasTime = inputDate && typeof inputDate === 'string' && 
    (inputDate.includes(':') || inputDate.includes('T'));

  // Return date-only or date-time format based on input
  return hasTime 
    ? `${dateParts.year}-${dateParts.month}-${dateParts.day} ${dateParts.hours}:${dateParts.minutes}:${dateParts.seconds}`
    : `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

module.exports = getShamsiDate;
```

Then in Templater, you should set the script template folder and hit reload button. It should now say: Detected 1 user script. 

[GitHub - SilentVoid13/Templater: A template plugin for obsidian](https://github.com/SilentVoid13/Templater)

You can now use the function wherever you want. 

I use it like this:

```yaml
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
day: <% tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD") %>
shamsi: <% tp.user.getShamsiDate(tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")) %>
```

[obsidian](Index%20-%20Obsidian.md)
[Obsidian Plugins](Obsidian%20Plugins.md)
