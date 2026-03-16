---
sidebar_position: 1
---

# Working with Tasks

Learn how to create, send, and complete tasks with Jovyan AI. This guide covers everything from crafting effective requests to reviewing tool use and understanding task completion.

## What is a Task?

A **Task** is a piece of work you assign to Jovyan AI. Tasks can range from simple queries like "explain this function" to complex projects like "build a data pipeline and visualize the results." Jovyan AI decomposes tasks into actionable steps and executes them methodically, keeping all actions and messages together in that Task's context.

## How to start a Task

### Step 1: Open the Jovyan AI Panel

Click the Jovyan AI icon in the VS Code Side Bar (vertical bar on the side of the window) to open the chat interface.

**Shortcuts:**
- Windows/Linux: `Ctrl+Shift+A`
- macOS: `Cmd+Shift+A`

### Step 2: Craft Your Task Request

Type a clear, concise description of what you want Jovyan AI to do.
**What makes requests work:**

* **Be specific** - "Calculate the correlation between sales and marketing spend" beats "Analyze the data"
* **Use @ mentions** - Reference files and data directly with `@filename`. Add relevant context to the request to improve the quality of the outputs.
* **One task at a time** - Break complex analysis into manageable steps

### Step 3: Send Your Task

Press **Enter** or click the **Send** icon to the right of the input box to submit your task.

## Reviewing and Approving Actions

Once you send a task, Jovyan AI analyzes your request and proposes specific actions using various tools.
For each proposed action, Jovyan AI shows:

1. **What it wants to do** - Clear description of the action
2. **The exact details** - File paths, code to execute, commands to run, including diff of the modification

**Action buttons:**
- **Approve** - Let Jovyan AI proceed with this action
- **Reject** - Reject and revert the change.

:::tip Pro Tip
You can type a message and then click **Approve** or **Reject** to explain your decision. Simply sending a message without choosing an action is treated as a rejection.
:::

## Reverting Changes

Sometimes you need to undo actions or try a different approach. Jovyan AI provides several ways to revert changes and correct course.

### Revert File Changes with Checkpoint

Every time Jovyan AI modifies a file, it creates a **checkpoint** - a snapshot of the file before the change. This allows you to safely revert modifications if something goes wrong or if you change your mind.

**To revert a file change:**

1. Look for the checkpoint indicator in the chat history where the file was modified
2. Click the **Revert** button next to the file change
3. The file instantly returns to its pre-modification state

Checkpoints are preserved throughout the task session, so you can revert changes made several steps ago without affecting other modifications.

### Cancel and Rewrite a Response

If Jovyan AI's approach isn't what you expected, you can cancel its current response and provide new guidance:

**While Jovyan AI is responding:**
- Click the **Cancel** button to halt the current generation
- Type a clarification or correction
- Send your message to guide the AI in a different direction

**After a response is complete:**
- Click the **Delete** icon on your previous message to modify your original request
- Jovyan AI will regenerate its response based on the updated instructions

:::info
When you edit a message and regenerate, any subsequent messages are deleted, creating a new branch in your task history.
:::

## Task Completion

When the AI agent determines that your request has been fulfilled, it will suggest completing the task.
However, you are not required to accept this suggestion, you can start a new task to continue making changes or request further modifications to the current one.

### Auto Review

Auto Review adds an automatic quality check before task completion. When enabled, a separate AI reviewer evaluates the agent's work against your original request and provides a pass/fail assessment.

**How it works:**

1. The agent finishes its work and proposes completing the task
2. An AI reviewer automatically analyzes the result against your original request
3. The review streams in real-time, showing a detailed assessment
4. **If the review passes** — you see the review feedback and can choose to **Start a new task** or **Continue** with modifications
5. **If the review fails** — the feedback is sent back to the agent, which automatically iterates to fix the issues

The review checks for:
- **Requirement fulfillment** — Does the solution address all parts of your request?
- **Data science best practices** — Proper preprocessing, no data leakage, correct train/test splits
- **Machine learning quality** — Appropriate model selection, evaluation metrics, overfitting checks
- **Code quality** — Reproducibility, naming, error handling
- **Visualization** — Axis labels, titles, legends, appropriate chart types

:::tip
The review is written in your configured language. If you work in French, the review will be in French.
:::

**To enable Auto Review:**

1. Open **Settings** in the Jovyan AI panel
2. Go to the **Auto-Approve** tab
3. Scroll to **Auto Review** and check **Enable Auto Review**
4. Optionally select a different API configuration for the reviewer (useful to use a cheaper or faster model for reviews)

See [Settings > Auto-Approve > Auto Review](/customization/settings#auto-review) for configuration details.

## Related

* [Working with Notebooks](/features/notebooks) - Notebook-specific task workflows
* [Modes & AI Agent](/features/modes-ai-agent) - Choose the right mode for your task
* [Context & @Mentions](/features/context-mentions) - Add files, data, and more to your task
* [Slash Commands](/features/slash-commands) - Quick actions like `/newtask` and `/smol`
