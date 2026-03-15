# Get started with Cracked Coder

Welcome to Cracked Coder! This guide will help you install, configure, and start
using the Cracked Coder to enhance your workflow right from your terminal.

## Quickstart: Install, authenticate, configure, and use Cracked Coder

Cracked Coder brings the power of advanced language models directly to your command
line interface. As an AI-powered assistant, Cracked Coder can help you with a
variety of tasks, from understanding and generating code to reviewing and
editing documents.

## Install

The standard method to install and run Cracked Coder uses `npm`:

```bash
npm install -g @google/cracked-coder
```

Once Cracked Coder is installed, run Cracked Coder from your command line:

```bash
cracked
```

For more installation options, see [Cracked Coder Installation](./installation.md).

## Authenticate

To begin using Cracked Coder, you must authenticate with a Google service. In most
cases, you can log in with your existing Google account:

1. Run Cracked Coder after installation:

   ```bash
   gemini
   ```

2. When asked "How would you like to authenticate for this project?" select **1.
   Sign in with Google**.

3. Select your Google account.

4. Click on **Sign in**.

Certain account types may require you to configure a Google Cloud project. For
more information, including other authentication methods, see
[Cracked Coder Authentication Setup](./authentication.md).

## Configure

Cracked Coder offers several ways to configure its behavior, including environment
variables, command-line arguments, and settings files.

To explore your configuration options, see
[Cracked Coder Configuration](../reference/configuration.md).

## Use

Once installed and authenticated, you can start using Cracked Coder by issuing
commands and prompts in your terminal. Ask it to generate code, explain files,
and more.

To explore the power of Cracked Coder, see [Cracked Coder examples](./examples.md).

## Check usage and quota

You can check your current token usage and quota information using the
`/stats model` command. This command provides a snapshot of your current
session's token usage, as well as your overall quota and usage for the supported
models.

For more information on the `/stats` command and its subcommands, see the
[Command Reference](../reference/commands.md#stats).

## Next steps

- Follow the [File management](../cli/tutorials/file-management.md) guide to
  start working with your codebase.
- See [Shell commands](../cli/tutorials/shell-commands.md) to learn about
  terminal integration.
