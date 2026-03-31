---
sidebar_position: 6
---

# Slash Commands

Slash commands are quick actions you type directly in the chat input. Type `/` to see all available commands.

## Built-in Commands

| Command | Aliases | What It Does |
|---------|---------|-------------|
| `/newtask` | | Start a new task with context carried over from the current conversation |
| `/init` | | Run checks, clarify context if needed, and propose an initialization plan |
| `/smol` | `/compact`, `/condense` | Summarize the current conversation to reduce context size |
| `/rewind` | | Open the rewind dialog to jump back to an earlier message |
| `/newrule` | | Create a new rule file in `.jovyan/rules/` based on the current conversation |
| `/reportbug` | | File a bug report with relevant context from your session |

### /newtask

Starts a new task while optionally carrying context forward. Useful when you've finished one part of a project and want to move on without losing key information.

### /init

Runs a structured project initialization workflow:

1. Run checks first (project organization/docs, package manager, Python environment, Git, DVC).
2. Ask clarification questions only if context is unclear (max 3: objective, usage, deliverable).
3. Ask you to confirm which package manager and Python environment are defaults.
4. Propose an initialization plan with findings and recommended actions.
5. If Git or DVC is missing or not working, include setup help options.
6. Execute approved steps in Code mode.
7. Complete by asking a follow-up question with a few suggested next tasks (default: 3).

`/init` stays approval-driven: it investigates first, then asks for permission before writes or commands.

### /smol (Condense Context)

When your conversation grows long, `/smol` summarizes it to free up context space. This preserves essential details while reducing token usage — helpful for long-running tasks or when you see warnings about approaching context limits.

### /rewind

Opens a picker of earlier **user messages** so you can choose where to rewind from. After selecting a message, you can:

1. Fork the conversation from that point
2. Rewind code to the nearest checkpoint for that message
3. Fork the conversation and rewind code together

If no checkpoint exists for the selected message, conversation forking is still available but code rewind is disabled.

### /newrule

Captures patterns and instructions from your current conversation as a reusable rule file. For example, if you've been correcting the AI's coding style, use `/newrule` to save those preferences for future tasks. See [Rules & Workflows](/customization/rules-workflows) for more on rules.

### /reportbug

Submits a bug report with context from your current session to help the development team diagnose issues.

## Mode-Switching Commands

Switch between modes instantly by typing:

| Command | Mode |
|---------|------|
| `/code` | Code mode |
| `/data-cleaning` | Data Cleaning mode |
| `/architect` | Architect mode |
| `/ask` | Ask mode |
| `/debug` | Debug mode |
| `/orchestrator` | Orchestrator mode |

See [Modes & AI Agent](/features/modes-ai-agent) for details on each mode.

## Custom Workflow Commands

Any rule file in your `.jovyan/rules/` directory can be invoked as a slash command. For example, if you have a file:

```
.jovyan/rules/eda-workflow.md
```

You can type `/eda-workflow` in the chat to run those instructions as a task. This turns your rules into reusable workflows.

**Example workflow file** (`.jovyan/rules/eda-workflow.md`):
```markdown
# EDA Workflow

1. Load the dataset referenced in the user's message
2. Show shape, dtypes, and first 5 rows
3. Check for missing values and duplicates
4. Generate summary statistics
5. Create distribution plots for numeric columns
6. Create a correlation heatmap
7. Summarize key findings in a markdown cell
```

## Related

- [Rules & Workflows](/customization/rules-workflows) - Create custom workflow files
- [Modes & AI Agent](/features/modes-ai-agent) - Built-in modes and when to use them
- [Context & @Mentions](/features/context-mentions) - Use `/smol` to manage context
