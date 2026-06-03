---
created: 2026-04-20 11:51:22
shamsi: 1405-01-31 11:51:22
calendar: "[[2026-04-20]]"
tags:
aliases:
title: Useful Jira Acli Commands for me
publish: true
---

```bash
acli jira workitem search --jql "assignee = currentUser() AND statusCategory != Done" --limit 100
```

```bash
acli jira workitem search --jql "updated >= -4d and assignee = currentUser()" 
```


```bash
acli jira workitem search --jql "project = INS and assignee = currentUser() ORDER BY status" --limit 100
```

[software](Index%20Softwares.md)
[task management](Index%20Task%20Managment.md)
[Work Log Template - Standup Daily Template](Work%20Log%20Template%20-%20Standup%20Daily%20Template.md)
[How to Connect Claude Desktop to Jira and Gitlab](How%20to%20Connect%20Claude%20Desktop%20to%20Jira%20and%20Gitlab.md)
[Create Jira task via CLI](Create%20Jira%20task%20via%20CLI.md)
