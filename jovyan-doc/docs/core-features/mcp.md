---
sidebar_position: 4
---

# MCP Integration

Model Context Protocol (MCP) extends Jovyan AI with external tools and resources from specialized servers.

## What is MCP?

MCP (Model Context Protocol) is an open protocol that allows AI assistants to connect to external servers that provide additional tools and resources. With MCP, you can:

- Connect to databases and query data
- Integrate with external APIs and services
- Access specialized tools for your workflow
- Extend Jovyan AI's capabilities beyond built-in tools

## Setting Up MCP Servers

### Configuration Files

MCP servers are configured in JSON files:

- **Global configuration**: `~/.jovyan/mcp.json` (applies to all projects)
- **Project configuration**: `.jovyan/mcp.json` (project-specific)

### Configuration Format

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-example"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}
```

### Configuration Options

| Option | Description |
|--------|-------------|
| `command` | The command to run the server (e.g., `npx`, `node`, `python`) |
| `args` | Arguments to pass to the command |
| `env` | Environment variables for the server |

## Using MCP Tools

Once an MCP server is connected, its tools become available to Jovyan AI. You can:

1. **Ask Jovyan to use MCP tools**: Simply describe what you want to do, and Jovyan will use the appropriate MCP tool if available.

2. **View available tools**: Open the Jovyan AI settings panel to see which MCP servers are connected and what tools they provide.

## Popular MCP Servers

Here are some commonly used MCP servers:

### Filesystem Server

Access files beyond the workspace:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
    }
  }
}
```

### Database Servers

Connect to databases:

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://user:pass@host:5432/db"
      }
    }
  }
}
```

### Web Search

Add web search capabilities:

```json
{
  "mcpServers": {
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-api-key"
      }
    }
  }
}
```

## MCP Marketplace

Jovyan AI includes a marketplace for discovering and installing MCP servers:

1. Open the Jovyan AI sidebar
2. Click on the **Marketplace** button
3. Browse available MCP servers
4. Click **Install** to add a server to your configuration

The marketplace provides curated servers with one-click installation.

## Auto-Approval Settings

Control how MCP tools are approved:

- **Always allow MCP**: Automatically approve all MCP tool usage
- **Per-tool approval**: Review each MCP tool call before execution

Configure this in the Jovyan AI settings panel under **Auto-Approval Settings**.

## Troubleshooting

### Server Not Starting

1. Check that the command is installed and accessible
2. Verify the configuration syntax in `mcp.json`
3. Check for error messages in the Output panel (View > Output, select "Jovyan AI MCP")

### Tools Not Available

1. Ensure the server is running (check the status indicator in settings)
2. Verify the server provides the expected tools
3. Try restarting the MCP server

### Connection Issues

1. Check network connectivity if using remote servers
2. Verify environment variables are set correctly
3. Check server logs for authentication errors

## Best Practices

### Security

- Store API keys in environment variables, not in configuration files
- Use project-specific configuration for sensitive servers
- Review MCP tool calls before approval in untrusted projects

### Performance

- Only enable servers you actively use
- Consider server startup time when configuring many servers
- Use local servers when possible for faster response times

### Organization

- Use global configuration for servers you need everywhere
- Use project configuration for project-specific integrations
- Document custom MCP servers in your project README

## Next Steps

- Explore [Custom Modes](../customization/custom-modes.md)
- Configure [Rules](../customization/rules.md)
- Review [Settings](../customization/settings.md)
