---
sidebar_position: 2
---

# Custom Modes

Create custom AI personas with specific roles, instructions, and tool access.

## What are Custom Modes?

Custom modes let you define specialized AI behaviors beyond the built-in modes (Code, Data Cleaning, Architect, Ask, Debug, Orchestrator). Each custom mode can have:

- **Role definition**: What the AI persona does
- **Custom instructions**: Specific guidelines and behaviors
- **Tool groups**: Which tools the mode can use
- **File restrictions**: Limit which files the mode can edit

## Creating Custom Modes

### Using the Settings Panel

1. Open the Jovyan AI settings panel
2. Navigate to the **Modes** section
3. Click **Add Custom Mode**
4. Configure the mode settings

### Using Configuration Files

Custom modes can be defined in YAML files:

- **Global modes**: `~/.kilocodemodes` (available in all projects)
- **Project modes**: `.jovyan/modes/` directory (project-specific)

### Mode Configuration Format

```yaml
customModes:
  - slug: "ml-engineer"
    name: "ML Engineer"
    roleDefinition: "You are an expert machine learning engineer..."
    whenToUse: "Use for ML model development and optimization"
    customInstructions: |
      Focus on:
      - Model architecture design
      - Hyperparameter tuning
      - Performance optimization
    groups:
      - read
      - edit
      - command
      - mcp
```

## Configuration Options

### Required Fields

| Field | Description |
|-------|-------------|
| `slug` | Unique identifier (letters, numbers, dashes only) |
| `name` | Display name for the mode |
| `roleDefinition` | System prompt describing the AI's role |
| `groups` | Array of allowed tool groups |

### Optional Fields

| Field | Description |
|-------|-------------|
| `whenToUse` | Guidance on when to use this mode |
| `customInstructions` | Additional instructions for the AI |
| `iconName` | VS Code icon name (e.g., "codicon-beaker") |

## Tool Groups

Control which capabilities your custom mode has access to:

| Group | Tools Included |
|-------|---------------|
| `read` | Read files, search files, list files |
| `edit` | Write files, apply diffs, modify files |
| `command` | Execute terminal commands |
| `browser` | Web browsing and automation |
| `mcp` | Use MCP server tools |

### Restricting Edit Access

You can limit which files a mode can edit using regex patterns:

```yaml
groups:
  - read
  - ["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
  - browser
```

This mode can only edit Markdown files.

## Examples

### Documentation Writer

A mode focused on writing documentation:

```yaml
- slug: "docs-writer"
  name: "Documentation Writer"
  roleDefinition: |
    You are a technical documentation specialist. You excel at creating
    clear, comprehensive documentation for code and APIs.
  whenToUse: "Use when writing or updating documentation"
  customInstructions: |
    - Write clear, concise documentation
    - Include code examples where helpful
    - Follow the project's documentation style
    - Use markdown formatting effectively
  groups:
    - read
    - ["edit", { "fileRegex": "\\.(md|rst|txt)$" }]
    - browser
```

### Code Reviewer

A mode for reviewing code without making changes:

```yaml
- slug: "code-reviewer"
  name: "Code Reviewer"
  roleDefinition: |
    You are a senior code reviewer focused on code quality,
    best practices, and potential issues.
  whenToUse: "Use for reviewing code and providing feedback"
  customInstructions: |
    - Analyze code for bugs and issues
    - Suggest improvements
    - Check for security vulnerabilities
    - Do not make changes, only provide feedback
  groups:
    - read
    - browser
```

### Test Engineer

A mode specialized for testing:

```yaml
- slug: "test-engineer"
  name: "Test Engineer"
  roleDefinition: |
    You are a QA engineer specializing in test automation
    and quality assurance.
  whenToUse: "Use for writing and running tests"
  customInstructions: |
    - Write comprehensive test cases
    - Use appropriate testing frameworks
    - Focus on edge cases and error handling
    - Ensure good test coverage
  groups:
    - read
    - ["edit", { "fileRegex": "\\.(test|spec)\\.(ts|tsx|js|jsx|py)$" }]
    - command
```

## Switching to Custom Modes

### Dropdown Menu

Custom modes appear in the mode selector dropdown alongside built-in modes.

### Slash Commands

Use the mode's slug as a slash command:

```
/ml-engineer
```

### Keyboard Shortcut

Cycle through modes (including custom ones) with:
- **macOS**: `Cmd + .`
- **Windows/Linux**: `Ctrl + .`

## Mode Marketplace

Browse and install community-created modes from the marketplace:

1. Open the Jovyan AI sidebar
2. Click the **Marketplace** button
3. Browse the **Modes** section
4. Click **Install** to add a mode

## Best Practices

### Design Focused Modes

Create modes for specific tasks rather than general-purpose ones:
- **Good**: "API Documentation Writer"
- **Less Good**: "General Helper"

### Use Appropriate Tool Access

Only grant the tools needed for the mode's purpose:
- Read-only modes should not have edit access
- Modes that don't need terminal shouldn't have command access

### Provide Clear Instructions

Include specific guidance in `customInstructions`:
- What the mode should focus on
- What it should avoid
- Any specific patterns or conventions to follow

### Test Before Sharing

Before sharing a custom mode:
- Test it with various tasks
- Verify tool restrictions work as expected
- Ensure the role definition is clear and effective

## Troubleshooting

### Mode Not Appearing

1. Check the YAML syntax is valid
2. Verify the slug is unique (no duplicates)
3. Restart VS Code after adding modes

### Wrong Tool Access

1. Verify the `groups` array is correct
2. Check file regex patterns are valid
3. Ensure group names are spelled correctly

### Mode Behavior Unexpected

1. Review the `roleDefinition` for clarity
2. Check `customInstructions` for conflicts
3. Test with simpler instructions first

## Related

- [Rules & Workflows](./rules-workflows) - Define project guidelines and workflows
- [Settings](./settings) - Configure Jovyan AI
- [MCP Integration](/features/mcp) - Extend with external tools
