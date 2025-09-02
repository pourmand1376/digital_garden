---
created: 2025-09-02 18:36:14
shamsi: 1404-06-11 18:36:14
calendar: "[[2025-09-02]]"
tags:
aliases:
publish: true
title: How to Write Commit Messages
---
[git](Index%20-%20Git.md)

There is a nice format for commit messages. It is called semantic commit messages [^1]. 

Format: `<type>(<scope>): <subject>`
I haven't seen people use scope a lot. So, I'll stick to `<type>: <subject`.

These are the types [^2]:
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)


[^1]: [Semantic Commit Messages](https://sparkbox.com/foundry/semantic_commit_messages)

[^2]: [Semantic Commit Messages · GitHub](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
