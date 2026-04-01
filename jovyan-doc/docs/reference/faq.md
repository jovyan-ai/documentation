---
sidebar_position: 5
---

# Frequently Asked Questions

## Installation & Setup

### What are the system requirements?

* **VS Code**: Version 1.80.0 or higher with Jupyter extension
* **Operating Systems**: Windows, macOS, Linux
* **Compatible IDEs**: VS Code, Cursor, Windsurf, Positron, VS Code Insiders, and other Code OSS forks

### How do I install Jovyan AI?

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "Jovyan AI"
4. Click Install
5. Sign in with your Jovyan AI account

See [Install Jovyan AI](/quick-start/installing) for detailed instructions including deep-link installation.

### Can I use Jovyan AI without an account?

Yes, on the Free plan. You'll need to provide your own API keys from providers like OpenAI, Anthropic, or Google. See [Create Your Account](/quick-start/create-account) for all options.

## Pricing & Billing

### Is there a free trial?

Yes! New users get a 30-day free trial of the Pro plan — no credit card required. You'll have full access to all hosted models during the trial.

### What are the subscription plans?

| Plan | Price | Details |
|------|-------|---------|
| **Free** | $0/month | Bring your own API keys (BYOK) |
| **Pro** | $20/month | All hosted models, 25% more usage than API |
| **Pro+** | $50/month | 3× usage, priority support |
| **Business** | $100/month | 7× usage, dedicated support |

See [Plans & Billing](/reference/plans-billing) for full details.

### Can I use my own API keys?

Yes! The Free plan lets you use your own API keys from OpenAI, Anthropic, Google, or other providers. Paid plans also support BYOK alongside hosted models.

### What happens when I reach my usage limit?

Requests are paused until your usage resets. You can upgrade your plan anytime for more capacity, or switch to your own API keys.

### Can I change my plan?

Yes, you can upgrade, downgrade, or cancel anytime from your [account dashboard](https://jovyan-ai.com/account).

## Models

### Which models are available?

Paid plans include access to models from Anthropic (Claude), OpenAI (GPT), Google (Gemini), and Mistral. See the full list in [Plans & Billing](/reference/plans-billing).

### Can I use local models?

Yes. Jovyan AI supports Ollama and LM Studio for running models locally. See [Create Your Account](/quick-start/create-account) for setup instructions.

### Which model should I choose?

- **Complex tasks** (architecture, multi-step analysis): Claude Opus 4.6 or GPT-5.2
- **General coding and data work**: Claude Sonnet 4.6 or Gemini 2.5 Pro
- **Fast iteration and simple tasks**: Claude Haiku 4.5, GPT-5 Mini, or Gemini 2.5 Flash

## Notebooks

### Does Jovyan AI work with Jupyter notebooks?

Yes! Jovyan AI can read, create, edit, and execute notebook cells. It understands cell outputs including charts and images. See [Working with Notebooks](/features/notebooks).

### Can Jovyan AI run code?

Yes. Jovyan AI can execute terminal commands and notebook cells (with your approval or auto-approval enabled).

## IDE Compatibility

### Does Jovyan AI work with Cursor?

Yes. Install via the Cursor extension marketplace or use the [deep link](cursor:extension/jovyan-ai.jovyan).

### Does Jovyan AI work with Windsurf?

Yes. Install via the Windsurf extension marketplace or use the [deep link](windsurf:extension/jovyan-ai.jovyan).

### Does Jovyan AI work with Positron?

Yes. Install via the Positron extension marketplace or use the [deep link](positron:extension/jovyan-ai.jovyan).

## Security & Privacy

### Is my code secure?

Yes! Your code never leaves your machine except for the specific context needed to generate responses. We take security seriously and are working toward SOC2 compliance.

### Do you train models on my code?

No, we do not train models on your code or data.

### Is Jovyan AI GDPR compliant?

Yes, Jovyan AI is GDPR compliant.

### Can I use Jovyan AI with sensitive data?

Yes, we do not store or process your business data. For maximum privacy, you can use [local models](/quick-start/create-account) (Ollama/LM Studio) that never send data off your machine.

## Getting Help

### Where can I get support?

* **Documentation**: You're reading it!
* **Discord**: Join [our community](https://discord.gg/Au3sB5KftU) for direct support
* **Email**: contact@jovyan-ai.com
* **Bug reports**: Use the `/reportbug` [slash command](/features/slash-commands) in the extension
* **Troubleshooting**: See [Troubleshooting](/reference/troubleshooting) for common issues
