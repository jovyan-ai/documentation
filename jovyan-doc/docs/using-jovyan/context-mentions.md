---
sidebar_position: 3
---

# Context Mentions

Context mentions are a powerful way to provide Jovyan AI with specific information about your data science project, allowing it to perform analytical tasks more accurately and efficiently. You can use mentions to refer to files, folders, problems, and Git commits. Context mentions start with the `@` symbol.

## Types of Mentions

| Mention Type    | Format               | Description                                 | Example Usage                            |
| --------------- | -------------------- | ------------------------------------------- | ---------------------------------------- |
| **File**        | @/path/to/file.csv   | Includes file contents in request context   | "Analyze the data in @/data/sales.csv" |
| **Folder**      | @/path/to/folder/    | Provides directory structure in tree format | "What datasets are in @/data/?"   |
| **Problems**    | @problems            | Includes VS Code Problems panel diagnostics | "@problems Fix all errors in my analysis"    |
| **Terminal**    | @terminal            | Includes recent terminal command and output | "Fix the errors shown in @terminal"      |
| **Git Commit**  | @a1b2c3d             | References specific commit by hash          | "What changed in commit @a1b2c3d?"       |
| **Git Changes** | @git-changes         | Shows uncommitted changes                   | "Suggest a message for @git-changes"     |
| **URL**         | @https://example.com | Imports website content                     | "Summarize @https://pandas.pydata.org/"    |

### File Mentions

| Capability      | Details                                                       |
| --------------- | ------------------------------------------------------------- |
| **Format**      | @/path/to/file.csv (always start with / from workspace root)   |
| **Provides**    | Complete file contents with line numbers                      |
| **Supports**    | CSV, Excel, JSON, Parquet, Python scripts, Jupyter notebooks  |
| **Works in**    | Initial requests, feedback responses, and follow-up messages  |
| **Limitations** | Very large files may be truncated; binary files not supported |

**Data Science Examples:**
```
Analyze the correlation matrix in @/data/correlation_results.csv
```

```
Load @/notebooks/analysis.ipynb and explain the model performance
```

```
Check the data quality issues in @/reports/data_quality_report.json
```

### Folder Mentions

| Capability   | Details                                                |
| ------------ | ------------------------------------------------------ |
| **Format**   | @/path/to/folder/ (note trailing slash)                |
| **Provides** | Hierarchical tree display with ├── and └── prefixes    |
| **Includes** | Immediate child files and directories (not recursive)  |
| **Best for** | Understanding project structure                        |
| **Tip**      | Use with file mentions to check specific file contents |

**Data Science Examples:**
```
What datasets are available in @/data/?
```

```
Show me the structure of @/models/ and suggest which one to use
```

```
Analyze all CSV files in @/raw_data/
```

### Problems Mention

| Capability   | Details                                               |
| ------------ | ----------------------------------------------------- |
| **Format**   | @problems                                             |
| **Provides** | All errors and warnings from VS Code's problems panel |
| **Includes** | File paths, line numbers, and diagnostic messages     |
| **Groups**   | Problems organized by file for better clarity         |
| **Best for** | Fixing errors without manual copying                  |

**Data Science Examples:**
```
@problems Fix all pandas warnings in my analysis
```

```
@problems Resolve the import errors in my data processing script
```

### Terminal Mention

| Capability     | Details                                            |
| -------------- | -------------------------------------------------- |
| **Format**     | @terminal                                          |
| **Captures**   | Last command and its complete output               |
| **Preserves**  | Terminal state (doesn't clear the terminal)        |
| **Limitation** | Limited to visible terminal buffer content         |
| **Best for**   | Debugging installation errors or analyzing command output |

**Data Science Examples:**
```
@terminal Fix the pip installation errors
```

```
@terminal Analyze the model training output and suggest improvements
```

### Git Mentions

| Type                | Format       | Provides                                          | Limitations                    |
| ------------------- | ------------ | ------------------------------------------------- | ------------------------------ |
| **Commit**          | @a1b2c3d     | Commit message, author, date, and complete diff   | Only works in Git repositories |
| **Working Changes** | @git-changes | git status output and diff of uncommitted changes | Only works in Git repositories |

**Data Science Examples:**
```
What changes were made to the model in commit @a1b2c3d?
```

```
Review @git-changes and suggest a commit message for my analysis updates
```

### URL Mentions

| Capability     | Details                                          |
| -------------- | ------------------------------------------------ |
| **Format**     | @https://example.com                             |
| **Processing** | Uses headless browser to fetch content           |
| **Cleaning**   | Removes scripts, styles, and navigation elements |
| **Output**     | Converts content to Markdown for readability     |
| **Limitation** | Complex pages may not convert perfectly          |

**Data Science Examples:**
```
Summarize the API documentation at @https://scikit-learn.org/stable/modules/
```

```
Extract the dataset information from @https://archive.ics.uci.edu/ml/datasets/
```

## Data Science Specific Usage

### Working with Datasets

```
Analyze @/data/customer_data.csv and identify patterns
```

```
Compare the distributions in @/data/train.csv and @/data/test.csv
```

```
Load @/data/sales.xlsx and create visualizations for each sheet
```

### Notebook Analysis

```
Review @/notebooks/eda.ipynb and suggest improvements
```

```
Debug the errors in @/notebooks/model_training.ipynb
```

```
Extract insights from @/notebooks/final_analysis.ipynb
```

### Model and Results

```
Evaluate the performance metrics in @/results/model_evaluation.json
```

```
Compare the results from @/models/random_forest.pkl and @/models/gradient_boosting.pkl
```

```
Analyze the feature importance from @/results/feature_analysis.csv
```

## How to Use Mentions

1. Type `@` in the chat input to trigger the suggestions dropdown
2. Continue typing to filter suggestions or use arrow keys to navigate
3. Select with Enter key or mouse click
4. Combine multiple mentions in a request: "Fix @problems in @/src/analysis.py using the pattern from commit @a1b2c3d"

The dropdown automatically suggests:

* Recently opened files
* Visible folders
* Recent git commits
* Special keywords (`problems`, `terminal`, `git-changes`)

## Best Practices for Data Science

| Practice                   | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| **Use specific data paths**     | Reference exact files rather than describing them                            |
| **Use relative paths**     | Always start from workspace root: @/data/file.csv not @C:/Projects/data/file.csv |
| **Verify data references**      | Ensure paths and commit hashes are correct                                   |
| **Click mentions**         | Click mentions in chat history to open files or view content                 |
| **Eliminate copy-pasting** | Use mentions instead of manually copying data or errors                      |
| **Combine mentions**       | "Fix @problems in @/data/processing.py using the pattern from commit @a1b2c3d" |
| **Reference related files** | "Analyze @/data/raw.csv and save results to @/results/analysis.csv" |

## Data Science Workflow Examples

### Complete Analysis Pipeline
```
Load @/data/raw_sales.csv, clean missing values, create visualizations, and save results to @/results/sales_analysis.ipynb
```

### Model Comparison
```
Compare the performance of models in @/models/ and generate a report in @/reports/model_comparison.md
```

### Data Quality Assessment
```
Check @problems in @/data/validation.py and fix the data quality issues in @/data/customer_data.csv
```

### Collaborative Analysis
```
Review the changes in @git-changes and update @/notebooks/collaborative_analysis.ipynb
```

## Next Steps

* Learn about [API Provider Configuration](./api-provider-configuration.md)
* Explore [Advanced Features](../features/overview.md)
* Check out [Custom Workflows](../advanced/custom-workflows.md)
