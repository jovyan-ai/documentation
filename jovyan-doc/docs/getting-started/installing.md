---
sidebar_position: 1
---

# Installing Jovyan AI

Jovyan AI is a VS Code extension that brings AI-powered data science assistance directly to your editor. Install using one of these methods:

* **VS Code Marketplace (Recommended)** - fastest method for standard VS Code users
* **Cursor Marketplace** - recommended way for Cursor users
* **Open VSX Registry** - for VS Code-compatible editors like VSCodium or Windsurf
* **Manually install the .vsix file** - direct installation from the GitHub Release

## VS Code Marketplace

:::tip
If you already have VS Code installed: Click here to install Jovyan AI
:::

alternatively, you can:

1. Open VS Code
2. Access Extensions: Click the Extensions icon in the Side Bar or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Jovyan AI"
4. Select "Jovyan AI" by Jovyan AI and click **Install**
5. Reload VS Code if prompted

After installation, find the Jovyan AI icon () in the Side Bar to open the Jovyan AI panel.

## Cursor Marketplace

:::tip
If you already have Cursor installed: Click here to install Jovyan AI
:::

alternatively, you can:

1. Open Cursor
2. Access Extensions: Click the Extensions icon in the Side Bar or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Jovyan AI"
4. Select "Jovyan AI" by Jovyan AI and click **Install**
5. Reload Cursor if prompted

After installation, find the Jovyan AI icon () in the Side Bar to open the Jovyan AI panel.

## Open VSX Registry

Open VSX Registry is an open-source alternative to the VS Code Marketplace for VS Code-compatible editors that cannot access the official marketplace due to licensing restrictions.

For VS Code-compatible editors like VSCodium, Gitpod, Eclipse Theia, and Windsurf, you can browse and install directly from the Jovyan AI page on Open VSX Registry.

1. Open your editor
2. Access the Extensions view (Side Bar icon or `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Your editor should be pre-configured to use Open VSX Registry
4. Search for "Jovyan AI"
5. Select "Jovyan AI" and click **Install**
6. Reload the editor if prompted

:::note
If your editor isn't automatically configured for Open VSX Registry, you may need to set it as your extension marketplace in settings. Consult your specific editor's documentation for instructions.
:::

## Manual Installation from VSIX

If you prefer to download and install the VSIX file directly:

1. **Download the VSIX file:**  
   * Find official releases on the Jovyan AI GitHub Releases page  
   * Download the `.vsix` file from the latest release
2. **Install in VS Code:**  
   * Open VS Code  
   * Access Extensions view  
   * Click the "..." menu in the Extensions view  
   * Select "Install from VSIX..."  
   * Browse to and select your downloaded `.vsix` file

## Prerequisites

Before installing Jovyan AI, ensure you have:

* **VS Code** version 1.80.0 or higher
* **Python** 3.8 or higher (for data science workflows)
* **Jupyter** extension (recommended for notebook support)
* An active Jovyan AI account

## Troubleshooting

**Extension Not Visible**

* Restart VS Code
* Verify Jovyan AI is listed and enabled in Extensions
* Try disabling and re-enabling the extension in Extensions
* Check Output panel for errors (View → Output, select "Jovyan AI")

**Installation Problems**

* Ensure stable internet connection
* Verify VS Code version 1.80.0 or later
* If VS Code Marketplace is inaccessible, try the Open VSX Registry method
* Check Python installation and PATH configuration

**Data Science Environment Issues**

* Verify Python is properly installed and accessible
* Install required data science packages: `pip install pandas numpy matplotlib seaborn jupyter`
* Ensure Jupyter extension is installed for notebook support

## Getting Support

If you encounter issues not covered here:

* Join our Discord community for real-time support
* Submit issues on GitHub
* Visit our Reddit community
* Check our comprehensive FAQ
