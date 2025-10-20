---
sidebar_position: 2
---

# Custom Rules

Define project-specific rules and standards to ensure code quality and consistency.

## Overview

Custom rules allow you to:

* Enforce coding standards
* Validate data requirements
* Ensure best practices
* Maintain consistency across projects

## Creating Custom Rules

### Rules File

Create a `.jovyan/rules.yml` file in your project:

```yaml
rules:
  name: "Project Data Science Rules"
  version: "1.0.0"
  
  code_quality:
    - name: "PEP 8 Compliance"
      type: style
      enforce: pep8
      max_line_length: 100
    
    - name: "Type Hints Required"
      type: typing
      require: type_hints
      exclude:
        - test_*.py
    
    - name: "Docstrings Required"
      type: documentation
      require: docstrings
      style: google
  
  data_science:
    - name: "Random Seed Required"
      type: reproducibility
      require: random_seed
      message: "Always set random seed for reproducibility"
    
    - name: "Train/Test Split Required"
      type: validation
      require: train_test_split
      min_test_size: 0.2
    
    - name: "Cross-Validation Required"
      type: validation
      require: cross_validation
      min_folds: 5
```

## Rule Types

### Code Quality Rules

**Style Rules:**

```yaml
code_quality:
  - name: "Black Formatting"
    type: formatter
    use: black
    options:
      line_length: 100
  
  - name: "Import Organization"
    type: imports
    use: isort
    profile: black
```

**Type Checking:**

```yaml
code_quality:
  - name: "Type Hints"
    type: typing
    require: type_hints
    check_return_types: true
    check_argument_types: true
```

**Documentation:**

```yaml
code_quality:
  - name: "Documentation"
    type: docs
    require_docstrings: true
    docstring_style: google
    min_docstring_length: 10
```

### Data Science Rules

**Reproducibility:**

```yaml
data_science:
  - name: "Reproducibility"
    type: reproducibility
    rules:
      - require: random_seed
      - require: version_tracking
      - require: dependency_pinning
```

**Data Validation:**

```yaml
data_science:
  - name: "Data Validation"
    type: data_quality
    rules:
      - check: missing_values
        max_percentage: 0.1
      
      - check: duplicates
        allow: false
      
      - check: data_types
        enforce: true
```

**Model Validation:**

```yaml
data_science:
  - name: "Model Validation"
    type: modeling
    rules:
      - require: train_test_split
        min_test_size: 0.2
      
      - require: cross_validation
        min_folds: 5
      
      - require: performance_metrics
        min_metrics: 3
```

### Project-Specific Rules

**File Structure:**

```yaml
project:
  - name: "File Organization"
    type: structure
    required_directories:
      - data/
      - notebooks/
      - src/
      - tests/
      - docs/
    
    required_files:
      - README.md
      - requirements.txt
      - .gitignore
```

**Naming Conventions:**

```yaml
project:
  - name: "Naming Conventions"
    type: naming
    rules:
      functions: snake_case
      classes: PascalCase
      constants: UPPER_CASE
      variables: snake_case
      notebooks: lowercase_with_underscores
```

## Rule Enforcement

### Automatic Enforcement

Run rules automatically:

```yaml
enforcement:
  on_save: true
  on_commit: true
  on_workflow: true
```

### Manual Checks

Run rules manually:

```
Check code against project rules
```

### CI/CD Integration

Add to your CI pipeline:

```yaml
# .github/workflows/quality.yml
name: Code Quality

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Check Jovyan Rules
        run: jovyan rules check .jovyan/rules.yml
```

## Rule Severity Levels

### Error

Blocks execution:

```yaml
rules:
  - name: "No Secrets in Code"
    type: security
    severity: error
    check: no_hardcoded_secrets
```

### Warning

Shows warning but continues:

```yaml
rules:
  - name: "Long Functions"
    type: complexity
    severity: warning
    max_function_length: 50
```

### Info

Informational only:

```yaml
rules:
  - name: "Consider Refactoring"
    type: suggestion
    severity: info
    check: complex_functions
```

## Conditional Rules

### Based on File Type

```yaml
rules:
  - name: "Notebook Specific"
    type: notebook
    applies_to:
      - "*.ipynb"
    rules:
      - require: markdown_cells
      - require: cell_execution_order
```

### Based on Directory

```yaml
rules:
  - name: "Production Code"
    type: quality
    applies_to:
      - "src/**/*.py"
    rules:
      - require: type_hints
      - require: docstrings
      - require: tests
      - min_coverage: 0.8
  
  - name: "Experimental Code"
    type: quality
    applies_to:
      - "experiments/**/*.py"
    rules:
      - require: docstrings
      # Relaxed rules for experiments
```

## Custom Validators

### Python Validators

Create custom validation functions:

```python
# .jovyan/validators/custom.py

def validate_data_schema(df, required_columns):
    """Validate DataFrame has required columns"""
    missing = set(required_columns) - set(df.columns)
    if missing:
        return False, f"Missing columns: {missing}"
    return True, "Schema valid"

def validate_model_performance(metrics, thresholds):
    """Validate model meets performance thresholds"""
    for metric, threshold in thresholds.items():
        if metrics.get(metric, 0) < threshold:
            return False, f"{metric} below threshold"
    return True, "Performance acceptable"
```

Use in rules:

```yaml
rules:
  - name: "Data Schema"
    type: custom
    validator: validators.custom.validate_data_schema
    params:
      required_columns:
        - customer_id
        - purchase_date
        - amount
  
  - name: "Model Performance"
    type: custom
    validator: validators.custom.validate_model_performance
    params:
      thresholds:
        accuracy: 0.85
        precision: 0.80
        recall: 0.80
```

## Rule Templates

### Standard Templates

Use pre-built rule templates:

```yaml
templates:
  - use: "standard/data-science"
    customize:
      min_test_size: 0.25
      min_cross_validation_folds: 10
  
  - use: "standard/python-quality"
    customize:
      max_line_length: 120
```

### Create Templates

Create reusable templates:

```yaml
# .jovyan/templates/financial-data.yml
template:
  name: "Financial Data Rules"
  
  rules:
    - name: "Data Validation"
      checks:
        - no_negative_prices
        - valid_dates
        - balanced_accounts
    
    - name: "Compliance"
      checks:
        - sox_compliance
        - data_retention
```

## Real-World Examples

### Example 1: Machine Learning Project

```yaml
rules:
  name: "ML Project Standards"
  
  reproducibility:
    - require: random_seed
      value: 42
    - require: requirements_file
      format: "requirements.txt"
    - require: environment_file
      format: "environment.yml"
  
  data_preparation:
    - check: missing_values
      action: document_handling
    - check: train_test_split
      min_test_size: 0.2
      stratify: required
  
  modeling:
    - require: cross_validation
      min_folds: 5
    - require: multiple_models
      min_models: 3
    - require: hyperparameter_tuning
  
  evaluation:
    - require: performance_metrics
      min_metrics:
        - accuracy
        - precision
        - recall
        - f1_score
    - require: confusion_matrix
    - require: feature_importance
  
  documentation:
    - require: model_card
      sections:
        - purpose
        - performance
        - limitations
        - usage
```

### Example 2: Data Pipeline Project

```yaml
rules:
  name: "Data Pipeline Standards"
  
  data_quality:
    - check: schema_validation
      enforce: true
    - check: data_types
      strict: true
    - check: missing_values
      max_percentage: 0.05
    - check: duplicates
      allow: false
  
  transformations:
    - require: documentation
      for_each_step: true
    - require: reversibility
      where_possible: true
    - require: error_handling
      all_operations: true
  
  testing:
    - require: unit_tests
      coverage: 0.8
    - require: integration_tests
    - require: data_validation_tests
  
  deployment:
    - require: logging
      level: INFO
    - require: monitoring
      metrics:
        - rows_processed
        - error_rate
        - execution_time
```

### Example 3: Financial Analysis

```yaml
rules:
  name: "Financial Analysis Standards"
  
  data_security:
    - check: no_sensitive_data_in_code
    - check: data_encryption
      for_storage: true
    - check: access_logging
  
  calculations:
    - require: decimal_precision
      min_precision: 4
    - require: rounding_documentation
    - check: calculation_validation
      double_entry: true
  
  compliance:
    - require: sox_compliance
    - require: audit_trail
    - require: data_retention_policy
    - check: regulatory_requirements
      jurisdiction: "US"
  
  documentation:
    - require: methodology
      detail_level: high
    - require: assumptions
      explicit: true
    - require: limitations
    - require: sign_off
```

## Best Practices

### Start Simple

Begin with essential rules:

```yaml
rules:
  - require: docstrings
  - require: type_hints
  - require: random_seed
  - check: pep8
```

Expand as needed.

### Make Rules Clear

Provide helpful messages:

```yaml
rules:
  - name: "Random Seed"
    require: random_seed
    message: |
      Set random seed for reproducibility:
      
      import random
      import numpy as np
      
      random.seed(42)
      np.random.seed(42)
```

### Use Appropriate Severity

* **Error**: Critical issues
* **Warning**: Important but not blocking
* **Info**: Suggestions and tips

### Test Rules

Test rules on existing code before enforcing:

```bash
jovyan rules check --dry-run
```

### Version Rules

Track rule changes:

```yaml
rules:
  version: "2.1.0"
  changelog:
    - "2.1.0: Added data validation rules"
    - "2.0.0: Updated to use new validation framework"
```

## Next Steps

* Configure [Settings](./settings.md)
* Create [Custom Workflows](../advanced/custom-workflows.md)
* Set up [Team Collaboration](../advanced/team-collaboration.md)
* Review [FAQ](../faq.md)

