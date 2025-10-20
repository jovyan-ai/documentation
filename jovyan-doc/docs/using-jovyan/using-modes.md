---
sidebar_position: 2
---

# Using Modes

Modes in Jovyan AI are specialized personas that tailor the assistant's behavior to your current data science task. Each mode offers different capabilities, expertise, and access levels to help you accomplish specific analytical goals.

## Why Use Different Modes?

* **Task specialization:** Get precisely the type of assistance you need for your current data science task
* **Safety controls:** Prevent unintended data modifications when focusing on exploration or learning
* **Focused interactions:** Receive responses optimized for your current analytical activity
* **Workflow optimization:** Seamlessly transition between exploration, modeling, debugging, and reporting

## Switching Between Modes

Four ways to switch modes:

1. **Dropdown menu:** Click the selector to the left of the chat input
2. **Slash command:** Type `/data-analysis`, `/ask`, `/debug`, `/code`, or `/orchestrator` in the chat input
3. **Toggle command/Keyboard shortcut:** Use the keyboard shortcut below, applicable to your operating system. Each press cycles through the available modes in sequence, wrapping back to the first mode after reaching the end.

| Operating System | Shortcut |
| ---------------- | -------- |
| macOS            | ⌘ + .    |
| Windows          | Ctrl + . |
| Linux            | Ctrl + . |

4. **Accept suggestions:** Click on mode switch suggestions that Jovyan AI offers when appropriate

## Built-in Modes

### Code Mode

| Aspect               | Details                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| **Description**      | A skilled software engineer with expertise in programming languages, design patterns, and best practices |
| **Tool Access**      | Full access to all tool groups: read, edit, browser, command, mcp                                |
| **Ideal For**        | Writing data processing scripts, implementing algorithms, and general development                  |
| **Special Features** | Code templates, refactoring suggestions, unit test generation                                     |

**Example tasks:**
```
Create a function to validate email addresses
```

```
Refactor this code to use pandas vectorized operations
```

```
Build a data pipeline for processing customer data
```

### Ask Mode

| Aspect               | Details                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| **Description**      | A knowledgeable data science assistant focused on answering questions without changing your codebase |
| **Tool Access**      | Limited access: read, browser, mcp only (cannot edit files or run commands)                       |
| **Ideal For**        | Statistical concepts, algorithm explanations, and technical learning                             |
| **Special Features** | Optimized for informative responses without modifying your project                                |

**Example tasks:**
```
Explain the difference between correlation and causation
```

```
What's the best algorithm for this type of classification problem?
```

```
How do I interpret these statistical test results?
```

### Architect Mode

| Aspect               | Details                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Description**      | An experienced data science leader who helps design analytical systems and create implementation plans |
| **Tool Access**      | Access to read, browser, mcp, and restricted edit (markdown files only)                              |
| **Ideal For**        | System design, analytical pipeline planning, and architecture discussions                            |
| **Special Features** | Follows a structured approach from data understanding to detailed implementation planning              |

**Example tasks:**
```
Design a machine learning pipeline for customer churn prediction
```

```
Plan the architecture for a real-time data analytics system
```

```
Create a data governance framework for our organization
```

### Debug Mode

| Aspect               | Details                                                                             |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Description**      | An expert problem solver specializing in systematic troubleshooting and diagnostics |
| **Tool Access**      | Full access to all tool groups: read, edit, browser, command, mcp                   |
| **Ideal For**        | Tracking down bugs, diagnosing errors, and resolving complex analytical issues     |
| **Special Features** | Uses a methodical approach of analyzing, narrowing possibilities, and fixing issues |

**Example tasks:**
```
This function raises a ValueError, help me fix it
```

```
Why is my model giving poor performance?
```

```
Debug this data processing pipeline that's running slowly
```

### Orchestrator Mode

| Aspect               | Details                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Description**      | A strategic workflow orchestrator who coordinates complex analytical tasks by delegating them to appropriate specialized modes |
| **Tool Access**      | Limited access to create new tasks and coordinate workflows                                                         |
| **Ideal For**        | Breaking down complex data science projects into manageable subtasks assigned to specialized modes                   |
| **Special Features** | Uses the new_task tool to delegate work to other modes                                                             |

**Example tasks:**
```
Build a complete customer segmentation analysis
```

```
Create an end-to-end machine learning project
```

```
Design and implement a data quality monitoring system
```

## Custom Modes

Create your own specialized assistants for specific data science workflows:

* **ML Pipeline Mode:** Focused on machine learning model development
* **Data Validation Mode:** Specialized in data quality and validation
* **Reporting Mode:** Optimized for generating analytical reports
* **ETL Mode:** Focused on data extraction, transformation, and loading
* **Research Mode:** Specialized in statistical research and hypothesis testing

See [Custom Modes](../customization/custom-rules.md) documentation for setup instructions.

## Best Practices for Mode Selection

### Match Your Task to the Right Mode

| Task Type | Recommended Mode | Why |
|-----------|-----------------|-----|
| Build a data pipeline | Code | Focus on implementation and best practices |
| Review project | Ask | Safe learning without code changes |
| Design ML system | Architect | High-level planning and architecture |
| Fix data processing bugs | Debug | Systematic troubleshooting approach |
| Complex multi-step project | Orchestrator | Coordinate across multiple specialized modes |

### Stay in Context

Modes maintain context within a conversation. If you switch modes mid-task, you may lose some analytical context.

### Combine Modes for Complex Workflows

For comprehensive data science projects, use different modes for different phases:

1. **Architect Mode:** Plan the overall analytical approach
3. **Code Mode:** Build the processing pipeline
4. **Debug Mode:** Fix any issues that arise
5. **Ask Mode:** Document findings and explain results

## Next Steps

* Learn about [Context Mentions](./context-mentions.md) for referencing files and data
* Explore [API Provider Configuration](./api-provider-configuration.md)
* Create [Custom Modes](../customization/custom-rules.md) for your specific workflows
