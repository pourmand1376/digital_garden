---
created: 2026-02-16 16:13:05
shamsi: 1404-11-27 16:13:05
calendar: "[[2026-02-16]]"
tags:
aliases:
title: Mac OSX - left cmd + double-tap q → close application
publish: true
---
[mac settings](Index%20-%20Mac%20Settings.md)
[Karabinar Elements Settings](Karabinar%20Elements%20Settings.md)
```json
{
    "description": "Mac OSX: left cmd + double-tap q → close application",
    "manipulators": [
        {
            "conditions": [
                {
                    "name": "command-q",
                    "type": "variable_if",
                    "value": 1
                }
            ],
            "from": {
                "key_code": "q",
                "modifiers": { "mandatory": ["command"] }
            },
            "to": [
                {
                    "key_code": "q",
                    "modifiers": ["left_command"]
                }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "q",
                "modifiers": { "mandatory": ["command"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "command-q",
                        "value": 1
                    }
                }
            ],
            "to_delayed_action": {
                "to_if_canceled": [
                    {
                        "set_variable": {
                            "name": "command-q",
                            "value": 0
                        }
                    }
                ],
                "to_if_invoked": [
                    {
                        "set_variable": {
                            "name": "command-q",
                            "value": 0
                        }
                    }
                ]
            },
            "type": "basic"
        }
    ]
}
```