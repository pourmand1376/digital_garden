---
created: 2026-01-29 12:28:27
shamsi: 1404-11-09 12:28:27
calendar: "[[2026-01-29]]"
tags:
aliases:
title: Local Music inside Docker Container
publish: true
---
Just run this and you would have lots of white noise music to play in the background. 

```bash
docker rm -f moodist 2>/dev/null; docker run -d -p 8080:8080 --name moodist ghcr.io/remvze/moodist:v2.4.0
```

[music](Index%20-%20Music.md)
[docker](Index%20Docker.md)
[Moodist: Ambient Sounds for Focus and Calm](Moodist%20Ambient%20Sounds%20for%20Focus%20and%20Calm.md)
[raindrop-Music and Podcast](raindrop-Music%20and%20Podcast.md)