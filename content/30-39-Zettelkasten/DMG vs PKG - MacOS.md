---
created: 2026-05-01 21:35:48
shamsi: 1405-02-11 21:35:48
calendar: "[[2026-05-01]]"
tags:
aliases:
title: DMG vs PKG - MacOS
publish: true
ai_Generated: true
---
While they both deliver software to your Mac, a **DMG** is essentially a virtual folder, whereas a **PKG** is a guided installation script.

| **Feature**      | **DMG (Disk Image)**          | **PKG (Installer Package)**            |
| ---------------- | ----------------------------- | -------------------------------------- |
| **Primary Use**  | Consumer apps (Drag-and-drop) | System tools, drivers, enterprise apps |
| **How it works** | Mounts as a virtual drive     | Runs an installation wizard            |
| **Permissions**  | Usually just user-level       | Can request system/root access         |
| **Removal**      | Drag the `.app` to the Trash  | Often requires a dedicated uninstaller |
| **Scripts**      | No (it's just a container)    | Yes (pre-install and post-install)     |

## 1. DMG (Disk Image)
Think of a `.dmg` like a digital USB stick. When you double-click it, macOS "mounts" it, and a new window pops up containing the application.

- **The User Experience:** Usually, you see an arrow pointing from the app icon to a shortcut of your **Applications** folder. You manually copy the file over.
- **Safety:** Since you are just moving a file, the app can’t sneakily install background processes or modify system settings during the "installation."
- **Best For:** Simple applications that are "self-contained" (all the code lives inside the `.app` file).

## 2. PKG (Installer Package)
A `.pkg` is a professional installer. When you open it, it launches the **macOS Installer** app, which guides you through a "Introduction," "License," and "Installation" process.
- **The User Experience:** You click "Next" several times and usually have to enter your administrator password.
- **Power & Complexity:** Unlike a DMG, a PKG can run scripts. It can check if your hardware is compatible, delete old versions of the software, or place files in deep system folders (like `/Library/Extensions` for hardware drivers).
- **Enterprise Use:** IT managers love PKGs because they can be "pushed" to hundreds of computers at once without a human having to drag an icon into a folder.
- **Best For:** Complex software (Adobe Creative Cloud, Microsoft Office), system drivers, or enterprise deployments.

Gemini.

[mac](Index%20MacOS.md)
[software](Index%20Softwares.md)
