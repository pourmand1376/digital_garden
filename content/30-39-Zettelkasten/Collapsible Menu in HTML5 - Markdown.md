---
created: 2025-09-12 11:28:11
shamsi: 1404-06-21 11:28:11
calendar: "[[2025-09-12]]"
tags:
aliases:
title: Collapsible Menu in HTML5 - Markdown
publish: true
---
[obsidian](Index%20-%20Obsidian.md)
[Hugo](Hugo.md)

Markdown doesn't support collapsible menu. Hugo and Obsidian does! It is actually standard HTML5 element [^1]:

````markdown
<details>

<summary>Tips for collapsed sections</summary>

You can add text within a collapsed section.

You can add an image or a code block, too.

</details>
````

It is unfortunate that obsidian can't render markdown inside details. It will be shown as plain text. So, to use proper details in hugo I do [^2]:

```text
{{< details summary="See the details" >}}
This is a **bold** word.
{{< /details >}}
```



[^1]: [Organizing information with collapsed sections - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections)
[^2]: [Details shortcode](https://gohugo.io/shortcodes/details/)
