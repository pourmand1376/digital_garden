---
created: 2026-02-16 16:14:06
shamsi: 1404-11-27 16:14:06
calendar: "[[2026-02-16]]"
tags:
aliases:
title: FlashSpace Rules - Karabinar
publish: true
---
[Flashspace Workspace Manager Config](Flashspace%20Workspace%20Manager%20Config.md)
[Karabinar Elements Settings](Karabinar%20Elements%20Settings.md)


```json
{
    "description": "FlashSpace Rules: Switch (Opt) & Move (Opt+Shift)",
    "manipulators": [
        {
            "from": {
                "key_code": "t",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Task (T)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "t",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Task (T)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "r",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Run (R)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "r",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Run (R)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "v",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Browser1 (V)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "v",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Browser1 (V)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "b",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Browser2 (B)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "b",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Browser2 (B)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "c",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Code (C)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "c",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Code (C)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "4",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Media (4)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "4",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Media (4)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "g",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Global Note (G)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "g",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Global Note (G)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "e",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Engage (E)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "e",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Engage (E)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "1",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'AI (1)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "1",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'AI (1)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "2",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'Tools (2)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "2",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'Tools (2)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "3",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace workspace --name 'VPN (3)'" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "3",
                "modifiers": { "mandatory": ["option", "shift"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace assign-app --name $(/usr/local/bin/flashspace get-app) --workspace 'VPN (3)' --activate true" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "a",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace focus --prev-window" }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "d",
                "modifiers": { "mandatory": ["option"] }
            },
            "to": [{ "shell_command": "/usr/local/bin/flashspace focus --next-window" }],
            "type": "basic"
        }
    ]
}
```