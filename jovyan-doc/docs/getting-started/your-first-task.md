---
sidebar_position: 4
---

# First task with Jovyan AI
Starting Your First Task with Jovyan AI

This quick tour shows how Jovyan AI handles a simple data analysis request from start to finish.

After you set up Jovyan AI, follow these steps:

## Step 1: Open the Jovyan AI Panel

Click the Jovyan AI icon in the VS Code Side Bar (vertical bar on the side of the window) to open the chat interface.  
Alternatively, you can use the shortcut `Ctrl+Shift+A` (Windows/Linux) or `Cmd+Shift+A` (macOS) to quickly open Jovyan AI.  
If you don't see the icon, verify the extension is installed and enabled.

## Step 2: Type Your Data Analysis Task

Type a clear, concise description of what you want Jovyan AI to do in the chat box at the bottom of the panel. Examples of effective tasks:

* "Create a EDA for the data in folder `data`"
* "Create and tune a xgboost model on this data to predict sales"
* "Analyze the marketing data and estimate the impact of promotion campaign on traffic"

## Step 3: Send Your Task

Press Enter or click the Send icon to the right of the input box.

## Step 4: Review and Approve Actions

Jovyan AI analyzes your request and proposes specific actions. These may include:

* **Reading files:** Shows file contents it needs to access
* **Writing to files:** Displays a diff with proposed changes (added lines in green, removed in red)
* **Executing commands:** Shows the exact command to run in your terminal
* **Creating notebook cells:** Proposes new Jupyter notebook cells with code
* **Asking questions:** Requests clarification when needed to proceed
* **Switch mode:** Change to other mode more optimized for the task

Jovyan AI shows exactly what action it wants to perform and waits for your approval.

:::tip
The level of autonomy is configurable, allowing you to make the agent more or less autonomous.

You can learn more about using modes and auto-approving actions.
:::

## Step 5: Iterate and Refine

Jovyan AI works iteratively. After each action, it waits for your feedback before proposing the next step. Continue this review-approve cycle until your task is complete.

After completing the task, Jovyan AI shows the final result and awaits your next instruction.

## Conclusion
You've completed your first task. Along the way you learned:
* How to interact with Jovyan AI using natural language
* Why approval keeps you in control of the process
* How iteration lets the AI refine its work

Ready for more? Explore different modes or try auto-approval to speed up repetitive tasks.
