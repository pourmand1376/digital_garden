---
created: 2024-08-24 11:07
modified: 2024-08-24 11:07:33
publish: true
title: Compressing and Conversion of MP4 to MP3
---
```
ffmpeg -i video.mp4 -vn audio.mp3
```

```
ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4
```

For AAC format without any conversion:
```
ffmpeg -i movie.mp4 -vn -acodec copy output.aac
```

Compress mp3 file with variable bitrate
```
ffmpeg -i input.mp3 -q:a 4 output.mp3
```

q:a with 6 is also ok! I released my episode with that and size is better. 


[پادکست ایستگاه هوش مصنوعی](پادکست%20ایستگاه%20هوش%20مصنوعی.md)
