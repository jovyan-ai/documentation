---
sidebar_position: 5
---

# Code Actions

Jovyan AI integrates directly into your editor and terminal context menus, giving you quick access to AI assistance without opening the chat panel.

## Editor Actions (Right-Click on Code)

Select any code in your editor, right-click, and choose from the **Jovyan AI** submenu:

| Action | What It Does |
|--------|-------------|
| **Explain Code** | Get a plain-language explanation of the selected code |
| **Fix Code** | Identify and fix bugs or issues in the selection |
| **Improve Code** | Optimize, refactor, or enhance the selected code |
| **Add to Context** | Add the selection to the current Jovyan AI conversation |

### When to Use Each

- **Explain Code** - When you encounter unfamiliar code or need to understand complex logic
- **Fix Code** - When you have a specific error or bug in a code block
- **Improve Code** - When code works but could be cleaner, faster, or more idiomatic
- **Add to Context** - When you want to reference specific code in a broader conversation

## Terminal Actions (Right-Click in Terminal)

Right-click in the integrated terminal to access terminal-specific actions:

| Action | What It Does |
|--------|-------------|
| **Fix Command** | Diagnose and fix a failed terminal command |
| **Explain Command** | Get an explanation of a command and its output |
| **Add to Context** | Add terminal content to the current conversation |

### Common Use Cases

- A `pip install` fails with a dependency conflict — right-click and **Fix Command**
- You see unfamiliar output from a shell command — right-click and **Explain Command**
- You want Jovyan AI to see an error traceback — right-click and **Add to Context**

## How It Works

When you use a code action, Jovyan AI opens the chat panel (if not already open) and starts a response using the selected code or terminal content as context. The action is processed in your current task, so previous conversation history is preserved.

## Related

- [Working with Tasks](/features/working-with-tasks) - How tasks and actions work together
- [Keyboard Shortcuts](/reference/keyboard-shortcuts) - Quick access shortcuts
- [Slash Commands](/features/slash-commands) - Chat-based quick actions
