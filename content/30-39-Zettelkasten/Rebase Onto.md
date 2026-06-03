---
created: 2026-03-30 15:22:04
shamsi: 1405-01-10 15:22:04
calendar: "[[2026-03-30]]"
tags:
aliases:
title: Rebase Onto
publish: true
---
Claude.
# Git Rebase --onto
## What is rebase?
Regular `git rebase` takes all commits on your branch since it diverged from the target and replays them on top of the target:
```bash
git rebase master
```
## The problem rebase --onto solves
Sometimes you don't want to replay **all** commits — you want to replay only a **specific range**. Common scenarios:
1. Stacked PRs where the base was squash-merged
2. Moving a branch from one base to another
3. Dropping a range of commits from history
## Syntax
```bash
git rebase --onto <new-base> <old-base> [<branch>]
```
Read it as: **"Take commits after `<old-base>` up to `<branch>` (or HEAD), and replay them onto `<new-base>`."**
- `<new-base>` — where to place the commits (the new foundation)
- `<old-base>` — where to cut from (**exclusive** — this commit is NOT included)
- `<branch>` — where to cut to (**inclusive** — defaults to HEAD if omitted)

Branch is optional. First switch to the branch you want to rebase. and Omit it. 

> [!example]
> To make things easier, first switch to the branch. Then copy the first commit in the branch (that you made). Then do `git rebase --onto master first_commit_sha`


## Use Cases
### 1. Stacked PRs with squash merge
After `add-filter` is squash-merged into master, your stacked branch still has the original `add-filter` commits. A regular `git rebase master` tries to replay those old commits, causing conflicts since master already contains the same changes via the squash commit.
```bash
git rebase --onto master add-filter your-branch
```
This skips the old `add-filter` commits and only replays **your new commits** onto master. No conflicts.

> This is how I use stacked branching. After branch `add-filter` is squash merged, I do rebase onto for other stacked PRs to not resolve conflicts! This is simple and the best
### 2. Moving a branch to a different base
If `feature` was branched from commit B but should have been branched from C:
```bash
git rebase --onto C B feature
```
### 3. Dropping commits from history
To remove commits C and D from a branch, keeping everything after D:
```bash
git rebase --onto B D feature
```
### 4. Replaying only the last N commits
```bash
git rebase --onto master HEAD~3
```
Replays only the last 3 commits onto master.
## Using branch names vs commit SHAs
Both work for `<old-base>`:
```bash
# Branch name (resolves to tip of that branch)
git rebase --onto master add-filter your-branch
# Commit SHA (useful if branch was deleted)
git rebase --onto master a3b4c5d your-branch
```
## Finding the right `<old-base>`
```bash
# See commit history to identify the boundary
git log --oneline your-branch
# Find the merge base between two branches
git merge-base add-filter your-branch
```
## What happens during rebase --onto
1. Git identifies the commits in the range (`old-base`..`branch`]
2. Detaches HEAD at `new-base`
3. Cherry-picks each commit in order
4. Moves the branch pointer to the final result
Each replayed commit gets a **new SHA** — they're new commits with the same content.
## Conflict resolution
```bash
# Fix conflicts, then:
git add <resolved-files>
git rebase --continue
# Skip a commit entirely:
git rebase --skip
# Abort and go back:
git rebase --abort
```
## Key rules
1. `<old-base>` is **exclusive** — that commit is never replayed
2. `<new-base>` is where the replayed commits land
3. Omitting `<branch>` defaults to HEAD
4. Replayed commits get new SHAs — force push required if already pushed
5. If `<old-base>` is a branch name, Git uses its tip commit
## Quick reference
| Goal                              | Command                                               |
| --------------------------------- | ----------------------------------------------------- |
| Move branch to new base           | `git rebase --onto new-base old-base branch`          |
| Fix stacked PR after squash merge | `git rebase --onto master base-branch stacked-branch` |
| Drop commits C..D                 | `git rebase --onto C D branch`                        |
| Replay only last N commits | `git rebase --onto target HEAD~N` |

[rebase and squash as natural partnerz](rebase%20and%20squash%20as%20natural%20partners.md)
[Rebase in Pull Requests](Rebase%20in%20Pull%20Requests.md)
[git](Index%20Git.md)