# Jovyan AI Documentation

Official documentation for Jovyan AI - the AI-powered data science assistant for VS Code.

## About

This repository contains the documentation for Jovyan AI, built with [Docusaurus](https://docusaurus.io/).

Jovyan AI accelerates data science development with AI-driven code generation and task automation, specifically designed for data science teams.

## Local Development

### Prerequisites

- Node.js 20.0 or higher
- npm or yarn

### Installation

```bash
cd jovyan-doc
npm install
```

### Start Development Server

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Documentation Structure

```
docs/
├── welcome.md              # Welcome page
├── getting-started.md      # Getting started guide
├── using-jovyan/          # Basic usage
│   ├── basics.md
│   ├── modes.md
│   └── tools.md
├── core-concepts/         # Core concepts
│   ├── agents.md
│   └── data-science-methodology.md
├── features/              # Features documentation
│   ├── overview.md
│   ├── powerful-agents.md
│   ├── data-first.md
│   └── workflows.md
├── advanced/              # Advanced topics
│   ├── custom-workflows.md
│   └── team-collaboration.md
├── customization/         # Customization
│   ├── settings.md
│   └── custom-rules.md
└── faq.md                 # FAQ
```

## Contributing

We welcome contributions to improve the documentation!

### How to Contribute

1. Fork this repository
2. Create a new branch (`git checkout -b improve-docs`)
3. Make your changes
4. Test locally (`npm start`)
5. Commit your changes (`git commit -am 'Improve documentation'`)
6. Push to the branch (`git push origin improve-docs`)
7. Create a Pull Request

### Documentation Guidelines

- Write in clear, simple language
- Include code examples where applicable
- Add screenshots for UI-related documentation
- Keep formatting consistent
- Test all code examples

## Deployment

The documentation is automatically deployed when changes are merged to the main branch.

## Links

- **Website**: [jovyan-ai.com](https://jovyan-ai.com)
- **VS Code Extension**: Coming soon
- **Community**: 
  - Discord: TBA
  - Reddit: r/jovyanai
  - Twitter: @jovyanai

## License

This documentation is licensed under the MIT License - see the LICENSE file for details.

## Support

If you need help with the documentation:

1. Check the [FAQ](./jovyan-doc/docs/faq.md)
2. Search [existing issues](https://github.com/jovyan-ai/documentation/issues)
3. Create a new issue if needed
4. Contact us at [jovyan-ai.com](https://jovyan-ai.com#contact)

---

Built with ❤️ in Paris by the Jovyan AI team
