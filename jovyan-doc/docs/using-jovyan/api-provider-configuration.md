---
sidebar_position: 4
---

# API Provider Configuration

Jovyan AI provides its own built-in API provider that gives you access to the latest frontier coding models without the need to manage API keys. This provider offers access to frontier models such as: OpenAI (GPT-4), Anthropic (Claude), Google (Gemini), Meta (Llama), and more.

## Built-in Provider Benefits

* **No API Key Management:** Start using AI models immediately without setting up accounts
* **Frontier Model Access:** Access to the latest and most capable AI models
* **Automatic Model Selection:** Jovyan AI chooses the best model for your data science task
* **Cost Transparency:** Clear pricing and usage tracking
* **Reliability:** Enterprise-grade infrastructure and uptime

## Model Selection Guide

Jovyan AI automatically selects the most appropriate model for your task, but you can also manually choose:

### Recommended Models for Data Science

| Model | Best For | Strengths |
|-------|----------|-----------|
| **GPT-4** | Complex analysis, code generation | Excellent reasoning, code understanding |
| **Claude** | Statistical analysis, documentation | Strong analytical thinking, detailed explanations |
| **Gemini** | Data processing, visualization | Good balance of speed and capability |
| **Llama** | Open-source tasks, experimentation | Cost-effective, customizable |

### Task-Specific Recommendations

**Data Exploration:**
- Claude for statistical analysis
- GPT-4 for complex pattern recognition

**Code Generation:**
- GPT-4 for complex algorithms
- Gemini for data processing scripts

**Visualization:**
- Claude for chart recommendations
- GPT-4 for interactive dashboards

**Model Training:**
- GPT-4 for ML pipeline design
- Claude for hyperparameter optimization

## Usage and Billing

### Free Tier

New users get:
* **$20 in free credits** upon first account setup
* Access to all frontier models
* Full feature set
* No time limits

### Pay-as-you-go Pricing

* **Transparent pricing:** See exact costs before running tasks
* **No subscriptions:** Pay only for what you use
* **Automatic billing:** Top up your account as needed
* **Usage tracking:** Monitor your consumption in real-time

### Cost Optimization Tips

1. **Use appropriate models:** Don't use GPT-4 for simple tasks
2. **Batch similar requests:** Combine related analyses
3. **Monitor usage:** Check your consumption regularly
4. **Use Ask mode:** For questions that don't require code execution

## Alternative Provider Setup

While Jovyan AI's built-in provider is recommended, you can also configure external providers:

### OpenAI Configuration

1. **Get API Key:** Sign up at [OpenAI](https://platform.openai.com/)
2. **Configure in Jovyan AI:**
   - Open Settings
   - Go to API Configuration
   - Add your OpenAI API key
   - Select OpenAI as primary provider

### Anthropic Configuration

1. **Get API Key:** Sign up at [Anthropic](https://console.anthropic.com/)
2. **Configure in Jovyan AI:**
   - Open Settings
   - Go to API Configuration
   - Add your Anthropic API key
   - Select Claude as primary provider

### Google Configuration

1. **Get API Key:** Sign up at [Google AI Studio](https://aistudio.google.com/)
2. **Configure in Jovyan AI:**
   - Open Settings
   - Go to API Configuration
   - Add your Google API key
   - Select Gemini as primary provider

## Configuration Profiles

Create different profiles for different use cases:

### Development Profile
* **Model:** GPT-4
* **Use case:** Code generation and debugging
* **Settings:** Detailed explanations, code examples

### Analysis Profile
* **Model:** Claude
* **Use case:** Statistical analysis and insights
* **Settings:** Focus on accuracy, detailed reasoning

### Exploration Profile
* **Model:** Gemini
* **Use case:** Data exploration and visualization
* **Settings:** Quick responses, visual suggestions

### Research Profile
* **Model:** Llama
* **Use case:** Experimental analysis
* **Settings:** Cost-effective, open-source focus

## Advanced Configuration

### Custom Model Parameters

Configure model behavior for your specific needs:

**Temperature Settings:**
- **Low (0.1-0.3):** Deterministic, consistent results
- **Medium (0.5-0.7):** Balanced creativity and consistency
- **High (0.8-1.0):** Creative, varied responses

**Context Length:**
- **Short (4K tokens):** Quick responses, basic analysis
- **Medium (8K tokens):** Standard analysis, moderate complexity
- **Long (32K+ tokens):** Complex analysis, large datasets

### Model Switching

Configure automatic model switching based on:

* **Task complexity:** Simple tasks use faster models
* **Data size:** Large datasets use models with higher context limits
* **Cost optimization:** Balance performance and cost
* **Availability:** Fallback to alternative models if primary is unavailable

## Troubleshooting

### Common Issues

**Model Not Responding:**
- Check your internet connection
- Verify API key validity
- Try switching to a different model
- Check Jovyan AI service status

**High Costs:**
- Review your usage patterns
- Switch to more cost-effective models
- Optimize your requests
- Use Ask mode for questions

**Slow Performance:**
- Check model availability
- Try different models
- Optimize request complexity
- Check your internet speed

### Getting Support

If you encounter issues:

* **Built-in Support:** Use the help system in Jovyan AI
* **Community:** Join our Discord for real-time help
* **Documentation:** Check our comprehensive guides
* **Contact:** Reach out to our support team

## Best Practices

### Model Selection
* **Start with built-in provider:** Easiest to use and most reliable
* **Choose appropriate models:** Match model capabilities to task requirements
* **Monitor costs:** Keep track of usage and optimize accordingly
* **Test different models:** Find what works best for your workflow

### Cost Management
* **Set usage limits:** Configure monthly spending limits
* **Use efficient requests:** Be specific and concise
* **Batch operations:** Combine related tasks
* **Review regularly:** Monitor and optimize your usage patterns

### Performance Optimization
* **Use appropriate context length:** Don't exceed necessary limits
* **Optimize prompts:** Clear, specific requests work better
* **Cache results:** Save frequently used analyses
* **Parallel processing:** Run independent tasks simultaneously

## Next Steps

* Learn about [Advanced Features](../features/overview.md)
* Explore [Custom Workflows](../advanced/custom-workflows.md)
* Check out [Team Collaboration](../advanced/team-collaboration.md)
