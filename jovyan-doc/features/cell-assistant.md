# Jovyan AI Cell Assistant: User Guide

The Jovyan AI Cell Assistant integrates AI capabilities directly into each cell of your notebook, assisting you in generating, modifying, and debugging code.

## Generating and Modifying Code

### 1. Activating the AI Assistant
To activate the AI Assistant, select a cell in your notebook. A button will appear below the cell input area:
- **Generate**: This button appears if the cell is empty. Click it to receive assistance in writing new code.
- **Modify**: This button appears if the cell contains code. Click it to get help with refactoring or incrementally changing the existing code.

Alternatively, use the keyboard shortcut:
- **Cmd+K** (macOS) or **Ctrl+K** (Windows/Linux) to activate the assistant while a cell is selected.

### 2. Prompting the AI
Click the "Generate" or "Modify" button (or use the shortcut) to display an input field labeled "Ask Jovyan". Here, you can type your request. Be descriptive! Examples include:
- "Write a Python function to calculate the nth Fibonacci number."
- "Import pandas and load the CSV file 'data.csv' into a DataFrame."
- "Refactor this code to use a list comprehension."
- "Change the color theme of this chart to XYZ"

Press **Enter** to submit your request to the AI. To cancel, click the cancel button or press **Escape** to close the input field and return to the "Generate" or "Modify" button.

### 3. Reviewing AI Suggestions
After submitting your prompt, the AI will process your request and generate code suggestions. These suggestions will appear in an inline diff review component below the input prompt area. This view highlights the differences between the original cell content (if any) and the AI's suggestion, with added lines typically shown in green and removed lines in red. Review the changes carefully. You will have options to:
- **Accept** the suggestion (replacing the cell content)
- **Reject** it (discarding the suggestion)

## Fixing Code Errors
If executing a code cell results in an error, a "Fix Error" button will appear at the top right corner of the cell's output area, next to the error message. Click the "Fix Error" button or use the keyboard shortcut **Shift+F** while the cell with the error is selected. The AI's suggested fix will be presented in the Diff Review component, similar to regular code generation/modification. Review and accept or reject the changes as needed.

## Best Practices
- Jovyan AI understands the full context of your notebook. Feel free to reference other parts of your notebook if needed (e.g., "make the same lift chart as for the previous model").
- Include an introduction section in markdown to explain the context and objective of the notebook, making AI suggestions more relevant and specific.
- If you're unsure of the solution at the start, feel free to make a generic prompt and use "Modify" to iterate on it.