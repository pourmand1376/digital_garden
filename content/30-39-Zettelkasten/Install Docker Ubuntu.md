---
created: 2026-02-17 11:44:46
shamsi: 1404-11-28 11:44:46
calendar: "[[2026-02-17]]"
tags:
aliases:
title: Install Docker Ubuntu
publish: true
---
The Easiest way to install docker on ubuntu:

```bash
# 1. Remove any old conflicting versions (very important) 
sudo apt-get remove docker docker-engine docker.io containerd runc podman-docker

# 2. Official convenience script (still the simplest & reasonably safe method) 
curl -fsSL https://get.docker.com | sudo sh
```

After it finished:

```bash
# Add your user to docker group (so you don't need sudo every time)
sudo usermod -aG docker $USER

# Log out & log back in (or open new terminal)
newgrp docker

# Quick test
docker run --rm hello-world
```

If `curl` fails. do:
```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

[docker](Index%20Docker.md)
[linux](Index%20Linux.md)
