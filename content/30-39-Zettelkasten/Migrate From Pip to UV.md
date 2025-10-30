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

I don't like to install my app, so I've changed it to:
```Dockerfile
FROM python:3.13-slim AS build

COPY --from=ghcr.io/astral-sh/uv:0.8.21 /uv /uvx /bin/

WORKDIR /app

ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

COPY uv.lock pyproject.toml ./

RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --no-install-project --no-dev
    
FROM python:3.13-slim AS runtime

ENV PATH="/app/.venv/bin:$PATH"

RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup -m -d /app -s /bin/false appuser
    
WORKDIR /app

COPY --from=build --chown=appuser:appgroup /app .

USER appuser

ENTRYPOINT ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### UV vs UVX
Key difference: uv manages full project environments; uvx runs tools in ephemeral environments.
