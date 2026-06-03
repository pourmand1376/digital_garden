---
created: 2025-10-22T13:03:58+03:30
reviewed:
url: https://www.youtube.com/watch?v=qh98qOND6MI
title: UV for Python… (Almost) All Batteries Included
channel: ArjanCodes
related:
  - "[[Videos]]"
published: 2024-12-13
thumbnailUrl: https://i.ytimg.com/vi/qh98qOND6MI/maxresdefault.jpg
duration: "1055"
watched:
publish: true
---
[Python](Index%20Python.md)
[Migrate From Pip to UV](Migrate%20From%20Pip%20to%20UV.md)

![UV for Python… (Almost) All Batteries Included](https://www.youtube.com/watch?v=qh98qOND6MI)

🔖 Chapters:
0:00 Intro
0:23 What is uv?
1:10 How To Install uv
2:24 Setting Up The Project
5:31 What was uv called before
6:06 Dependency Management
7:53 Workspaces
10:16 Tools
11:52 Python Versioning
13:54 Thoughts and caveats
15:18 Python Project
17:11 Outro

### How to install UV

```
brew install uv
```

This is the easier one. Now you should have `uv` and `uvx`. 

```
eval "$(uv generate-shell-completion zsh)"
```

### Setup new project
```
uv init --app  #create python app (default)
uv init --lib #for creating libraries
```

You can also specify your project name after it if you have a brand new project. 

By default it will create virtual environment for each project that you use.

### Using UV
In order to run the app, you can use:
```
uv run hello.py
```

To add packages:
```
uv add pandas
uv add fastapi sqlalchemy
```

To remove dependencies:
```
uv remove sqlalchemy
```

In order to install latest packages (if other developers have updated them), you can use:
```
uv sync
```

See a tree of dependencies:
```
uv tree
```

### Workspaces
This is useful when having mono-repo style projects i.e. multiple projects with shared dependencies. 

If you have a git repo, you can init multiple uv directories in it (`uv init another-project`). It will share dependencies between them. 

### Tools
A shared environment to install common tools like ruff and black. 

```
uvx ruff check
uv run ruff check
```

To use it for the first time:
```
uv tool update-shell
```

```
uv tool install ruff
uv tool uninstall ruff
uv tool upgrade ruff
```

### Manage Python Versions
Install specific version:
```
uv python install 3.12.0
uv python install '>=3.9, <3.12'
```

Change current project python version:
```
uv venv --python 3.13.0
```

### Publish packages
We can also build and publish packages using uv. 

```
uv build
uv publish 
```



