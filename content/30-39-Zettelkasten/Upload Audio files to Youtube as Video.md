---
created: 2025-10-25 17:00:19
shamsi: 1404-08-03 17:00:19
calendar: "[[2025-10-25]]"
tags:
aliases:
title: Upload Audio files to Youtube as Video
publish: true
---
[Compressing and Conversion of MP4 to MP3](Compressing%20and%20Conversion%20of%20MP4%20to%20MP3.md)
[youtube](Youtube.md)

Youtube doesn't allow us to upload audio files. 

So, You can use this script to convert an mp3 (or any audio file) and image into an static video. No other website is needed. [^1]

```bash
ffmpeg -loop 1 -i image.jpg -i audio.mp3 -c:a copy -c:v libx264 -shortest out.mp4
```

[^1]: [Convert mp3 -> Video with static image ( ffmpeg/libav & BASH )](https://stackoverflow.com/questions/25381086/convert-mp3-video-with-static-image-ffmpeg-libav-bash)
