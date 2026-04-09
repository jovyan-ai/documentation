---
sidebar_position: 4
---

# Troubleshooting

Common issues and their solutions. If your problem isn't listed here, check the [FAQ](/reference/faq) or reach out on [Discord](https://discord.gg/Au3sB5KftU).

## Extension Issues

### Extension not appearing in sidebar

1. Verify the extension is installed: Open Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`) and search "Jovyan"
2. Check that it's enabled (not disabled)
3. Reload the window: Command Palette > "Developer: Reload Window"
4. If using a Code OSS fork, ensure it supports VS Code Marketplace extensions

### Extension not activating

1. Check VS Code version is 1.80.0 or higher
2. Look for errors in Output panel: View > Output > select "Jovyan AI"
3. Try disabling other extensions that may conflict
4. Reinstall the extension

## Authentication Issues

### "Sign in" button not working

1. Check your internet connection
2. Try signing in from the [website](https://jovyan-ai.com) first, then return to the extension
3. Clear VS Code's secret storage: Command Palette > "Jovyan AI: Sign Out", then sign in again

### ChatGPT login failing

1. Verify your ChatGPT Plus/Pro subscription is active
2. Clear browser cookies for chat.openai.com
3. Try the authorization flow in a different browser
4. Check that popup blockers aren't preventing the auth window

### API key not working

1. Verify the key is valid and active in your provider's dashboard
2. Check that you selected the correct provider in settings
3. Ensure you have billing enabled on your provider account
4. Test the key with a simple API call using curl or Postman

## Model & Response Issues

### Slow or no responses

1. Check your internet connection
2. Verify your plan has remaining usage (see [Plans & Billing](/reference/plans-billing))
3. The model provider may be experiencing high load — try a different model
4. For BYOK users, check your API key's rate limits and quotas

### Poor quality responses

1. Add more context with `@` mentions — reference specific files and data
2. Be more specific in your request
3. Try a more capable model (e.g., Claude Opus or GPT-5.2 for complex tasks)
4. Start a new task to clear potentially noisy context
5. Use the appropriate [mode](/features/modes-ai-agent) for your task

### "Context too long" errors

1. Start a new task with the `+` button
2. Use `/condense` to [compress context](/features/slash-commands)
3. Reference specific files instead of entire folders
4. Use a model with a larger context window

## Notebook Issues

### Notebooks not being recognized

1. Ensure the Jupyter extension is installed in VS Code
2. Check that the file has the `.ipynb` extension
3. Try reopening the notebook file

### Cell execution failing

1. Verify a Python kernel is selected for the notebook
2. Check that the `jovyan.executeNotebooks` setting is enabled
3. Ensure required packages are installed in the active Python environment
4. Check the kernel connection in VS Code's status bar

## Terminal Issues

### Commands not executing

1. Check that auto-approval for terminal commands is enabled in settings
2. Verify the command is in the allowed commands list (`jovyan.allowedCommands`)
3. Check shell integration: ensure your terminal shell is supported
4. Try increasing the shell integration timeout in settings

### Terminal output not captured

1. The terminal buffer has limited content — long outputs may be truncated
2. Use `@terminal` to explicitly include terminal content in context
3. Check terminal output line limit in settings

## Still Need Help?

- **Discord**: [Join our community](https://discord.gg/Au3sB5KftU) for direct support
- **Email**: contact@jovyan-ai.com
- **Bug reports**: Use `/reportbug` in the extension to file a report with context
