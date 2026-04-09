---
sidebar_position: 3
---

# Modes & AI Agent

Your Jovyan AI agent is defined by two key choices: **the mode** (specialized persona) and **the language model** (LLM). This guide helps you select the right combination for your data science tasks.

## Select the Right Mode

Modes are specialized personas that tailor the assistant's behavior to your task type. Each mode has different tool access and expertise, allowing you to get the right kind of help without unintended modifications.

### Available Modes

**Code Mode**
- Full access to read, edit, browser, and command tools
- For: All data science tasks from data collection and cleaning to modeling and deployment
- Example: *"Build a data pipeline for processing sales data"*

**Data Cleaning Mode**
- Full access to read, edit, browser, and command tools
- For: Specialized data quality analysis, cleaning datasets, handling missing values, normalizing formats
- Example: *"Clean this dataset and handle the missing values"*

:::tip When to use Data Cleaning vs Code
Use **Data Cleaning** when your task is focused on data quality — fixing nulls, deduplicating rows, standardizing formats, validating schemas. Use **Code** for broader tasks that involve building pipelines, writing functions, or working across multiple files.
:::

**Architect Mode**
- Read and markdown editing only
- For: Planning and designing solutions before implementation
- Example: *"Design a machine learning pipeline for customer churn prediction"*

**Ask Mode**
- Read-only access (cannot edit files or run commands)
- For: Answering questions, explaining concepts, learning without making changes
- Example: *"What's the best algorithm for this classification problem?"*

**Debug Mode**
- Full access to all tools
- For: Systematic debugging, diagnosing errors, troubleshooting issues
- Example: *"This function raises a ValueError. Help me fix it."*

**Orchestrator Mode**
- Coordinates workflows by delegating tasks to other modes
- For: Breaking down complex multi-step projects into manageable subtasks
- Example: *"Build a complete customer segmentation analysis"*

### How to Switch Modes

**1. Dropdown menu:**
Click the mode selector to the left of the chat input and choose from the list.

**2. Slash command:**
Type one of these in the chat input:
- `/code` - Switch to Code mode
- `/data-cleaning` - Switch to Data Cleaning mode
- `/architect` - Switch to Architect mode
- `/ask` - Switch to Ask mode
- `/debug` - Switch to Debug mode
- `/orchestrator` - Switch to Orchestrator mode

**3. Keyboard shortcut:**
Cycle through available modes with each press:

| Operating System | Shortcut |
|------------------|----------|
| macOS            | `Cmd + .`  |
| Windows/Linux    | `Ctrl + .` |

**4. Accept suggestions:**
Click on mode switch suggestions that Jovyan AI offers when appropriate.

**Tips:** You can switch modes at any point during a task. A great pattern is to use Architect or Ask mode first for brainstorming and design, then switch to Code (or Orchestrator for complex plans) and Debug for implementation and troubleshooting.

## Select the Right Model

Choose the language model that powers your AI agent. Jovyan AI automatically selects appropriate models, but you can also manually choose based on your needs.

### Hosted Models

With a Jovyan AI subscription (Pro, Pro+, or Business), you get access to all hosted models with no API key setup required:

| Provider | Models | Best For |
|----------|--------|----------|
| **Anthropic** | Claude Opus 4.6, Claude Sonnet 4.6, Claude Sonnet 4.5, Claude Opus 4.5, Claude Haiku 4.5 | Code generation, complex reasoning, data analysis |
| **OpenAI** | GPT-5.2, GPT-5.1, GPT-5 Mini | Thorough analysis, general tasks |
| **Google** | Gemini 3.1 Pro, Gemini 3 Pro, Gemini 3 Flash, Gemini 2.5 Pro, Gemini 2.5 Flash | Data analysis, visualization, fast iteration |
| **Mistral** | Mistral Large 3 | Code generation, European language support |

See [Plans & Billing](/reference/plans-billing) for details on what's included in each plan.

### Use Your Own Key (Optional)

If you have existing API keys, you can configure external providers to access models directly:

**Setup steps:**
1. Get an API key from your provider ([OpenAI](https://platform.openai.com/), [Anthropic](https://console.anthropic.com/), or [Google](https://aistudio.google.com/)).
2. Open Jovyan AI Settings.
3. Go to API Configuration.
4. Add your API key and select it as the primary provider.

## Related

- [Custom Modes](/customization/custom-modes) - Create your own specialized modes
- [Context & @Mentions](/features/context-mentions) - Optimize context for better results
- [Plans & Billing](/reference/plans-billing) - Model availability per plan
