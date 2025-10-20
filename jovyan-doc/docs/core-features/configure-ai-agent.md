---
sidebar_position: 2
---

# Configure AI Agent

Your Jovyan AI agent is defined by two key choices: **the mode** (specialized persona) and **the language model** (LLM). This guide helps you select the right combination for your data science tasks.

## Select the Right Mode

Modes are specialized personas that tailor the assistant's behavior to your task type. Each mode has different tool access and expertise, allowing you to get the right kind of help without unintended modifications.

### Available Modes

**Code Mode**
- Full access to read, edit, browser, command, and MCP tools
- For: Writing scripts, implementing algorithms, building data pipelines, refactoring code
- Example: *"Build a data pipeline for processing sales data"*

**Ask Mode**
- Read-only access (cannot edit files or run commands)
- For: Answering questions, explaining concepts, learning statistics without code changes
- Example: *"What's the best algorithm for this classification problem?"*

**Architect Mode**
- Read and markdown editing only
- For: Designing ML systems, planning architecture, creating implementation plans
- Example: *"Design a machine learning pipeline for customer churn prediction"*

**Debug Mode**
- Full access to all tools
- For: Fixing bugs, diagnosing errors, troubleshooting performance issues
- Example: *"This function raises a ValueError. Help me fix it."*

**Orchestrator Mode**
- Coordinates workflows by delegating tasks to other modes
- For: Breaking down complex multi-step projects into manageable subtasks
- Example: *"Build a complete customer segmentation analysis"*

### How to Switch Modes

There are four ways to switch modes:

**1. Dropdown menu:**
Click the mode selector to the left of the chat input and choose from the list.

**2. Slash command:**
Type one of these in the chat input:
- `/code` - Switch to Code mode
- `/ask` - Switch to Ask mode
- `/architect` - Switch to Architect mode
- `/debug` - Switch to Debug mode
- `/orchestrator` - Switch to Orchestrator mode

**3. Keyboard shortcut:**
Cycle through available modes with each press:

| Operating System | Shortcut |
|------------------|----------|
| macOS            | ⌘ + .    |
| Windows          | Ctrl + . |
| Linux            | Ctrl + . |

**4. Accept suggestions:**
Click on mode switch suggestions that Jovyan AI offers when appropriate.

**Tips:** You can switch modes at any point during a task. It's a great pattern to use Architect or Ask mode first for brainstorming, scoping, or design, and then move to Code (or Orchestrator for complex plans) and Debug for implementation and troubleshooting. Switching modes throughout a task lets you match the right tool to each stage.

## Select the Right Model

Choose the language model that powers your AI agent. Jovyan AI automatically selects appropriate models, but you can also manually choose based on your needs.

### Recommended Models

| Model                | Best For                          | Task Examples                             |
|----------------------|-----------------------------------|-------------------------------------------|
| **GPT-5**            | Complex analysis, thorough design | Design ML pipelines, complex debugging    |
| **Claude Sonnet 4.5**| Code generation, refactoring      | Build ML pipelines, refactor functions    |
| **Gemini 2.5 Pro**   | Data analysis, data visualization | Data exploration, error analysis          |

### API Providers

Providers are different services that give you access to the same language models. For example, you can access Gemini 2.5 through multiple providers—the model stays the same, only the access method changes.

#### Built-in Provider (Recommended)

Jovyan AI's built-in provider gives you access to all major models without managing API keys.

**What you get:**
* No API key setup required
* Access to GPT-4, Claude, Gemini, Llama, and more
* $20 free credits for new users
* Pay-as-you-go pricing with transparent costs
* Automatic model selection

#### Use Your Own Key (Optional)

If you have existing API keys, you can configure external providers to access the same models:

**Setup steps:**
1. Get an API key from your provider ([OpenAI](https://platform.openai.com/), [Anthropic](https://console.anthropic.com/), or [Google](https://aistudio.google.com/)).
2. Open Jovyan AI Settings (⌘/Ctrl + ,).
3. Go to API Configuration.
4. Add your API key and select it as the primary provider.

Note: When using external providers, you'll access the same models (GPT-4, Claude, Gemini) through different API endpoints.

## Next Steps

Now that you understand how to configure your AI agent, learn about [Context Management](./context-management.md) for better results and efficient cost management.
