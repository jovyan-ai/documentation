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

Sometimes you need to undo actions or branch off from an earlier prompt. Jovyan AI provides a rewind system for both conversation history and code snapshots.

### Rewind from a Previous Message

Every time Jovyan AI edits your workspace through its editing tools, it creates a **checkpoint** before writing changes. This includes normal file edits and supported notebook edits. You can use the **history** icon on any earlier user message to open rewind options:

1. **Fork Conversation From Here** - Starts a new task from that message and prefills the old prompt. Your current code stays as-is.
2. **Rewind Code to Here** - Restores code to the nearest checkpoint at or before that message. Your current conversation stays intact.
3. **Fork Conversation and Rewind Code** - Creates a new task from that message and restores code to the matching checkpoint.

If no checkpoint exists for that point in the conversation, code rewind options are unavailable and you can still fork the conversation only.

:::info
Rewind only affects code snapshots created by Jovyan AI. Files you changed manually or via bash commands are not rolled back.
:::

### Replay the Whole Task

The **Replay Task** button in the task header is a shortcut for starting over from the beginning:

1. It restores code to the task's initial checkpoint
2. It starts a fresh task with the same original prompt

This is useful when you want to retry the task with a clean workspace state.

### Restore a Specific Checkpoint

Checkpoint entries in the chat history still let you inspect and restore a specific saved snapshot. This is useful when you know the exact point you want to return to.

### Cancel and Rewrite a Response

If Jovyan AI's approach isn't what you expected, you can cancel its current response and provide new guidance:

**While Jovyan AI is responding:**
- Click the **Cancel** button to halt the current generation
- Type a clarification or correction
- Send your message to guide the AI in a different direction

**After a response is complete:**
- Use the **history** icon on an earlier message to fork from that point
- Adjust the prefilled prompt in the new task and send it again

:::info
Forking creates a new task branch from that point in history. Your current task remains available in task history.
:::

## Queued Feedback

You can type follow-up instructions while a task is still running — no need to wait for it to finish. Your messages are queued and automatically delivered to the assistant on the next turn.

A banner above the chat input shows your queued messages. Click **Send now** to interrupt the current task and deliver your feedback immediately.

## Thinking Indicator

While Jovyan AI is generating a response, an animated thinking indicator appears in the chat. Successful completions no longer show a separate status row, keeping the conversation clean. Errors and cancellations still appear inline.

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

## Freeing Up Disk Space

Over time, task checkpoints and conversation history can consume significant disk space. The task cleanup dialog lets you reclaim it without manually hunting through storage directories.

### Opening the Cleanup Dialog

Click the **trash** icon in the task history panel header to open the cleanup dialog.

### What You Can Delete

- **Old checkpoints only** — Remove saved code snapshots for tasks older than a chosen time period, while keeping the conversation history.
- **Entire tasks** — Delete the full task record (conversation + checkpoints) for tasks older than a chosen time period.

Use the time-period selector (e.g., older than 7 days, 30 days, 90 days) to control which tasks are affected.

### How It Works

- A **progress bar** tracks deletion during bulk operations so you can see how much has been cleaned up.
- **Orphaned task directories** — storage folders left behind by tasks that no longer have a matching record — are automatically detected and included in the cleanup.
- **Favorited tasks are protected** and will never be deleted by the cleanup dialog, regardless of age.

:::tip
If you use checkpoints heavily, a periodic cleanup of checkpoints older than 30 days is a good way to keep disk usage in check without losing conversation history.
:::

## Related

* [Working with Notebooks](/features/notebooks) - Notebook-specific task workflows
* [Modes & AI Agent](/features/modes-ai-agent) - Choose the right mode for your task
* [Context & @Mentions](/features/context-mentions) - Add files, data, and more to your task
* [Slash Commands](/features/slash-commands) - Quick actions like `/newtask` and `/condense`
