---
created: 2026-07-21 16:32:23
shamsi: 1405-04-30 16:32:23
calendar: "[[2026-07-21]]"
tags:
aliases:
title: Coder Font Fix in browser via Tampermonkey
publish: true
---
```
// ==UserScript==
// @name         Coder Nerd Font Fix
// @namespace    coder-nerd-font
// @version      1.0
// @description  Use JetBrainsMono Nerd Font in Coder web terminals
// @match        https://your_url/terminal*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
  .xterm,
  .xterm * {
    font-family: "JetBrainsMono Nerd Font", monospace !important;
  }
`);
```

This script fixes coder cli font in browser. This is because I want to use terminal inside coder via browser sometimes and font should be correct to display my icons. 

[Coder Cli](Coder%20Cli.md)
[Home | Tampermonkey](Home%20%20Tampermonkey.md)

