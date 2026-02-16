---
created: 2026-02-16 16:11:48
shamsi: 1404-11-27 16:11:48
calendar: "[[2026-02-16]]"
tags:
aliases:
title: Change caps_lock to command+control+option
publish: true
---
[Karabinar Elements Settings](Karabinar%20Elements%20Settings.md)
[mac config](Index%20-%20Mac%20Settings.md)

```json
{
    "manipulators": [
        {
            "description": "Change caps_lock to command+control+option.",
            "from": {
                "key_code": "caps_lock",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "key_code": "left_command",
                    "modifiers": ["left_control", "left_option"]
                }
            ],
            "type": "basic"
        }
    ]
}
```