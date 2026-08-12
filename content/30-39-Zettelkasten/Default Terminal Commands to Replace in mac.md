---
created: 2026-06-07 12:58:12
shamsi: 1405-03-17 12:58:12
calendar: "[[2026-06-07]]"
tags:
aliases:
title: Default Terminal Commands to Replace in mac
publish: true
---
| Built-in   | Replace / add    | Why it’s worth it                            |
| ---------- | ---------------- | -------------------------------------------- |
| `ls`       | `eza`            | Better file listing                          |
| `cat`      | `bat`            | Better file preview with syntax highlighting |
| `grep`     | `ripgrep` / `rg` | Much faster text search                      |
| `find`     | `fd`             | Simpler file search                          |
| `cd`       | `zoxide`         | Smarter directory jumping                    |
| `top`      | `btop`           | Better process/system monitor                |
| `history`  | `atuin`          | Better searchable shell history ❌            |
| `rm`       | `trash`          | Safer delete to macOS Trash                  |
| `man`      | `tldr`           | Quick command examples                       |
| `git diff` | `delta`          | Better Git diffs                             |

Table Dervied from ChatGPT. I only install those that I like. 

> [!check]
> If I'm going to live in the terminal (which I am), I like to have the best tools. 


- [zoxide - A smarter cd command](zoxide%20-%20A%20smarter%20cd%20command.md)
- [exa terminal](Exa%20-%20A%20modern%20replacement%20for%20ls.md)
- [bat A cat(1) clone with wings.](30-39-Zettelkasten/bat%20A%20cat(1)%20clone%20with%20wings..md)
- [ripgrep - recursive regex search](ripgrep%20-%20recursive%20regex%20search.md)

I'm not in the mood of setting these up. So I do them all in once. 

ChatGPT. 

Here are clean configs for exactly these tools:
```bash
brew install eza bat ripgrep fd zoxide btop trash tldr git-delta
```

## Add this to `~/.zshrc`

```sh
cat >> ~/.zshrc <<'EOF'

# ------------------------------------------------------------
# Modern CLI replacements
# ------------------------------------------------------------

# eza: better ls
alias ls='eza --group-directories-first'
alias ll='eza -lh --git --group-directories-first'
alias la='eza -lah --git --group-directories-first'
alias lt='eza --tree --level=2 --group-directories-first'

# bat: better cat
alias cat='bat'
alias less='bat --paging=always'

# ripgrep: better grep
alias grep='rg'

# fd: better find
alias find='fd'

# zoxide: smarter cd
eval "$(zoxide init zsh --cmd cd)"

# btop: better top
alias top='btop'

# trash: safer rm
alias rm='trash'
alias del='trash'

# tldr: simpler man pages
alias man='tldr'

EOF
```

Then reload:

```sh
source ~/.zshrc
```
## Configure `git-delta`

```sh
git config --global core.pager delta
git config --global interactive.diffFilter "delta --color-only"
git config --global delta.navigate true
git config --global delta.side-by-side true
git config --global delta.line-numbers true
git config --global merge.conflictstyle zdiff3
```
## Configure Fzf
```bash
# Set up fzf key bindings and fuzzy completion
source <(fzf --zsh)
```


## Optional: configure `bat` theme

```sh
mkdir -p ~/.config/bat

cat > ~/.config/bat/config <<'EOF'
--theme="TwoDark"
--style="numbers,changes,header"
--paging=auto
EOF
```

## Verify everything
```sh
command -v eza
command -v bat
command -v rg
command -v fd
command -v zoxide
command -v btop
command -v atuin
command -v trash
command -v tldr
command -v delta
```
## Test replacements
```sh
ls
ll
cat ~/.zshrc
grep alias ~/.zshrc
find zshrc ~
cd Documents
top
man ls
atuin search
```

Use the original macOS commands with `command`:
```sh
command ls
command cat ~/.zshrc
command grep alias ~/.zshrc
command find ~ -name ".zshrc"
command rm file.txt
command man ls
```


[github](سایت%20گیت‌هاب%20-%20Github.md)
[mac](Index%20MacOS.md)
[Softwares I install](Softwares%20I%20install.md)
[terminal](Index%20Terminal.md)

