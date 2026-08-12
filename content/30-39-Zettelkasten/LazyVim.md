---
title: 🚀 Getting Started
source: https://www.lazyvim.org/
author:
published:
created: 2026-06-07 00:44:56
description: LazyVim is a Neovim setup powered by 💤 lazy.nvim
tags:
  - clippings
  - 
shamsi: 1405-03-17 00:44:56
calendar: "[[2026-06-07]]"
aliases:
publish: true
---
After neovim, just install `lazy-vim`. It has most you want in the world. 

It is an already configured vim with good defaults. 

```bash
brew install neovim git ripgrep fd fzf lazygit
xcode-select --install
brew install --cask font-meslo-lg-nerd-font
```

Then:
```
git clone https://github.com/LazyVim/starter ~/.config/nvim  
rm -rf ~/.config/nvim/.git
```

To correctly show persian characters inside iterm2, add this to `config/options.lua`:
```
vim.opt.arabicshape = false
```

[NeoVim Vim-fork focused on extensibility and usability](NeoVim%20Vim-fork%20focused%20on%20extensibility%20and%20usability.md)
[VIM CheatSheet](Mastering%20Vim%20-%20Essential%20Keyboard%20Shortcuts.md)
[VIM basic stuff](VIM%20basic%20stuff.md)
[Iterm2 Configurations](Iterm2%20Configurations.md)

