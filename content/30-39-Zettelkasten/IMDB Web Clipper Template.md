---
created: 2026-02-16 15:03:37
shamsi: 1404-11-27 15:03:37
calendar: "[[2026-02-16]]"
tags:
aliases:
title: IMDB Web Clipper Template
publish: true
---
[obsidian](Index%20-%20Obsidian.md)
[Obsidian Web Clipper Templates](Obsidian%20Web%20Clipper%20Templates.md)

```json
{
  "schemaVersion": "0.1.0",
  "name": "IMDB",
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
      "value": "clippings, movies",
      "type": "multitext"
    }
  ],
  "triggers": [
    "https://www.imdb.com/"
  ],
  "noteNameFormat": "{{title |safe_name }}",
  "path": "0-Inbox/"
}
```
