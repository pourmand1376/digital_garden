---
title: Karabiner-Elements complex_modifications rules
source: https://ke-complex-modifications.pqrs.org/?q=space#spacebar_to_right_option
author:
published:
created: 2026-06-08 00:46:37
description: Karabiner-Elements complex_modifications predefined rules by community
tags:
  - clippings
  - 
shamsi: 1405-03-18 00:46:37
calendar: "[[2026-06-08]]"
aliases:
publish: true
---
In mac, hitting ctrl key is very hard. So, I consulted with gemini and he offered that I map space to ctrl key. So whenever is it hit alone, it is space. In combination with other keys, it is ctrl. 

```json
{
    "description": "Post space is pressed alone, left_ctrl otherwise",
    "manipulators": [
        {
            "from": {
                "key_code": "spacebar",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_control" }],
            "to_if_alone": [{ "key_code": "spacebar" }],
            "type": "basic"
        }
    ]
}
```

I don't use this anymore. It was very annoying. I mapped my right command for right control. 

[Karabinar Elements Settings](Karabinar%20Elements%20Settings.md)
[FlashSpace Rules - Karabinar](FlashSpace%20Rules%20-%20Karabinar.md)
[Index - Mac Settings](Index%20-%20Mac%20Settings.md)
