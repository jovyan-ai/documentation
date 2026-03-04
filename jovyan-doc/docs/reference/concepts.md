---
sidebar_position: 3
---

# Concepts & Glossary

An overview of the essential ideas behind Jovyan AI.

## Key Concepts

### Language Models (LLMs)

Jovyan AI is powered by advanced language models trained on massive datasets. Models such as GPT, Claude, Gemini, and Mistral form the foundation, providing deep language understanding and the ability to generate high-quality code and text.

### AI Agents

AI agents in Jovyan are autonomous assistants capable of interpreting complex tasks, breaking them into manageable steps, and executing with a variety of tools. These agents can reason about your project, make informed decisions, and carry out actions to advance your objectives.

### Providers

Providers are services that give you access to language models. Jovyan AI offers a built-in provider so you can access all major models without managing API keys. You can also use your own API keys from providers like OpenAI, Anthropic, Google, and others.

### Context

The information available to the AI when processing your request — including files, conversation history, terminal output, and more. Better context leads to better results. See [Context & @Mentions](/features/context-mentions).

### Tasks

A **Task** is a piece of work you assign to Jovyan AI. Tasks can be as simple as "explain this function" or as complex as "build a data pipeline and visualize the results." All actions and messages within a Task are kept together in that Task's context. See [Working with Tasks](/features/working-with-tasks).

### Modes

**Modes** are specialized AI personas, each tailored for certain tasks:
- **Code** - Write code, execute commands, analyze data
- **Data Cleaning** - Focus on data quality, missing values, formatting
- **Architect** - Plan and design solutions (read-only)
- **Ask** - Answer questions without making changes (read-only)
- **Debug** - Diagnose and fix errors
- **Orchestrator** - Coordinate multi-step projects across modes

See [Modes & AI Agent](/features/modes-ai-agent).

### Rules

Markdown files in `.jovyan/rules/` that define project-specific guidelines. Rules are automatically included in the AI's context. See [Rules & Workflows](/customization/rules-workflows).

### MCP (Model Context Protocol)

An open protocol that lets Jovyan AI connect to external servers for additional tools like database access, web search, or custom APIs. See [MCP Integration](/features/mcp).

### Checkpoints

Automatic snapshots of files before Jovyan AI modifies them. You can revert any file change by clicking the Revert button in the chat history.

### Tokens

The unit of measurement for context length. Roughly 4 characters or 0.75 words per token. Models have maximum token limits that determine how much context they can process at once.
