---
created: 2025-10-22 12:07:58
shamsi: 1404-07-30 12:07:58
calendar: "[[2025-10-22]]"
tags:
aliases:
title: Migrate From Pip to UV
publish: true
---
[Python](Index%20Python.md)


First install uv:
```
brew install uv
```

You can follow this doc:
- [From pip to a uv project \| uv](https://docs.astral.sh/uv/guides/migration/pip-to-project/)

For my projects, I suppose it would be:
```
uv init
uv add -r requirements.in -c requirements.txt
```

If it didn't work:
```
uv add -r requirements.in
```

Then I change dockerfile using this tutorial:
- [Optimal Dockerfile for Python with uv \| Container Builds \| Depot Documentation](https://depot.dev/docs/container-builds/how-to-guides/optimal-dockerfiles/python-uv-dockerfile)

[Python](Index%20Python.md)
