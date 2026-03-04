---
sidebar_position: 4
---

# Context & @Mentions

Effective context management is crucial for getting accurate and relevant results from Jovyan AI. Learn how to add context to your messages, understand how context length is managed, and optimize your AI interactions.

## Understanding Context

The quality and relevance of AI output depends heavily on context. Context includes:

* **Files and data** - Code, datasets, notebooks referenced in your task
* **Conversation history** - Previous messages and responses in the current task
* **Project structure** - Directory layout and file organization
* **System state** - Terminal output, errors, and diagnostics
* **External information** - URLs, documentation, and references

Jovyan's agents automatically gather and maintain pertinent details from your codebase, data, and past conversations. Power users can also manually manage and refine this context for more precise and efficient results.

## Adding Context to Messages

### Context Mentions with @

Context mentions are the primary way to provide specific information to Jovyan AI. You reference files, folders, problems, and other elements using the `@` symbol.

#### How to Use Mentions

1. Type `@` in the chat input to trigger the suggestions dropdown
2. Continue typing to filter suggestions or use arrow keys to navigate
3. Select with Enter key or mouse click
4. Combine multiple mentions in a request

The dropdown automatically suggests:
* Recently opened files
* Visible folders
* Recent git commits

### Types of Context Mentions

#### File Mentions

Reference files with `@/path/to/file.csv` (always start with `/` from workspace root). Provides complete file contents with line numbers. Supports CSV, Excel, JSON, Parquet, Python scripts, and Jupyter notebooks. Very large files may be truncated.

*Example: Analyze the correlation matrix in @/data/correlation_results.csv*

#### Folder Mentions

Reference folders with `@/path/to/folder/` (note trailing slash). Shows hierarchical tree display with immediate child files and directories. Best for understanding project structure.

*Example: What datasets are available in @/data/?*

#### Problems Mention

Use `@problems` to include all errors and warnings from VS Code's problems panel, including file paths, line numbers, and diagnostic messages organized by file.

*Example: @problems Fix all pandas warnings in my analysis*

#### Terminal Mention

Use `@terminal` to capture the last command and its complete output. Limited to visible terminal buffer content. Best for debugging installation errors or analyzing command output.

*Example: @terminal Fix the pip installation errors*

#### Git Mentions

Reference commits with `@a1b2c3d` (commit message, author, date, and diff) or use `@git-changes` for uncommitted changes (git status and diff). Only works in Git repositories.

*Example: Review @git-changes and suggest a commit message for my analysis updates*

#### URL Mentions

Reference URLs with `@https://example.com` to fetch web content. Uses a headless browser to fetch and clean content, converting it to Markdown. Complex pages may not convert perfectly.

*Example: Summarize the API documentation at @https://scikit-learn.org/stable/modules/*

### Combining Multiple Contexts

Combine mentions for powerful, context-rich requests:

```
Fix @problems in @/src/analysis.py using the pattern from commit @a1b2c3d
```

```
Load @/data/raw_sales.csv, clean missing values, create visualizations,
and save results to @/results/sales_analysis.ipynb
```

## How Context Length is Managed

### Understanding Token Limits

Language models have a maximum context length measured in **tokens** (roughly 4 characters or 0.75 words per token). Context limits vary by model.

### Automatic Context Management

Jovyan AI manages all contextual information within a single task. It does not drop earlier parts of your context unless absolutely necessary. Instead, Jovyan uses intelligent strategies to fit as much relevant information as possible, especially for large files such as CSVs or datasets:

- When a file is mentioned, Jovyan will load small files completely, while large files (e.g., big CSVs) are intelligently summarized so the most important insights fit within the model's context budget.
- All prior context—including files, system state, and conversation history—remains accessible throughout the task.
- As the combined context (conversation, files, errors, etc.) approaches the model's maximum limit, Jovyan automatically triggers summarization. This process preserves essential details while reducing the token footprint, ensuring critical file references and recent turns are kept.

### Manual Context Control

Although modern LLMs can support large context windows, current frontier models may experience reduced performance as the amount of context increases. For tasks requiring high precision, it is recommended to keep context size as limited as possible.

#### Starting Fresh

Use the **New task** button to clear all previous context and start with a clean slate. This prevents context pollution, reduces token usage, and improves focus.

#### Condense Context

Use the `/smol` [slash command](/features/slash-commands) or the condense context button to summarize the context after completing a subtask.

#### Write to File

Instead of keeping all information in the chat context, one best practice is to ask the agent to write down key information into markdown documents to persist between tasks.

#### Use Orchestrator

Orchestrator mode can be used to break a large project or multi-part analysis into smaller, focused subtasks, each with its own isolated context. By delegating work to other modes and starting fresh contexts for each component, you avoid context length growing too large for long tasks.

### Context Length Indicators

Jovyan AI provides signals when context is getting full, such as warning messages about approaching limits, truncation notices for large files, and suggestions to start new tasks for improved performance.

## Related

- [Working with Notebooks](/features/notebooks) - How notebooks are read into context
- [Slash Commands](/features/slash-commands) - Use `/smol` to condense context
- [Settings](/customization/settings) - Configure context and auto-condense options
