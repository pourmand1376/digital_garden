---
title: "aspiers/stow: GNU Stow - mirror of savannah git repository occasionally with more bleeding-edge branches"
source: https://github.com/aspiers/stow
author:
  - "[[Agents]]"
  - "[[aspiers]]"
published:
created: 2026-02-19 11:33:45
description: GNU Stow
tags:
  - clippings
  - 
shamsi: 1404-11-30 11:33:45
calendar: "[[2026-02-19]]"
aliases:
  - Stow
  - dotfiles config link
  - sync dotfiles in git
publish: true
---
Grok. 

**Install:**  
`brew install stow`

**Typical usage (dotfiles):**
1. Create folder:  
   `mkdir ~/dotfiles && cd ~/dotfiles`
2. Create package folders (one per program):  
   `mkdir zsh nvim git`
3. Put files inside with correct structure:  
   `~/dotfiles/zsh/.zshrc`  
   `~/dotfiles/nvim/.config/nvim/init.vim`
4. Apply (from inside ~/dotfiles):  
   `stow -v zsh`  
   or  
   `stow -v .`  (all packages at once)

**Undo:**  
`stow -D zsh`

**Dry run first (recommended):**  
`stow -n -v zsh`

| **Step** | **Command / Action**              | **Description**                        |
| -------- | --------------------------------- | -------------------------------------- |
| 1        | brew install stow                 | Install stow via Homebrew              |
| 2        | mkdir ~/dotfiles && cd ~/dotfiles | Create and enter dotfiles directory    |
| 3        | mkdir zsh nvim git                | Create one folder per program/package  |
| 4        | Put files e.g. zsh/.zshrc         | Mirror the target structure inside pkg |
| 5        | stow zsh                          | Symlink the zsh package to ~           |
|          | stow .                            | Symlink all packages at once           |
| Undo     | stow -D zsh                       | Remove symlinks for zsh package        |
| Test     | stow -n -v zsh                    | Dry-run + verbose (check before apply) |
[pourmand1376/.dotfiles: My dotfiles!](dotfiles%20My%20dotfiles!.md)
[mac config](Index%20-%20Mac%20Settings.md)
[software](Index%20Softwares.md)
[mac](Index%20MacOS.md)
