---
sidebar_position: 3
---

# Data First

Jovyan AI treats data and notebooks as first-class citizens, making data science workflows seamless and intuitive.

## Jupyter Notebook Support

### Native Understanding

Jovyan AI understands Jupyter notebooks at a deep level:

* **Cell-level operations**: Work with individual cells
* **Kernel awareness**: Knows what's in memory
* **Output understanding**: Analyzes cell outputs
* **Dependency tracking**: Understands cell dependencies

### Notebook Operations

**Create cells:**
```
Add a cell that loads the data and shows the first 5 rows
```

**Execute cells:**
```
Run this cell and show me the output
```

**Debug cells:**
```
This cell is throwing a KeyError, help me fix it
```

**Refactor cells:**
```
Split this cell into separate cells for loading, cleaning, and analysis
```

### Notebook Generation

Generate entire notebooks from descriptions:

```
Create a notebook that loads sales data, performs EDA, 
and creates visualizations
```

**Jovyan AI creates:**
* Markdown cells with explanations
* Code cells with proper structure
* Visualizations
* Summary and conclusions

## DataFrame Intelligence

### Automatic Inspection

Jovyan AI automatically understands DataFrames:

```python
df = pd.read_csv('data.csv')
```

**Jovyan AI knows:**
* Column names and types
* Shape and size
* Missing values
* Value ranges
* Sample data

### Smart Operations

Describe what you want in plain English:

```
Filter to customers who spent more than $100
```

Jovyan AI generates:
```python
df_filtered = df[df['total_spent'] > 100]
```

```
Group by category and calculate average price
```

Jovyan AI generates:
```python
df_grouped = df.groupby('category')['price'].mean()
```

### Data Quality

Automatic data quality assessment:

```
Check the data quality
```

**Jovyan AI provides:**
* Missing value report
* Duplicate detection
* Outlier identification
* Data type validation
* Statistical summary

## Visualization Intelligence

### Automatic Chart Selection

Jovyan AI chooses the right visualization:

**Request:** "Visualize the distribution of ages"
**Result:** Histogram

**Request:** "Show sales trends over time"
**Result:** Line chart

**Request:** "Compare categories by revenue"
**Result:** Bar chart

**Request:** "Show relationships between variables"
**Result:** Scatter plot or correlation heatmap

### Smart Styling

Automatically creates professional visualizations:

* Appropriate colors
* Clear labels and titles
* Legends when needed
* Proper axis scaling
* Readable fonts

### Interactive Refinement

Easily customize visualizations:

```
You: Create a scatter plot of age vs income
Agent: [Creates plot]

You: Color by gender
Agent: [Updates with color coding]

You: Add a trend line
Agent: [Adds regression line]

You: Make it larger
Agent: [Increases figure size]
```

## Data Validation

### Built-in Checks

Jovyan AI automatically validates:

* **Schema compliance**: Columns match expectations
* **Data types**: Values are appropriate types
* **Ranges**: Numerical values in valid ranges
* **Formats**: Dates, emails, etc. properly formatted
* **Business rules**: Domain-specific validations

### Example Validation

```
Validate this customer dataset
```

**Report:**
```
✓ All required columns present
✓ Data types correct
⚠ 150 missing values in 'phone' column (15%)
⚠ 5 invalid email formats detected
✗ 12 ages are negative (invalid)
ℹ Recommend: Remove invalid ages, impute missing phones

Would you like me to fix these issues?
```

## Data Transformation

### Common Transformations

Easily perform transformations:

**Missing value handling:**
```
Fill missing values in income with the median
```

**Feature engineering:**
```
Create a binary feature for high_value customers (>$1000 spent)
```

**Data type conversion:**
```
Convert the date column to datetime type
```

**Categorical encoding:**
```
One-hot encode the category column
```

### Pipeline Creation

Create reusable data pipelines:

```
Create a data cleaning pipeline for this dataset
```

**Jovyan AI creates:**
```python
def clean_data(df):
    """Clean and preprocess customer data"""
    # Remove duplicates
    df = df.drop_duplicates()
    
    # Handle missing values
    df['age'].fillna(df['age'].median(), inplace=True)
    df['income'].fillna(df['income'].median(), inplace=True)
    
    # Remove invalid values
    df = df[df['age'] >= 0]
    df = df[df['income'] >= 0]
    
    # Convert types
    df['signup_date'] = pd.to_datetime(df['signup_date'])
    
    return df

df_clean = clean_data(df)
```

## File Format Support

### Supported Formats

Jovyan AI works with various data formats:

* **CSV**: Comma-separated values
* **Excel**: .xlsx, .xls files
* **JSON**: Structured JSON data
* **Parquet**: Columnar storage
* **SQL**: Database queries
* **HDF5**: Hierarchical data
* **Pickle**: Serialized Python objects

### Automatic Format Detection

```
Load the data file
```

Jovyan AI automatically:
* Detects file format
* Uses appropriate reader
* Handles encoding issues
* Infers data types

### Format Conversion

Easily convert between formats:

```
Convert this CSV to Parquet format
```

```
Export this DataFrame to Excel with formatting
```

## Large Dataset Handling

### Memory Optimization

Jovyan AI helps with large datasets:

**Chunked reading:**
```python
# Automatically uses chunking for large files
for chunk in pd.read_csv('large_file.csv', chunksize=10000):
    process(chunk)
```

**Data type optimization:**
```
Optimize memory usage of this DataFrame
```

### Sampling

Quick analysis with sampling:

```
Load a 10% sample of the data for exploration
```

## Data Documentation

### Automatic Data Dictionary

Generate data documentation:

```
Create a data dictionary for this dataset
```

**Result:**
```markdown
# Customer Dataset

## Columns

- **customer_id** (int): Unique customer identifier
- **age** (int): Customer age in years (18-95)
- **income** (float): Annual income in USD
- **category** (str): Customer segment (A, B, C)
- **signup_date** (datetime): Account creation date

## Summary
- Rows: 10,000
- Columns: 5
- Missing Values: 150 (1.5%)
- Date Range: 2020-01-01 to 2024-12-31
```

### Profiling Reports

Comprehensive data profiling:

```
Generate a profiling report
```

Creates detailed analysis including:
* Variable types and statistics
* Missing value analysis
* Distribution plots
* Correlation analysis
* Duplicate detection

## Best Practices

### Start with Understanding

Always start by understanding your data:

```
Load the data and give me an overview
```

### Validate Early

Check data quality before analysis:

```
Validate the data and identify any issues
```

### Document Transformations

Keep track of what you've done:

```
Document the cleaning steps we've performed
```

### Version Data

Save processed data:

```
Save the cleaned data as cleaned_customers.csv
```

## Next Steps

* Explore [Workflows](./workflows.md)
* Learn about [Powerful Agents](./powerful-agents.md)
* See [Data Science Methodology](../core-concepts/data-science-methodology.md)
* Try [Advanced Workflows](../advanced/custom-workflows.md)

