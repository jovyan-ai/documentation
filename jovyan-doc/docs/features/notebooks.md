---
sidebar_position: 2
---

# Working with Notebooks

Jovyan AI has deep integration with Jupyter notebooks — it can read, create, edit, and execute notebook cells, making it a powerful assistant for data science workflows.

## What Jovyan AI Can Do with Notebooks

| Action | Description |
|--------|-------------|
| **Read notebooks** | Understand cell contents, outputs, images, and charts |
| **Create notebooks** | Build new `.ipynb` files from natural language descriptions |
| **Edit cells** | Modify existing code or markdown cells |
| **Add cells** | Insert new code or markdown cells at any position |
| **Delete cells** | Remove cells that are no longer needed |
| **Run cells** | Execute cells and capture their outputs |

## Creating a Notebook from Scratch

Ask Jovyan AI to create a notebook and it will build one step-by-step:

```
Create a notebook that loads sales_data.csv, shows summary statistics,
and plots monthly revenue trends
```

Jovyan AI will:
1. Create a new `.ipynb` file
2. Add import cells (pandas, matplotlib, etc.)
3. Add data loading and exploration cells
4. Add visualization cells
5. Optionally execute each cell to verify the output

## Reading and Understanding Notebooks

When you reference a notebook with `@/path/to/notebook.ipynb`, Jovyan AI reads:

- **Code cells** - The source code in each cell
- **Markdown cells** - Documentation and explanations
- **Cell outputs** - Text output, tables, error messages
- **Images and charts** - Plots, visualizations, and embedded images

This means you can ask questions like:
- "What does the chart in cell 5 show?"
- "Why is cell 8 raising an error?"
- "Summarize the results of this notebook"

## Editing Existing Cells

Jovyan AI can modify specific cells without affecting the rest of your notebook:

```
In @/analysis.ipynb, fix the plotting code in cell 3 to use a bar chart
instead of a line chart
```

Changes are shown as diffs so you can review before approving.

## Running Cells

Jovyan AI can execute notebook cells and review the outputs. This is useful for:
- Verifying that generated code works correctly
- Debugging errors in cell outputs
- Iterating on visualizations

### Auto-Execute Setting

Control whether Jovyan AI automatically runs cells after editing:

```json
{
  "jovyan.executeNotebooks": true
}
```

When enabled, cells are executed immediately after being created or edited. When disabled, Jovyan AI writes the code but lets you run it manually.

## Working with Large Notebooks

For notebooks with many cells or large outputs (e.g., big DataFrames, high-resolution images), Jovyan AI automatically summarizes outputs to fit within the model's context window. Key information is preserved while reducing the token footprint.

**Tips for large notebooks:**
- Reference specific cells when possible ("fix cell 12") rather than asking about the whole notebook
- Use the [/smol](/features/slash-commands) command to condense context if your conversation grows long
- Start a new task for unrelated notebook edits

## Python Interactive Windows

Beyond `.ipynb` files, Jovyan AI can also run code in VS Code's Python Interactive Window. This is useful for quick experiments and one-off computations without creating a full notebook file.

## Best Practices

- **Be specific about cells** - "Edit cell 3" is better than "fix the code"
- **Reference notebooks with @** - Use `@/path/to/notebook.ipynb` so Jovyan can read the current state
- **Review outputs** - Check that executed cells produce expected results before approving the next step
- **Use Data Cleaning mode** for data wrangling tasks and **Code mode** for general notebook development

## Related

- [Working with Tasks](/features/working-with-tasks) - General task workflow
- [Context & @Mentions](/features/context-mentions) - How to reference notebooks and files
- [Modes & AI Agent](/features/modes-ai-agent) - Data Cleaning mode for notebook workflows
