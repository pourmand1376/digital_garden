---
created: 2026-03-13 00:14:02
shamsi: 1404-12-22 00:14:02
calendar: "[[2026-03-13]]"
tags:
aliases:
title: Linux Tip - Never Work on Root User
publish: true
---

> [!error]
> --dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons (Claude CLI)

Generated via Gemini 3. 
### The "Principle of Least Privilege" (PoLP)
The core reason we avoid root is a concept called Least Privilege. This means an application or user should only have the specific permissions they need to do their job, and nothing more.
### 1. The Blast Radius
If a web server (like Nginx or a Node.js app) is running as root and a hacker finds a vulnerability in that app, they immediately gain root access to your entire machine. 
They can:
- Install malware or keyloggers.
- Wipe your entire hard drive ($rm -rf /$).
- Access sensitive system files like /etc/shadow (where password hashes live).

If the app is running as a restricted user (e.g., a user named www-data), the hacker is "trapped" in that user's limited sandbox.
### 2. Accidental Destruction
Human error is the most common "security" breach. If you are logged in as root and run a command with a typo, the system will not stop you.
As a normal user: The system will say "Permission Denied."
As root: The system will execute the command instantly, potentially breaking the OS beyond repair.
### 2. File Ownership Messes
When you run apps or installers with sudo, they often create configuration files owned by root. Later, when you try to run the app as a normal user, it will crash because it doesn't have permission to read its own config files. 

This leads to a "permissions nightmare" that is difficult to untangle.

[linux](Index%20Linux.md)
[Claude](Claude.md)
[terminal](Index%20Terminal.md)
