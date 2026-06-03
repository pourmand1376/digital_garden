---
created: 2026-02-16 15:00:10
shamsi: 1404-11-27 15:00:10
calendar: "[[2026-02-16]]"
tags:
aliases:
title: Default Web Clipper
publish: true
---
[obsidian](Index%20-%20Obsidian.md)
[Obsidian Web Clipper Templates](Obsidian%20Web%20Clipper%20Templates.md)

```json
{
  "schemaVersion": "0.1.0",
  "name": "Default",
  "behavior": "create",
  "noteContentFormat": "",
  "properties": [
    {
      "name": "title",
      "value": "{{title}}",
      "type": "text"
    },
    {
      "name": "source",
      "value": "{{url}}",
      "type": "text"
    },
    {
      "name": "author",
      "value": "{{author|split:\\\", \\\"|wikilink|join}}",
      "type": "multitext"
    },
    {
      "name": "published",
      "value": "{{published}}",
      "type": "date"
    },
    {
      "name": "created",
      "value": "{{date}}",
      "type": "date"
    },
    {
      "name": "description",
      "value": "{{description}}",
      "type": "text"
    },
    {
      "name": "tags",
      "value": "clippings",
      "type": "multitext"
    }
  ],
  "triggers": [],
  "noteNameFormat": "{{title}}",
  "path": "0-Inbox/"
}
```