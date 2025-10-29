---
sidebar_position: 1
---

# Settings

Customize Jovyan AI to work exactly the way you want.

## Accessing Settings

### VS Code Settings

1. Open VS Code Settings (`Ctrl+,` or `Cmd+,`)
2. Search for "Jovyan AI"
3. Configure your preferences

### Settings File

Or edit directly in `settings.json`:

```json
{
  "jovyanai.defaultMode": "data-analysis",
  "jovyanai.autoApprove": {
    "fileWrites": false,
    "terminalCommands": false
  },
  "jovyanai.model": {
    "provider": "openai",
    "name": "gpt-4"
  }
}
```

## General Settings

### Default Mode

Set the default mode when opening Jovyan AI:

```json
{
  "jovyanai.defaultMode": "data-analysis"
}
```

**Options:**
* `data-analysis` - Data Analysis Mode
* `code` - Code Mode
* `debug` - Debug Mode
* `custom` - Your custom mode

### Auto-Start

Automatically start Jovyan AI when opening VS Code:

```json
{
  "jovyanai.autoStart": true
}
```

### Keyboard Shortcuts

Customize keyboard shortcuts:

```json
{
  "jovyanai.keyboardShortcuts": {
    "openChat": "ctrl+shift+j",
    "runWorkflow": "ctrl+shift+w",
    "switchMode": "ctrl+shift+m"
  }
}
```

## Model Configuration

### Choose Your Provider

Configure which AI model to use:

```json
{
  "jovyanai.model": {
    "provider": "openai",
    "name": "gpt-4",
    "apiKey": "your-api-key-here"
  }
}
```

**Supported providers:**
* `openai` - OpenAI GPT models
* `anthropic` - Claude models
* `azure` - Azure OpenAI
* `local` - Local models

### Model Parameters

Fine-tune model behavior:

```json
{
  "jovyanai.model": {
    "temperature": 0.7,
    "maxTokens": 4096,
    "topP": 0.9
  }
}
```

### Multiple Profiles

Use different models for different tasks:

```json
{
  "jovyanai.modelProfiles": {
    "fast": {
      "provider": "openai",
      "name": "gpt-3.5-turbo"
    },
    "powerful": {
      "provider": "openai",
      "name": "gpt-4"
    },
    "local": {
      "provider": "local",
      "endpoint": "http://localhost:11434"
    }
  },
  "jovyanai.defaultProfile": "powerful"
}
```

## Auto-Approval Settings

### File Operations

Control when Jovyan AI needs permission for file operations:

```json
{
  "jovyanai.autoApprove": {
    "fileWrites": false,
    "fileDeletes": false,
    "fileReads": true
  }
}
```

### Terminal Commands

Configure terminal command approval:

```json
{
  "jovyanai.autoApprove": {
    "terminalCommands": false,
    "safeCommands": true,
    "allowedCommands": [
      "pip install",
      "python",
      "pytest"
    ]
  }
}
```

### Network Access

Control network operations:

```json
{
  "jovyanai.autoApprove": {
    "networkAccess": false,
    "allowedDomains": [
      "api.github.com",
      "pypi.org"
    ]
  }
}
```

## Workflow Settings

### Workflow Directory

Specify where workflows are stored:

```json
{
  "jovyanai.workflows": {
    "directory": ".jovyan/workflows",
    "autoLoad": true
  }
}
```

### Default Workflow Parameters

Set default values for workflows:

```json
{
  "jovyanai.workflows": {
    "defaults": {
      "testSize": 0.2,
      "randomState": 42,
      "crossValidationFolds": 5
    }
  }
}
```

## UI Customization

### Chat Panel

Customize the chat interface:

```json
{
  "jovyanai.ui": {
    "chatPanel": {
      "position": "right",
      "width": 400,
      "fontSize": 14,
      "theme": "auto"
    }
  }
}
```

### Code Display

Configure how code is displayed:

```json
{
  "jovyanai.ui": {
    "codeDisplay": {
      "syntax Highlighting": true,
      "lineNumbers": true,
      "wordWrap": true
    }
  }
}
```

### Notifications

Control notification behavior:

```json
{
  "jovyanai.notifications": {
    "showProgress": true,
    "showErrors": true,
    "showSuccess": false,
    "position": "bottom-right"
  }
}
```

## Data Science Settings

### Notebook Preferences

Configure notebook behavior:

```json
{
  "jovyanai.notebooks": {
    "autoExecute": false,
    "clearOutputBeforeRun": true,
    "saveBeforeExecute": true
  }
}
```

### Data Handling

Set data processing preferences:

```json
{
  "jovyanai.data": {
    "maxRowsDisplay": 100,
    "inferTypes": true,
    "handleMissingValues": "auto",
    "dateFormat": "ISO8601"
  }
}
```

### Visualization Defaults

Configure default visualization settings:

```json
{
  "jovyanai.visualization": {
    "defaultLibrary": "matplotlib",
    "style": "seaborn",
    "colorPalette": "Set2",
    "dpi": 100,
    "figureSize": [10, 6]
  }
}
```

## Privacy Settings

### Data Collection

Control what data is collected:

```json
{
  "jovyanai.privacy": {
    "collectUsageStats": true,
    "collectErrorReports": true,
    "shareAnonymousData": false
  }
}
```

### Code Privacy

Protect sensitive code:

```json
{
  "jovyanai.privacy": {
    "excludePatterns": [
      "**/*secret*",
      "**/*password*",
      "**/credentials/**"
    ]
  }
}
```

## Team Settings

**Business Plan feature**

### Team Configuration

```json
{
  "jovyanai.team": {
    "teamId": "your-team-id",
    "syncWorkflows": true,
    "enforceRules": true,
    "sharedSettings": true
  }
}
```

### Budget Controls

```json
{
  "jovyanai.team": {
    "billing": {
      "monthlyBudget": 1000,
      "alertThreshold": 0.8,
      "hardLimit": true
    }
  }
}
```

## Performance Settings

### Caching

Configure caching behavior:

```json
{
  "jovyanai.performance": {
    "cacheResponses": true,
    "cacheSize": "500MB",
    "cacheDuration": 3600
  }
}
```

### Resource Limits

Set resource constraints:

```json
{
  "jovyanai.performance": {
    "maxMemory": "2GB",
    "maxExecutionTime": 300,
    "maxConcurrentTasks": 3
  }
}
```

## Advanced Settings

### Custom Modes

Define custom modes:

```json
{
  "jovyanai.customModes": {
    "mlOps": {
      "name": "MLOps Engineer",
      "description": "Specialized in ML deployment",
      "systemPrompt": "You are an MLOps engineer...",
      "tools": ["docker", "kubernetes", "mlflow"]
    }
  }
}
```

### Extension Settings

Configure extension behavior:

```json
{
  "jovyanai.extensions": {
    "enabled": true,
    "directory": ".jovyan/extensions",
    "autoUpdate": true
  }
}
```

### Logging

Configure logging:

```json
{
  "jovyanai.logging": {
    "level": "info",
    "file": ".jovyan/logs/jovyan.log",
    "maxSize": "10MB",
    "maxFiles": 5
  }
}
```

## Configuration Profiles

### Create Profiles

Save different configuration sets:

```json
{
  "jovyanai.profiles": {
    "work": {
      "model": {
        "provider": "azure",
        "name": "gpt-4"
      },
      "team": {
        "enabled": true,
        "teamId": "work-team"
      }
    },
    "personal": {
      "model": {
        "provider": "openai",
        "name": "gpt-3.5-turbo"
      },
      "team": {
        "enabled": false
      }
    }
  },
  "jovyanai.activeProfile": "work"
}
```

### Switch Profiles

Switch between profiles:

```
Jovyan AI: Switch to personal profile
```

## Import/Export Settings

### Export Settings

```bash
jovyan settings export > my-settings.json
```

### Import Settings

```bash
jovyan settings import my-settings.json
```

### Share with Team

```bash
jovyan settings export --team > team-settings.json
git add team-settings.json
git commit -m "Update team settings"
```

## Best Practices

### Security

* ✅ Store API keys in environment variables
* ✅ Use `.gitignore` for sensitive files
* ✅ Enable auto-approval only for trusted operations
* ✅ Review team settings before applying

### Performance

* ✅ Enable caching for faster responses
* ✅ Set reasonable resource limits
* ✅ Use appropriate model for task complexity

### Workflow

* ✅ Configure default workflows for common tasks
* ✅ Set up keyboard shortcuts for efficiency
* ✅ Customize UI for your preferences

## Troubleshooting

### Settings Not Applied

1. Check settings syntax (valid JSON)
2. Restart VS Code
3. Check for conflicting settings

### Performance Issues

1. Reduce cache size
2. Lower `maxConcurrentTasks`
3. Decrease `maxMemory`

### Model Errors

1. Verify API key is correct
2. Check provider endpoint
3. Ensure model name is valid

## Next Steps

* Create [Custom Rules](./custom-rules.md)
* Set up [Custom Workflows](../advanced/custom-workflows.md)
* Configure [Team Collaboration](../advanced/team-collaboration.md)
* Review [FAQ](../faq.md)

