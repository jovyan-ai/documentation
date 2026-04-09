---
sidebar_position: 1
---

# Settings

Customize Jovyan AI to work exactly the way you want.

## Accessing Settings

### In-App Settings Panel

Click the **Settings** button in the Jovyan AI sidebar to access the settings panel. This provides a user-friendly interface for configuring the most common options.

### VS Code Settings

For advanced configuration, you can also edit VS Code settings:

1. Open VS Code Settings (`Ctrl+,` or `Cmd+,`)
2. Search for "jovyan"
3. Configure your preferences

## VS Code Configuration

The following settings can be configured in VS Code's `settings.json`:

### Allowed Commands

Control which terminal commands can be auto-executed:

```json
{
  "jovyan.allowedCommands": [
    "git log",
    "git diff",
    "git show",
    "pip",
    "conda",
    "uv add",
    "uv sync"
  ]
}
```

These command prefixes are allowed when auto-approval for terminal commands is enabled.

### Custom Storage Path

Set a custom location for storing conversation history and task data:

```json
{
  "jovyan.customStoragePath": "/path/to/custom/storage"
}
```

### Notebook Execution

Enable or disable automatic notebook cell execution after editing:

```json
{
  "jovyan.executeNotebooks": true
}
```

### VS Code Language Model

Configure the VS Code Language Model API integration:

```json
{
  "jovyan.vsCodeLmModelSelector": {
    "vendor": "copilot",
    "family": "gpt-4"
  }
}
```

## In-App Settings

Most settings are configured through the Jovyan AI settings panel. Here are the main categories:

### API Configuration

- **Provider Selection**: Choose your AI provider (Anthropic, OpenAI, Google, etc.)
- **API Keys**: Securely store API keys for each provider
- **Model Selection**: Choose which model to use for each provider
- **Model Parameters**: Adjust temperature and other model settings

### Auto-Approve Settings

Control when Jovyan AI can act without explicit approval:

- **Read Operations**: Auto-approve file reading
- **Write Operations**: Auto-approve file creation and modification
- **Terminal Commands**: Auto-approve command execution (limited to allowed commands)
- **Browser Actions**: Auto-approve web browsing
- **Mode Switching**: Auto-approve switching between modes
- **Subtasks**: Auto-approve subtask creation and completion

#### Auto Review {#auto-review}

The Auto-Approve tab also includes Auto Review settings:

- **Enable Auto Review**: When enabled, an AI reviewer checks the agent's work against your original request before completing the task. If the review fails, the agent automatically iterates to fix the issues.
- **Review API Configuration**: Select which API configuration to use for reviews. This lets you use a different (e.g., cheaper or faster) model for the review step. If not set, the current active configuration is used.

See [Working with Tasks > Auto Review](/features/working-with-tasks#auto-review) for a detailed explanation of the feature.

### Context Management

- **Auto-Condense**: Automatically condense context when approaching limits
- **Max Open Tabs**: Number of open tabs to include in context
- **Max Workspace Files**: Maximum workspace files to include

### Browser Settings

- **Browser Tool**: Enable/disable browser automation
- **Viewport Size**: Set browser window size (e.g., "1280x800")
- **Screenshot Quality**: WebP quality for screenshots (0-100)
- **Remote Browser**: Connect to a remote browser instance

### Terminal Settings

- **Output Line Limit**: Maximum lines of terminal output to capture
- **Shell Integration Timeout**: Timeout for shell integration
- **Command Delay**: Delay after command execution

### Notification Settings

- **Text-to-Speech**: Enable spoken notifications
- **Sound Effects**: Enable audio feedback
- **TTS Speed**: Adjust speech rate (0.5-2.0)
- **Sound Volume**: Adjust volume level (0.0-1.0)

### Advanced Settings

- **Diff Mode**: Enable editing through diffs for cleaner changes
- **Fuzzy Match Threshold**: Precision for diff matching (0-100%)
- **Rate Limiting**: Minimum time between API requests
- **Checkpoints**: Enable automatic state checkpoints

## Import/Export Settings

### Export Settings

Use the Command Palette (`Cmd/Ctrl + Shift + P`) and run:
```
Jovyan AI: Export Settings
```

This saves your configuration to a JSON file for backup or sharing.

### Import Settings

Use the Command Palette and run:
```
Jovyan AI: Import Settings
```

This imports settings from a previously exported JSON file.

## Secret Masking

Jovyan AI automatically masks secrets (API keys, tokens, passwords, connection strings) in your files before sending them to the model. Masked values are transparently restored in generated code, so your credentials are never exposed during conversations. This works automatically — no configuration is needed.

## Best Practices

### Security

- Store API keys securely (they're stored in VS Code's secret storage)
- Use `.jovyanignore` to exclude sensitive files from context
- Be cautious with auto-approval settings, especially for write operations
- Review allowed commands before enabling command auto-execution

### Performance

- Enable checkpoints to recover from failures
- Adjust context limits based on your model's capabilities
- Use appropriate models for task complexity

### Workflow

- Configure auto-approval for repetitive safe operations
- Set up keyboard shortcuts for frequently used actions
- Customize terminal settings for your shell environment

## Troubleshooting

### Settings Not Applied

1. Check that the setting syntax is valid JSON
2. Restart VS Code after changing settings
3. Check for conflicting settings

### API Connection Issues

1. Verify your API key is correct
2. Check your network connection
3. Ensure the provider endpoint is accessible

### Terminal Issues

1. Adjust shell integration timeout for slow shells
2. Try enabling PowerShell counter workaround on Windows
3. Configure ZSH-specific settings if using Oh My Zsh

## Related

- [Custom Modes](./custom-modes) - Create specialized AI personas
- [Rules & Workflows](./rules-workflows) - Define project guidelines
- [FAQ](/reference/faq) - Frequently asked questions
