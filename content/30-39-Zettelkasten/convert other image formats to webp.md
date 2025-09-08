---
created: 2025-09-08 09:07:23
shamsi: 1404-06-17 09:07:23
calendar: "[[2025-09-08]]"
tags:
aliases:
  - تبدیل به فرمت WebP
title: تبدیل به فرمت WebP
publish: true
---
اگر می‌خوای عکس‌هات رو به فرمت Webp تبدیل کنی، تو مک ابتدا نصبش کن[^1]:

```bash
brew install webp
```

بعد برای تبدیل این دستور رو بزن:

```bash
cwebp -m 6 -q 80 -mt -af -progress wheel_of_life.png -o wheel_of_life.webp
```

این پارامترها رو با سعی و خطا و برای وبلاگ خودم پیدا کردم. کیفیتش مناسبه این‌طوری. 

[نرم‌افزار](Index%20Softwares.md)
[نرم افزارهای من در مک](نرم%20افزارهای%20من%20در%20مک.md)

[^1]: [webp — Homebrew Formulae](https://formulae.brew.sh/formula/webp)
