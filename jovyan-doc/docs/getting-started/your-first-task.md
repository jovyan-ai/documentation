---
sidebar_position: 4
---

# Starting Your First Task with Jovyan AI

This quick tour shows how Jovyan AI handles a simple data analysis request from start to finish.

After you set up Jovyan AI, follow these steps:

## Step 1: Open the Jovyan AI Panel

Click the Jovyan AI icon () in the VS Code Primary Side Bar (vertical bar on the side of the window) to open the chat interface. If you don't see the icon, verify the extension is installed and enabled.

The Jovyan AI icon in the Primary Side Bar opens the chat interface.

## Step 2: Type Your Data Analysis Task

Type a clear, concise description of what you want Jovyan AI to do in the chat box at the bottom of the panel. Examples of effective tasks:

* "Load the CSV file and show me the first few rows"
* "Create a Python function that calculates the mean and standard deviation"
* "Analyze the sales data and create a visualization showing trends"
* "Generate a Jupyter notebook cell to plot a histogram of the data"

No special commands or syntax needed—just use plain English to describe your data science needs.

Enter your task in natural language - no special syntax required.

## Step 3: Send Your Task

Press Enter or click the Send icon () to the right of the input box.

## Step 4: Review and Approve Actions

Jovyan AI analyzes your request and proposes specific actions. These may include:

* **Reading files:** Shows file contents it needs to access
* **Writing to files:** Displays a diff with proposed changes (added lines in green, removed in red)
* **Executing commands:** Shows the exact command to run in your terminal
* **Creating notebook cells:** Proposes new Jupyter notebook cells with code
* **Generating visualizations:** Outlines data visualization plans
* **Asking questions:** Requests clarification when needed to proceed

Jovyan AI shows exactly what action it wants to perform and waits for your approval.

* In **Data Analysis** mode, data exploration capabilities are on by default.
* In **Code** mode, Jovyan AI focuses on code generation and refactoring.
* In **Ask** mode, Jovyan AI won't write code but will explain concepts.

:::tip
The level of autonomy is configurable, allowing you to make the agent more or less autonomous.

You can learn more about using modes and auto-approving actions.
:::

## Step 5: Iterate and Refine

Jovyan AI works iteratively. After each action, it waits for your feedback before proposing the next step. Continue this review-approve cycle until your task is complete.

After completing the task, Jovyan AI shows the final result and awaits your next instruction.

## Example: Complete Data Analysis Workflow

Let's walk through a complete example:

### Initial Request
```
"Analyze the sales data in sales.csv and create a summary report"
```

### Step-by-Step Process

1. **Data Loading:** Jovyan AI proposes to load the CSV file
2. **Data Exploration:** Shows data shape, columns, and basic statistics
3. **Data Cleaning:** Identifies and handles missing values
4. **Analysis:** Performs statistical analysis and creates visualizations
5. **Report Generation:** Creates a summary with key findings

### Final Output
- Cleaned dataset
- Statistical summary
- Visualizations (charts, graphs)
- Written analysis report
- Recommendations for next steps

## Data Science Specific Features

### Notebook Integration
When working with Jupyter notebooks, Jovyan AI can:
- Generate new cells with analysis code
- Debug existing cells
- Optimize notebook performance
- Add markdown documentation

### Visualization Generation
Jovyan AI excels at creating:
- Statistical plots (histograms, box plots, scatter plots)
- Time series visualizations
- Correlation matrices
- Interactive dashboards

### Statistical Analysis
Built-in capabilities for:
- Descriptive statistics
- Hypothesis testing
- Regression analysis
- Machine learning model training

## Conclusion

You've completed your first data analysis task. Along the way you learned:

* How to interact with Jovyan AI using natural language
* Why approval keeps you in control of the analysis process
* How iteration lets the AI refine its work
* The power of AI-assisted data science workflows

Ready for more? Explore different modes or try auto-approval to speed up repetitive tasks.

## Next Steps

* Learn about [Using Jovyan AI](../using-jovyan/chatting-with-jovyan.md)
* Explore [Core Concepts](./concepts.md)
* Check out [Advanced Features](../features/overview.md)
* Try [Custom Workflows](../advanced/custom-workflows.md)
