---
sidebar_position: 5
---

# Tools Reference

Jovyan AI has access to a variety of tools to help you complete data science tasks. Understanding these tools helps you work more effectively.

## File Operations

### Read Files

Read any file in your workspace:

```
Show me the contents of data.csv
```

**Supported formats:**
* CSV, Excel, JSON
* Python scripts (.py)
* Jupyter notebooks (.ipynb)
* Text files

### Write Files

Create or modify files:

```
Save this analysis to results.csv
```

```
Create a new Python script with these functions
```

### Search Files

Find files by name or content:

```
Find all CSV files in the data folder
```

## Code Execution

### Run Python Code

Execute Python code directly:

```
Calculate the mean of column 'price'
```

### Run in Terminal

Execute shell commands:

```
Install the seaborn package
```

### Notebook Execution

Run Jupyter notebook cells:

```
Execute this cell and show the output
```

## Data Operations

### Load Data

Load data from various sources:

```
Load the sales data from sales.xlsx
```

**Supported sources:**
* Local files (CSV, Excel, JSON, Parquet)
* URLs
* Databases (with appropriate drivers)

### Data Transformation

Transform data with pandas:

```
Filter rows where age > 25
```

```
Group by category and calculate sum
```

### Data Validation

Check data quality:

```
Check for missing values in the dataset
```

```
Validate that all emails are in correct format
```

## Visualization

### Create Charts

Generate various types of visualizations:

```
Create a histogram of the age distribution
```

```
Make a scatter plot of height vs weight
```

**Supported chart types:**
* Line plots
* Bar charts
* Histograms
* Scatter plots
* Box plots
* Heatmaps
* And more...

### Customize Plots

Refine visualizations:

```
Change the colors to blue and add a title
```

```
Add labels to the x and y axes
```

## Analysis Tools

### Statistical Analysis

Perform statistical operations:

```
Calculate correlation between variables
```

```
Run a t-test comparing groups A and B
```

### Machine Learning

Build and evaluate models:

```
Train a linear regression model
```

```
Calculate the accuracy of the model
```

## Search Tools

### Code Search

Search your codebase:

```
Find where the process_data function is defined
```

### Documentation Search

Search documentation and help:

```
How do I use pandas groupby?
```

## Collaboration Tools

### Comments & Documentation

Generate documentation:

```
Add docstrings to all functions in this file
```

### Code Review

Get feedback on code:

```
Review this function for potential issues
```

## Advanced Tools

### Web Browser

Fetch data from the web:

```
Get the latest data from this URL
```

### Database Access

Query databases:

```
Connect to the PostgreSQL database and query the users table
```

*(Requires proper configuration and credentials)*

## Tool Permissions

Some tools require explicit permission:

* **File writes:** Jovyan AI will ask before overwriting files
* **Terminal commands:** Potentially dangerous commands need approval
* **Network access:** External requests may need confirmation

### Managing Permissions

Configure auto-approval settings in [Customization](../customization/settings.md).

## Best Practices

### Let Tools Work Together

Tools can be combined for complex tasks:

```
Load the CSV, clean missing values, create a chart, and save to PNG
```

Jovyan AI will use multiple tools in sequence.

### Understand Limitations

* Some operations may be slow for large datasets
* Network operations depend on connectivity
* Terminal commands are platform-specific

### Check Results

Always verify the output, especially for:
* Data transformations
* Statistical calculations
* Model predictions

## Next Steps

* Learn about [Chatting with Jovyan AI](./chatting-with-jovyan.md)
* Explore [Using Modes](./using-modes.md)
* Check out [Context Mentions](./context-mentions.md)
* See [Advanced Workflows](../advanced/custom-workflows.md)

