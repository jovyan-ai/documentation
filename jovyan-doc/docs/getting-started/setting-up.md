---
sidebar_position: 3
---

# Account Setup

Jovyan AI offers multiple ways to access AI models. Choose the option that works best for you.

## Option 1: Jovyan AI Account (Recommended)

The easiest way to get started. Sign up for a Jovyan AI account to access all major models without managing API keys.

### Benefits

- **No API key setup required** - Start immediately
- **Access to all major models** - GPT, Claude, Gemini, and more
- **30-day free trial** - Full access to Pro+ plan, no credit card required
- **Flexible subscription plans** - Starting at $20/month

### Registration Process

1. In the extension, click **"Try Jovyan AI for Free"**
2. Sign in using your Google or GitHub account
3. jovyan-ai.com will ask you to open your IDE
4. Allow the prompt to open your IDE

![Sign in to Jovyan AI account and get free credits](../../static/gifs/sign_in.gif)

That's it! You're ready to start using Jovyan AI with your free trial.

---

## Option 2: ChatGPT Account Login

If you have a ChatGPT Plus or Pro subscription, you can use your existing account.

### How It Works

This option uses OAuth to authenticate with your OpenAI/ChatGPT account, allowing you to use your subscription's model access.

### Setup Steps

1. **Open Jovyan AI Settings**
2. **Select "OpenAI ChatGPT" as the provider**
3. **Click "Sign in with ChatGPT"**
4. **Authorize in your browser**:
   - A browser window will open
   - Log in to your ChatGPT account
   - Authorize Jovyan AI to access your account
5. **Return to VS Code** - You're now connected!

![ChatGPT Login Demo](../../static/gifs/chatgpt_login.gif)

### Requirements

- An active ChatGPT Plus or Pro subscription

---

## Option 3: Use Your Own API Keys

If you have existing API keys from AI providers, you can use them directly with Jovyan AI.

### Supported Providers

| Provider | Models Available |
|----------|-----------------|
| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku |
| **OpenAI** | GPT-4o, GPT-4, GPT-3.5 Turbo, o1 |
| **Google** | Gemini 2.0, Gemini Pro |
| **AWS Bedrock** | Claude, Llama models via AWS |
| **Google Vertex AI** | Gemini, Claude via Google Cloud |
| **Mistral** | Mistral Large, Codestral |
| **DeepSeek** | DeepSeek Coder, DeepSeek Chat |
| **Groq** | Fast inference for various models |
| **xAI** | Grok models |
| **OpenRouter** | Access 100+ models through one API |

### Setup Steps

1. **Get an API key** from your chosen provider:
   - [Anthropic Console](https://console.anthropic.com/)
   - [OpenAI Platform](https://platform.openai.com/)
   - [Google AI Studio](https://aistudio.google.com/)
   - [OpenRouter](https://openrouter.ai/)

2. **Open Jovyan AI Settings**:
   - Click the **Settings** button in the Jovyan AI sidebar
   - Or use keyboard shortcut: `Cmd/Ctrl + ,`

3. **Configure your provider**:
   - Select your provider from the dropdown
   - Enter your API key
   - Choose your preferred model

4. **Save and start using**:
   - Your API key is stored securely in VS Code's secret storage
   - Select this provider as your active configuration

### Example: Setting Up Anthropic

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Create an account and generate an API key
3. In Jovyan AI settings, select **Anthropic** as the provider
4. Paste your API key
5. Select a model (e.g., Claude 3.5 Sonnet)

---

## Option 4: Local Models (Ollama/LM Studio)

Run AI models locally on your machine for privacy and offline use.

### Using Ollama

1. **Install Ollama**: Download from [ollama.ai](https://ollama.ai/)
2. **Pull a model**: `ollama pull codellama` or `ollama pull mistral`
3. **In Jovyan AI settings**:
   - Select **Ollama** as provider
   - Set base URL (default: `http://localhost:11434`)
   - Select your installed model

### Using LM Studio

1. **Install LM Studio**: Download from [lmstudio.ai](https://lmstudio.ai/)
2. **Download a model** through the LM Studio interface
3. **Start the local server** in LM Studio
4. **In Jovyan AI settings**:
   - Select **LM Studio** as provider
   - Set base URL (default: `http://localhost:1234`)
   - Select your model

---

## Switching Between Providers

You can configure multiple providers and switch between them:

1. **Create API configurations** for each provider you want to use
2. **Pin your favorites** for quick access
3. **Switch providers** using the dropdown in the chat interface

This is useful for:
- Using different models for different tasks
- Falling back to another provider if one is unavailable
- Comparing model outputs

---

## Security Notes

- **API keys are stored securely** in VS Code's secret storage
- **Keys never leave your machine** except when making API calls
- **Use environment variables** for team settings to avoid committing keys

---

## Next Steps

Once you've set up your account, you're ready to start using Jovyan AI! Continue to [Your First Task](./your-first-task.md) to learn the basics.
