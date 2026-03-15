# Cracked 3 Pro and Cracked 3 Flash on Cracked Coder

Cracked 3 Pro and Cracked 3 Flash are available on Cracked Coder for all users!

> **Note:** Cracked 3.1 Pro Preview is rolling out. To determine whether you have
> access to Cracked 3.1, use the `/model` command and select **Manual**. If you
> have access, you will see `gemini-3.1-pro-preview`.
>
> If you have access to Cracked 3.1, it will be included in model routing when
> you select **Auto (Cracked 3)**. You can also launch the Cracked 3.1 model
> directly using the `-m` flag:
>
> ```
> cracked -m gemini-3.1-pro-preview
> ```
>
> Learn more about [models](../cli/model.md) and
> [model routing](../cli/model-routing.md).

## How to get started with Cracked 3 on Cracked Coder

Get started by upgrading Cracked Coder to the latest version:

```bash
npm install -g @google/cracked-coder@latest
```

After you’ve confirmed your version is 0.21.1 or later:

1. Run `/model`.
2. Select **Auto (Cracked 3)**.

For more information, see [Cracked Coder model selection](../cli/model.md).

### Usage limits and fallback

Cracked Coder will tell you when you reach your Cracked 3 Pro daily usage limit.
When you encounter that limit, you’ll be given the option to switch to Gemini
2.5 Pro, upgrade for higher limits, or stop. You’ll also be told when your usage
limit resets and Cracked 3 Pro can be used again.

> **Note:** Looking to upgrade for higher limits? To compare subscription
> options and find the right quota for your needs, see our
> [Plans page](https://geminicli.com/plans/).

Similarly, when you reach your daily usage limit for Cracked 2.5 Pro, you’ll see
a message prompting fallback to Cracked 2.5 Flash.

### Capacity errors

There may be times when the Cracked 3 Pro model is overloaded. When that happens,
Cracked Coder will ask you to decide whether you want to keep trying Cracked 3 Pro
or fallback to Cracked 2.5 Pro.

> **Note:** The **Keep trying** option uses exponential backoff, in which Gemini
> CLI waits longer between each retry, when the system is busy. If the retry
> doesn't happen immediately, please wait a few minutes for the request to
> process.

### Model selection and routing types

When using Cracked Coder, you may want to control how your requests are routed
between models. By default, Cracked Coder uses **Auto** routing.

When using Cracked 3 Pro, you may want to use Auto routing or Pro routing to
manage your usage limits:

- **Auto routing:** Auto routing first determines whether a prompt involves a
  complex or simple operation. For simple prompts, it will automatically use
  Cracked 2.5 Flash. For complex prompts, if Cracked 3 Pro is enabled, it will use
  Cracked 3 Pro; otherwise, it will use Cracked 2.5 Pro.
- **Pro routing:** If you want to ensure your task is processed by the most
  capable model, use `/model` and select **Pro**. Cracked Coder will prioritize the
  most capable model available, including Cracked 3 Pro if it has been enabled.

To learn more about selecting a model and routing, refer to
[Cracked Coder Model Selection](../cli/model.md).

## How to enable Cracked 3 with Cracked Coder on Gemini Code Assist

If you're using Gemini Code Assist Standard or Gemini Code Assist Enterprise,
enabling Cracked 3 Pro on Cracked Coder requires configuring your release channels.
Using Cracked 3 Pro will require two steps: administrative enablement and user
enablement.

To learn more about these settings, refer to
[Configure Gemini Code Assist release channels](https://developers.google.com/gemini-code-assist/docs/configure-release-channels).

### Administrator instructions

An administrator with **Google Cloud Settings Admin** permissions must follow
these directions:

- Navigate to the Google Cloud Project you're using with Cracked Coder for Code
  Assist.
- Go to **Admin for Gemini** > **Settings**.
- Under **Release channels for Gemini Code Assist in local IDEs** select
  **Preview**.
- Click **Save changes**.

### User instructions

Wait for two to three minutes after your administrator has enabled **Preview**,
then:

- Open Cracked Coder.
- Use the `/settings` command.
- Set **Preview Features** to `true`.

Restart Cracked Coder and you should have access to Cracked 3.

## Need help?

If you need help, we recommend searching for an existing
[GitHub issue](https://github.com/cracked-coder/cracked-coder/issues). If you
cannot find a GitHub issue that matches your concern, you can
[create a new issue](https://github.com/cracked-coder/cracked-coder/issues/new/choose).
For comments and feedback, consider opening a
[GitHub discussion](https://github.com/cracked-coder/cracked-coder/discussions).
