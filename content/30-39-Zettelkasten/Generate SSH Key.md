---
created: 2026-03-09 13:58:51
shamsi: 1404-12-18 13:58:51
calendar: "[[2026-03-09]]"
tags:
aliases:
title: Generate SSH Key
publish: true
---
Generated via Gemini and Grok. 

```bash
ssh-keygen -t ed25519 -C "purpose_or_email" -f ~/.ssh/key_name
```
- **`ed25519`** — preferred (modern, fast, secure). Use `rsa -b 4096` only for legacy compatibility.
- **`-C`** — comment to identify the key (e.g. `"work-github"`, `"prod-server"`)
- **`-f`** — explicit filename; don't use the default `id_ed25519` for everything

### Naming Convention
```
~/.ssh/
├── github_personal        # private
├── github_personal.pub    # public
├── prod_server_aws
├── prod_server_aws.pub
└── config
Name by purpose, not by type.
```

### Always Set a Passphrase

### Use ssh-agent so you don't retype it constantly:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/key_name
```

### Permissions
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/key_name        # private key
chmod 644 ~/.ssh/key_name.pub    # public key
```

Rule of thumb: private = 600, directory = 700, public = 644

```bash
600: Only you can read/write
644: You can read/write, others can only read
700: only you can read/write/enter the directory
```

- Create separate keys for work and personal accounts


[github](سایت%20گیت‌هاب%20-%20Github.md)
[Use Mosh Rather than ssh](Use%20Mosh%20Rather%20than%20ssh.md)
[Proxy Server using SSH](Proxy%20Server%20using%20SSH.md)
