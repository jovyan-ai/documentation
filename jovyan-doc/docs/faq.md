---
sidebar_position: 100
---

# Frequently Asked Questions

## General Questions

### What is Jovyan AI?

Jovyan AI is an AI-powered VS Code extension specifically designed for data science teams. It automates repetitive tasks, helps with data analysis, and accelerates data science workflows.

### How is Jovyan AI different from other AI coding assistants?

Jovyan AI is built specifically for data science:

* **Data First**: Native support for Jupyter notebooks and DataFrames
* **DS Methodology**: Built-in data science best practices
* **Powerful Agents**: Can execute complex multi-step workflows
* **Team Features**: Shared workflows, standards, and analytics

### Do I need to be online to use Jovyan AI?

Yes, by default Jovyan AI uses cloud-based AI models. However, you can configure it to use local models for offline use.

## Installation & Setup

### What are the system requirements?

* **VS Code**: Version 1.80.0 or higher
* **Python**: 3.8 or higher (for data science features)
* **Operating Systems**: Windows, macOS, Linux

### How do I install Jovyan AI?

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "Jovyan AI"
4. Click Install
5. Sign in with your Jovyan AI account

### Can I use Jovyan AI without an account?

No, you need a Jovyan AI account to use the extension. You can sign up for free at [jovyan-ai.com](https://jovyan-ai.com).

## Pricing & Billing

### Is there a free trial?

Yes! The Pay-as-you-go plan includes €5 in free credits to test Jovyan AI.

### Do you charge markup on tokens?

No! With Jovyan AI, you pay the same token price as the LLM provider. We don't add any markup.

### Can I use my own API keys?

Yes! You can bring your own API keys from OpenAI, Anthropic, Azure, or other providers.

### What's included in the Business Plan?

The Business Plan ($49/mo, normally $99/mo) includes:

* Everything in Pay-as-you-go
* Team usage analytics
* Team billing & budgeting
* Team rules & workflows
* Code and data privacy
* Priority support

## Usage

### How does Jovyan AI work?

Simply describe what you want in natural language. Jovyan AI will:

1. Understand your request
2. Plan the necessary steps
3. Execute using available tools
4. Show you the results

### What can Jovyan AI do?

* Load and analyze data
* Create visualizations
* Clean and transform data
* Build machine learning models
* Generate code and documentation
* Debug errors
* And much more!

### Can Jovyan AI work with Jupyter notebooks?

Yes! Jovyan AI has first-class support for Jupyter notebooks. It can:

* Generate cells from descriptions
* Execute and debug cells
* Refactor notebook code
* Convert between formats

### What data formats are supported?

* CSV, Excel, JSON
* Parquet, HDF5
* SQL databases
* Pickle files
* And more...

### Can Jovyan AI access my database?

Yes, with proper configuration and credentials, Jovyan AI can connect to databases like PostgreSQL, MySQL, etc.

## Security & Privacy

### Is my code secure?

Yes! Your code never leaves your machine except for the specific context needed to generate responses. We take security seriously and are working toward SOC2 compliance.

### Do you train models on my code?

No, we do not train models on your code or data.

### Is Jovyan AI GDPR compliant?

Yes, Jovyan AI is GDPR compliant.

### Can I use Jovyan AI with sensitive data?

Yes, but be aware that context is sent to AI model providers. For highly sensitive data, consider:

* Using local models
* Configuring privacy settings
* Setting up data exclusion patterns

## Team Usage

### How do teams get access?

Join the waitlist at [jovyan-ai.com](https://jovyan-ai.com) and we'll reach out with next steps.

### Can we share workflows across the team?

Yes! The Business Plan includes team workflow sharing and standardization.

### How does team billing work?

With the Business Plan, you get centralized billing, budget controls, and usage analytics for your entire team.

### Can we enforce coding standards?

Yes! You can create custom rules and workflows that all team members must follow.

## Technical Questions

### Which AI models does Jovyan AI use?

Jovyan AI supports:

* OpenAI (GPT-4, GPT-3.5)
* Anthropic (Claude)
* Azure OpenAI
* Local models (via Ollama, etc.)

You can choose which model to use in settings.

### Can I use local models?

Yes! Jovyan AI supports local models for offline use or enhanced privacy. See [Settings](./customization/settings.md) for configuration.

### Does it work offline?

With local models configured, yes. Otherwise, an internet connection is required.

### How do I report bugs?

* Open an issue on [GitHub](https://github.com/jovyan-ai/documentation/issues)
* Contact support at [jovyan-ai.com](https://jovyan-ai.com#contact)
* Ask in our Discord community

## Performance

### Why is Jovyan AI slow sometimes?

Performance depends on:

* AI model response time
* Complexity of the task
* Size of data being processed
* Network connection

Tips to improve performance:
* Use faster models for simple tasks
* Enable caching in settings
* Sample large datasets

### Can Jovyan AI handle large datasets?

Jovyan AI can work with large datasets, but may suggest sampling for exploration. For very large data, consider:

* Using chunked processing
* Working with samples
* Using database queries instead of loading all data

### Is there a limit on requests?

* **Pay-as-you-go**: No request limits or throttling
* **Business Plan**: No request limits or throttling

You're only limited by your API provider's rate limits.

## Troubleshooting

### Jovyan AI isn't responding

1. Check your internet connection
2. Verify your API key is valid
3. Check VS Code output panel for errors
4. Restart VS Code

### I'm getting authentication errors

1. Sign out and sign back in
2. Check your account status at [jovyan-ai.com](https://jovyan-ai.com)
3. Ensure your API key is correct (if using your own)

### The code Jovyan AI generated doesn't work

Jovyan AI is powerful but not perfect. If code doesn't work:

1. Read the error message
2. Ask Jovyan AI to fix it: "This code gives error X, please fix"
3. Provide more context about your setup

### How do I reset Jovyan AI?

To reset to default settings:

1. Open VS Code settings
2. Search for "Jovyan AI"
3. Click "Reset to Defaults"

Or manually delete configuration files:
```bash
rm -rf ~/.jovyan
rm -rf .jovyan/
```

## Best Practices

### How can I get better results?

* Be specific in your requests
* Provide context and requirements
* Break complex tasks into steps
* Review and iterate on results

### Should I review the generated code?

Yes! Always review generated code before using it in production. Jovyan AI is a tool to assist you, not replace your judgment.

### How can I make my team more productive with Jovyan AI?

* Create shared workflows
* Establish team rules and standards
* Use team analytics to identify training needs
* Share best practices and tips

## Getting Help

### Where can I get support?

* **Documentation**: You're reading it!
* **Discord**: Join our community
* **Reddit**: r/jovyanai
* **Email**: support@jovyan-ai.com
* **Priority Support**: Available with Business Plan

### How do I request a feature?

* Open a feature request on [GitHub](https://github.com/jovyan-ai/documentation/issues)
* Discuss in our Discord community
* Contact us at [jovyan-ai.com](https://jovyan-ai.com#contact)

### Where can I see what's new?

* Check our [changelog](https://jovyan-ai.com/changelog)
* Follow us on Twitter
* Join our Discord for announcements

## Contributing

### Can I contribute to Jovyan AI?

Yes! We welcome contributions:

* Documentation improvements
* Bug reports
* Feature suggestions
* Community support

### How do I share my workflows?

Share your workflows with the community:

1. Export your workflow
2. Submit a PR to our workflow repository
3. Share in Discord or Reddit

## Still Have Questions?

Can't find what you're looking for? 

* Check our [documentation](./welcome.md)
* Join our [Discord community](#)
* Contact [support](https://jovyan-ai.com#contact)

We're here to help! 🚀

