---
created: 2026-01-22 00:37:16
shamsi: 1404-11-02 00:37:16
calendar: "[[2026-01-22]]"
tags:
aliases:
title: Git Switch vs Git Restore vs Git Checkout
publish: true
---
Git checkout was actually doing two different things. So, they created two different other commands. 

1. Git Switch: Only create and switch branches
2. Git restore: Restore files 

Git Checkout is legacy. 

---

Rest is LLM Generated.

| **Command**        | **Primary Purpose**              | **Scope**        |
| ------------------ | -------------------------------- | ---------------- |
| **`git switch`**   | Moving between branches.         | **Branch-level** |
| **`git restore`**  | Undoing changes to files.        | **File-level**   |
| **`git checkout`** | Does both of the above (Legacy). | **Both**         |

## 1. `git switch` (The Specialist)
Use this when you want to change what branch you are working on. It is safer because it won't accidentally overwrite your files like the old checkout command sometimes could.
- **Switch to an existing branch:** `git switch main`
- **Create and switch to a new branch:** `git switch -c feature-name` (The `-c` stands for **create**)
- **Go back to the previous branch:** `git switch -`

## 2. `git restore` (The Medic)
Use this when you messed up a file and want to "restore" it to a previous state.
- **Discard local changes in a file (unstage):** `git restore file.txt`
- **Unstage a file (remove from `git add`):** `git restore --staged file.txt`
- **Restore a file from a specific commit:** `git restore --source HEAD~2 file.txt`

## 3. `git checkout` (The Legend)
This command still works and likely always will, but it is now considered "overloaded."
- **It switches branches:** `git checkout main`
- **It creates branches:** `git checkout -b new-branch`
- **It restores files:** `git checkout -- file.txt`

[git](Index%20Git.md)
