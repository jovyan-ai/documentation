---
sidebar_position: 3
---

# Rules

Define project-specific guidelines and instructions that Jovyan AI follows when working on your code.

## What are Rules?

Rules are markdown or text files that provide additional context and instructions to Jovyan AI. They're automatically included in the AI's context when working in your project, helping ensure consistent behavior and adherence to your project's standards.

Use rules to:

- Define coding standards and conventions
- Specify project-specific patterns to follow
- Provide context about your codebase
- Set guidelines for specific types of tasks

## Creating Rules

### Rule Locations

Rules can be stored in two locations:

- **Global rules**: `~/.jovyan/rules/` (apply to all projects)
- **Project rules**: `.jovyan/rules/` (apply to the current project)

### File Format

Rules are simple text or markdown files. Each file in the rules directory is read and included in the AI's context.

```
.jovyan/
└── rules/
    ├── coding-standards.md
    ├── testing-guidelines.md
    └── data-science-practices.md
```

### Writing Effective Rules

Rules should be clear, concise, and actionable. Here's an example:

```markdown
# Python Coding Standards

## Style
- Follow PEP 8 style guidelines
- Use type hints for all function parameters and returns
- Maximum line length: 100 characters

## Naming Conventions
- Variables: snake_case
- Classes: PascalCase
- Constants: UPPER_SNAKE_CASE

## Documentation
- All public functions must have docstrings
- Use Google-style docstrings format
- Include examples for complex functions
```

## Example Rules

### Data Science Project

```markdown
# Data Science Guidelines

## Reproducibility
- Always set random seeds at the start of notebooks
- Document all data transformations
- Pin package versions in requirements.txt

## Data Handling
- Never commit raw data to git
- Validate data schema after loading
- Handle missing values explicitly (document the approach)

## Notebooks
- Keep notebooks focused on a single analysis
- Clear outputs before committing
- Include markdown cells explaining each section
```

### Code Quality

```markdown
# Code Quality Standards

## Testing
- Write tests for all new functions
- Maintain minimum 80% code coverage
- Use pytest for Python projects

## Error Handling
- Use specific exception types
- Log errors with context
- Fail fast on invalid input

## Performance
- Profile before optimizing
- Add comments for non-obvious optimizations
- Avoid premature optimization
```

### API Development

```markdown
# API Development Guidelines

## Endpoints
- Use RESTful conventions
- Version all APIs (v1, v2, etc.)
- Return appropriate HTTP status codes

## Documentation
- Document all endpoints in OpenAPI format
- Include request/response examples
- Document error responses

## Security
- Validate all input
- Use parameterized queries
- Never log sensitive data
```

## Managing Rules

### Enabling/Disabling Rules

You can toggle individual rule files on or off in the Jovyan AI settings panel:

1. Open the Jovyan AI settings
2. Navigate to the **Rules** section
3. Toggle specific rules on or off

This is useful when you want to temporarily disable certain rules without deleting them.

### Global vs Project Rules

- **Global rules** apply everywhere and are useful for personal preferences and general standards
- **Project rules** are specific to a codebase and should be committed to version control

When both exist, they're combined—global rules are loaded first, then project rules.

## Best Practices

### Keep Rules Focused

Create separate files for different concerns:

- `coding-standards.md` - Code style and conventions
- `architecture.md` - System design guidelines
- `testing.md` - Testing requirements
- `security.md` - Security practices

### Be Specific

Vague rules are less effective:

- **Less effective**: "Write good code"
- **More effective**: "Use descriptive variable names. Avoid single-letter names except for loop counters."

### Include Context

Help the AI understand why rules exist:

```markdown
# Database Queries

Use parameterized queries for all database operations.

WHY: This prevents SQL injection attacks and improves query plan caching.

EXAMPLE:
```python
# Good
cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))

# Bad
cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")
```
```

### Version Control Project Rules

Commit `.jovyan/rules/` to your repository so team members share the same guidelines.

### Review and Update

Rules should evolve with your project:

- Review rules periodically
- Remove outdated guidelines
- Add new rules as patterns emerge

## Troubleshooting

### Rules Not Being Applied

1. Verify files are in the correct directory (`.jovyan/rules/`)
2. Check that rules are enabled in settings
3. Ensure files have valid text content

### Too Many Rules

If you have many rule files:

1. Consider consolidating related rules
2. Disable less important rules
3. Keep only the most impactful guidelines

### Rules Conflicting

If global and project rules conflict:

1. Project rules take precedence (loaded after global)
2. Make project rules more specific to override global ones
3. Disable conflicting global rules for the project

## Next Steps

- Create [Custom Modes](./custom-modes.md) for specialized behaviors
- Configure [Settings](./settings.md)
- Explore [MCP Integration](../core-features/mcp.md)
