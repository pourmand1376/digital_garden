---
created: 2026-02-16 15:02:32
shamsi: 1404-11-27 15:02:32
calendar: "[[2026-02-16]]"
tags:
aliases:
title: Youtube Web Clipper Template
publish: true
---
[Obsidian Web Clipper Templates](Obsidian%20Web%20Clipper%20Templates.md)
[obsidian](Index%20-%20Obsidian.md)

```json
{
  "schemaVersion": "0.1.0",
  "name": "YouTube",
  "behavior": "create",
  "noteContentFormat": "\n![{{title}}]({{schema:@VideoObject:embedUrl|replace:\"embed/\":\"watch?v=\"}})\n\n{{schema:@VideoObject:description}}\n",
  "properties": [
    {
      "name": "created",
      "value": "{{time|date:\\\"YYYY-MM-DDTHH:mm:ssZ\\\"}}",
      "type": "date"
    },
    {
      "name": "reviewed",
      "value": "",
      "type": "datetime"
    },
    {
      "name": "url",
      "value": "{{schema:@VideoObject:embedUrl|replace:\\\"embed/\\\":\\\"watch?v=\\\"}}",
      "type": "text"
    },
    {
      "name": "title",
      "value": "{{schema:@VideoObject:name}}",
      "type": "text"
    },
    {
      "name": "channel",
      "value": "{{schema:@VideoObject:author}}",
      "type": "text"
    },
    {
      "name": "related",
      "value": "[[Videos]]",
      "type": "multitext"
    },
    {
      "name": "published",
      "value": "{{schema:@VideoObject:uploadDate|date:\\\"YYYY-MM-DD\\\"}}",
      "type": "date"
    },
    {
      "name": "thumbnailUrl",
      "value": "{{schema:@VideoObject:thumbnailUrl|first}}",
      "type": "text"
    },
    {
      "name": "duration",
      "value": "{{schema:@VideoObject:duration|replace:\\\"PT\\\",\\\"\\\",\\\"S\\\",\\\"\\\"}}",
      "type": "text"
    },
    {
      "name": "watched",
      "value": "",
      "type": "text"
    }
  ],
  "triggers": [
    "https://www.youtube.com/watch"
  ],
  "noteNameFormat": "{{schema:@VideoObject:name|safe_name|trim}}",
  "path": "0-Inbox/"
}
```