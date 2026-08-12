---
created: 2026-06-10T20:44:37+03:30
reviewed:
url: https://www.youtube.com/watch?v=u-qLj4YBry0
title: FZF Is My Favorite Way To Find Things In The Terminal
channel: Josean Martinez
related:
  - "[[Videos]]"
published: 2025-11-20
thumbnailUrl: https://i.ytimg.com/vi/u-qLj4YBry0/maxresdefault.jpg
duration: "546"
watched:
publish: true
---

![FZF Is My Favorite Way To Find Things In The Terminal](https://www.youtube.com/watch?v=u-qLj4YBry0)

🚀 TerminalHackers Waitlist/Newsletter: https://bit.ly/43wZ5h0
💻 My dotfiles: https://bit.ly/4cFlPyq

FZF is an incredible fuzzy finder for the terminal that you can use to quickly and easily filter through any kind of list. In this video, I show you everything you need to know to get started with it & transform the way you work on the terminal!

⏰ Timestamps
00:00 - Introduction
00:13 - Search patterns
01:24 - Keybinds
01:47 - Ctrl + T
02:28 - ** + Tab
03:08 - Multiselect
03:42 - Ctrl + R
04:10 - Neovim Course Announcement
04:40 - Alt + C
05:01 - Other Uses
07:09 - Installing FZF
08:22 - Conclusion

---

My Notes: [fzf cherry_blossom A command-line fuzzy finder](fzf%20cherry_blossom%20A%20command-line%20fuzzy%20finder.md)
[terminal](Index%20Terminal.md)
[Default Terminal Commands to Replace in mac](Default%20Terminal%20Commands%20to%20Replace%20in%20mac.md)


### Incredible Links
Also read [andrew-quinn.me/fzf/](https://andrew-quinn.me/fzf/)
Also [fzf: Getting Started \| junegunn.choi.](https://junegunn.github.io/fzf/getting-started/)

---
Gemini 

### 1. Basic Search Syntax
By simply typing `fzf` in a directory, you open an interactive picker to filter files and folders.
- **Fuzzy Match:** You can omit characters (e.g., typing `app html` will still find `app.html`) 
- **Exact Match:** Prefix your query with a single quote (e.g., `'app`) [
- **Starts With:** Use a caret symbol (e.g., `^DB`) 
- **Ends With:** Use a dollar sign at the end (e.g., `json$`) 

### 2. Built-in Keybinds & Navigation
Instead of launching `fzf` entirely on its own, it is best used inline with other shell utilities via shortcuts:
- `Ctrl + K` / `Ctrl + J` – Navigate up and down the list 
- `Ctrl + T` – Searches files/directories and pastes the selected item right into your current command line prompt 
- `Alt + C` – Search directories only; pressing Enter instantly `cd`s you into that folder 
- `Ctrl + R` – Search through your entire terminal command history dynamically 

### 3. Smart Trigger ( + `Tab`)
You can invoke `fzf` contextually using a double star pattern followed by `Tab`  It adapts intelligently based on the command you are typing:
- `nvim [Tab]` or `cat [Tab]` lets you select a file to open or read 
- `cd [Tab]` automatically restricts the search results _only_ to directories 
- `kill -9 [Tab]` pulls up active system processes so you can quickly search and terminate one 
- **Multi-select:** Inside any picker, pressing `Tab` selects an item, and `Shift + Tab` deselects it. This allows you to hand-pick multiple files or processes at once before executing a command 

### 4. Advanced Piping
Because `fzf` accepts any standard input stream, you can pipe custom command outputs into it. For example, he demonstrates running `git branch | fzf` to dynamically filter Git branches, or wrapping it in a subshell (`git checkout $(git branch | fzf)`) to create an interactive branch switcher. 

### 5. Installation & Shell Configuration
The speaker finishes by showing how to install `fzf` via Git cloning the repository.  The setup script creates automated script files (`.fzf.bash` or `.fzf.zsh`) inside your home directory, which hook into your shell configurations (like `.zshrc`) to set up your environment paths, auto-completions, and core keybinds.





