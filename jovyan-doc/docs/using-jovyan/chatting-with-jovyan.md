---
sidebar_position: 1
---

# Chatting with Jovyan AI

:::tip
**Bottom line:** Jovyan AI is an AI-powered data science assistant that lives in VS Code. You chat with it in plain English, and it analyzes data, creates visualizations, and writes code for you.
:::

## Quick Setup

Find the Jovyan AI icon () in VS Code's Primary Side Bar. Click it to open the chat panel.

**Lost the panel?** Go to View > Open View... and search for "Jovyan AI"

## How to Talk to Jovyan AI

**The key insight:** Just type what you want in normal English. No special commands needed.

**Good requests:**

```
Load the CSV file and show me the first few rows
```

```
Create a scatter plot showing the relationship between age and income
```

```
Find all missing values in @data/sales.csv and suggest how to handle them
```

```
Calculate summary statistics for the price column and create a histogram
```

**What makes requests work:**

* **Be specific** - "Calculate the correlation between sales and marketing spend" beats "Analyze the data"
* **Use @ mentions** - Reference files and data directly with `@filename`
* **One task at a time** - Break complex analysis into manageable steps
* **Include context** - Mention column names, data types, or specific requirements

## The Chat Interface

**Essential controls:**

* **Chat history** - See your conversation and analysis history
* **Input field** - Type your requests here (press Enter to send)
* **Action buttons** - Approve or reject Jovyan's proposed changes
* **Plus button** - Start a new analysis session
* **Mode selector** - Choose how Jovyan should approach your task

## Quick Interactions

**Click to act:**

* File paths → Opens the file
* URLs → Opens in browser
* Messages → Expand/collapse details
* Code blocks → Copy button appears
* Data visualizations → Interactive exploration

**Status signals:**

* Spinning → Jovyan is analyzing
* Red → Error occurred
* Green → Success
* Blue → Data processing

## Data Science Specific Features

### Automatic Data Loading

Jovyan AI can automatically detect and load data files:

```
Analyze the sales data
```

Jovyan will:
1. Find CSV/Excel files in your workspace
2. Load the data
3. Show basic information
4. Suggest next steps

### Smart Visualization Suggestions

When you ask for charts, Jovyan suggests appropriate types:

```
Show me the distribution of customer ages
```

Jovyan might suggest:
- Histogram for continuous data
- Bar chart for categorical data
- Box plot for comparing groups

### Statistical Analysis Integration

Built-in statistical capabilities:

```
Run a t-test comparing group A and group B
```

```
Calculate the correlation matrix for all numeric columns
```

```
Perform outlier detection using the IQR method
```

## Common Mistakes to Avoid

| Instead of this...          | Try this                                                       |
| --------------------------- | -------------------------------------------------------------- |
| "Analyze the data"           | "Calculate summary statistics for the sales column and identify trends" |
| Assuming Jovyan knows your data | Use @ to reference specific files                              |
| Multiple unrelated tasks    | Submit one focused analysis at a time                          |
| Technical jargon overload   | Clear, straightforward language works best                   |
| Vague visualization requests | "Create a scatter plot of height vs weight with blue points"   |

**Why it matters:** Jovyan AI works best when you communicate like you're talking to a smart data scientist who needs clear direction.

## Working with Different Data Types

### CSV Files
```
Load @data/customers.csv and show the first 5 rows
```

### Excel Files
```
Open @reports/sales.xlsx and analyze the Q1 sheet
```

### JSON Data
```
Parse @api/response.json and extract the user statistics
```

### Database Connections
```
Connect to the PostgreSQL database and query the users table
```

## Notebook Integration

### Creating Cells
```
Add a cell that imports pandas and loads the data
```

### Analyzing Existing Cells
```
Explain what this cell does and suggest improvements
```

### Debugging Cells
```
This cell is giving me a KeyError, can you fix it?
```

## Best Practices for Data Science

### Start with Exploration
```
Show me the shape, columns, and data types of the dataset
```

### Validate Your Data
```
Check for missing values, duplicates, and data quality issues
```

### Document Your Analysis
```
Add comments explaining each step of the analysis
```

### Save Your Work
```
Save this analysis as a Jupyter notebook and export the results to CSV
```

## Next Steps

Ready to start analyzing? Open the chat panel and describe what data you want to explore!

* Learn about [Using Modes](./using-modes.md)
* Explore [Context Mentions](./context-mentions.md)
* Check out [API Provider Configuration](./api-provider-configuration.md)
