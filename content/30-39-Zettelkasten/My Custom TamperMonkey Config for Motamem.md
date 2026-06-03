---
created: 2026-05-05 11:40:45
shamsi: 1405-02-15 11:40:45
calendar: "[[2026-05-05]]"
tags:
aliases:
title: My Custom TamperMonkey Config for Motamem
publish: true
---
[متمم](متمم.md)
[Home  Tampermonkey](Home%20%20Tampermonkey.md)


```js
// ==UserScript==
// @name         Motamem Custom UI
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Add reading links + remove sidebar
// @match        https://motamem.org/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const isHome = window.location.pathname === "/" || window.location.pathname === "";

    const links = [
        {
            url: "https://motamem.org/%d8%aa%d8%b9%d8%b1%db%8c%d9%81-%d8%b3%db%8c%d8%b3%d8%aa%d9%85-%d9%be%db%8c%da%86%db%8c%d8%af%d9%87/",
            text: "📚 سیستم‌های پیچیده"
        },
        {
            url: "https://motamem.org/%D8%B3%D8%B1%DB%8C-%D8%A7%D8%B5%D9%88%D9%84-%D9%88-%D9%81%D9%86%D9%88%D9%86-%D9%85%D8%B0%D8%A7%DA%A9%D8%B1%D9%87/",
            text: "🏠 مذاکره"
        },
        {
            url: "https://motamem.org/%D8%AF%D8%B1%D8%B3-%D8%AA%D8%B5%D9%85%DB%8C%D9%85-%DA%AF%DB%8C%D8%B1%DB%8C-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-%D9%86%D9%82%D8%B4%D9%87-%D8%B1%D8%A7%D9%87-%D8%AF%D8%B1%D8%B3/",
            text: "تصمیم گیری پیشرفته"
        },
        {
            url: "https://motamem.org/%D8%AA%D9%81%DA%A9%D8%B1-%D9%86%D9%82%D8%A7%D8%AF%D8%A7%D9%86%D9%87-critical-thinking/",
            text: "تفکر نقادانه"
        }
    ];

    // Create links box on ALL pages
    const box = document.createElement("div");
    box.style.background = "#fff";
    box.style.padding = "10px";
    box.style.border = "1px solid #ccc";
    box.style.zIndex = "9999";
    box.style.fontSize = "14px";
    box.style.lineHeight = "1.8";
    box.style.direction = "rtl";

    links.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.text;
        a.style.display = "block";
        a.style.marginBottom = "5px";
        a.style.color = "blue";

        box.appendChild(a);
    });

    if (isHome) {
        // Fixed only on homepage
        box.style.position = "fixed";
        box.style.top = "10px";
        box.style.right = "10px";

        document.body.appendChild(box);
    } else {
        // Not fixed on other pages
        box.style.position = "static";
        box.style.margin = "10px 0 20px 0";

        // Try to place it inside the main content area.
        // If that selector doesn't exist, fall back to body.
        const target =
            document.querySelector("#content") ||
            document.querySelector(".site-content") ||
            document.querySelector("main") ||
            document.body;

        target.prepend(box);
    }

    // Remove sidebar on NON-home pages
    if (!isHome) {
        const sidebar = document.getElementById("sidebar-primary");
        if (sidebar) {
            sidebar.remove();
        }
    }

})();
```


[My Custom Bash Scripts](My%20Custom%20Bash%20Scripts.md)
[My Custom Mac Shortcuts](My%20Custom%20Mac%20Shortcuts.md)

https://gist.github.com/pourmand1376/b5ecc280c72641febd1055d192f333d0