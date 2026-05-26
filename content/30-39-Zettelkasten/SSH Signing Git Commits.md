---
created: 2026-03-10 10:09:15
shamsi: 1404-12-19 10:09:15
calendar: "[[2026-03-10]]"
tags:
aliases:
title: SSH Signing Git Commits
publish: true
---
Gemini. Edited. 

To use SSH signing instead of GPG for Git commits, follow these three quick steps:

```bash
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub
git config --global commit.gpgsign true
```

This way all your messages would be signed and have verified tag. (Tested and working on Gitlab)

[git](Index%20Git.md)
[Generate SSH Key](Generate%20SSH%20Key.md)

https://docs.gitlab.com/user/project/repository/signed_commits/ssh/
