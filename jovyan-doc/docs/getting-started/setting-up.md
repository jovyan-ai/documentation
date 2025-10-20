---
sidebar_position: 3
---

# Setting up Jovyan AI

When you sign up for Jovyan AI, you can start immediately with free models, or top up your account for the first time to get bonus credits.

To claim your bonus credits:

1. **Sign up:** Complete the registration process
2. **First top-up:** Add funds to your account and get $20 bonus credits
3. **Start Coding:** Enjoy your $20 in free credits

## Registration process

Jovyan AI provides a simple registration process that gives you access to the latest frontier coding models with your Jovyan AI login.

1. Click on "Try Jovyan AI for Free" in the extension
2. Sign in with your Google account to jovyan-ai.com
3. jovyan-ai.com will prompt you to open Visual Studio Code  
   * When using an IDE in a web browser, you will be asked to copy the API key manually instead
4. Once you allow it to Open VS Code, you must also allow VS Code to open the authorization URL

That's it - you're all set! Now you can start with your first task

## Initial Configuration

### Python Environment Setup

Before using Jovyan AI for data science tasks, ensure your Python environment is properly configured:

1. **Verify Python Installation:**
   ```bash
   python --version
   # Should show Python 3.8 or higher
   ```

2. **Install Essential Data Science Packages:**
   ```bash
   pip install pandas numpy matplotlib seaborn jupyter scikit-learn
   ```

3. **Verify Jupyter Installation:**
   ```bash
   jupyter --version
   ```

### VS Code Extensions

For the best experience, install these recommended extensions:

1. **Python** - Official Python extension by Microsoft
2. **Jupyter** - Jupyter notebook support
3. **Python Docstring Generator** - Auto-generate docstrings
4. **Python Indent** - Correct Python indentation

### Workspace Configuration

1. **Open a Data Science Project Folder:**
   - Create a new folder for your project
   - Open it in VS Code
   - Initialize a Git repository (optional but recommended)

2. **Configure Python Interpreter:**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Python: Select Interpreter"
   - Choose your Python installation

3. **Set Up Virtual Environment (Recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

## Account Settings

### API Key Management

Jovyan AI handles API keys automatically, but you can view your usage:

1. Click the Jovyan AI icon in the sidebar
2. Go to Settings
3. View your API usage and limits
4. Manage your subscription

### Model Selection

Choose the AI model that best fits your needs:

- **GPT-4:** Best for complex data analysis and code generation
- **Claude:** Excellent for statistical analysis and documentation
- **Gemini:** Good balance of speed and capability
- **Llama:** Open-source alternative with good performance

## Data Science Environment

### Sample Data Setup

Get started quickly with sample datasets:

1. **Create a data folder:**
   ```bash
   mkdir data
   cd data
   ```

2. **Download sample datasets:**
   - Use Jovyan AI to generate sample data
   - Import from popular data sources
   - Upload your own CSV files

### Jupyter Notebook Configuration

Configure Jupyter for optimal performance:

1. **Create a Jupyter config:**
   ```bash
   jupyter notebook --generate-config
   ```

2. **Set up notebook extensions:**
   ```bash
   pip install jupyter_contrib_nbextensions
   jupyter contrib nbextension install --user
   ```

## Troubleshooting Setup

### Common Issues

**Python Not Found:**
- Ensure Python is in your system PATH
- Try using `python3` instead of `python`
- Check VS Code Python extension settings

**Package Installation Errors:**
- Use virtual environments to avoid conflicts
- Try `pip install --user` for user-level installation
- Check Python version compatibility

**Jupyter Connection Issues:**
- Restart VS Code after installing Jupyter
- Check if Jupyter is running: `jupyter notebook list`
- Clear browser cache if using web interface

### Getting Help

If you encounter issues not covered here:

* Join our Discord community for real-time support
* Submit issues on GitHub
* Visit our Reddit community
* Check our comprehensive FAQ

## Next Steps

Once you're set up, you're ready to:

* Complete your [first data analysis task](./your-first-task.md)
* Learn about [core concepts](./concepts.md)
* Explore [advanced features](../features/overview.md)
