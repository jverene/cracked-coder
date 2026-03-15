# Ignoring files

This document provides an overview of the Gemini Ignore (`.crackedignore`)
feature of the Cracked Coder.

The Cracked Coder includes the ability to automatically ignore files, similar to
`.gitignore` (used by Git) and `.aiexclude` (used by Gemini Code Assist). Adding
paths to your `.crackedignore` file will exclude them from tools that support
this feature, although they will still be visible to other services (such as
Git).

## How it works

When you add a path to your `.crackedignore` file, tools that respect this file
will exclude matching files and directories from their operations. For example,
when you use the `@` command to share files, any paths in your `.crackedignore`
file will be automatically excluded.

For the most part, `.crackedignore` follows the conventions of `.gitignore`
files:

- Blank lines and lines starting with `#` are ignored.
- Standard glob patterns are supported (such as `*`, `?`, and `[]`).
- Putting a `/` at the end will only match directories.
- Putting a `/` at the beginning anchors the path relative to the
  `.crackedignore` file.
- `!` negates a pattern.

You can update your `.crackedignore` file at any time. To apply the changes, you
must restart your Cracked Coder session.

## How to use `.crackedignore`

To enable `.crackedignore`:

1. Create a file named `.crackedignore` in the root of your project directory.

To add a file or directory to `.crackedignore`:

1. Open your `.crackedignore` file.
2. Add the path or file you want to ignore, for example: `/archive/` or
   `apikeys.txt`.

### `.crackedignore` examples

You can use `.crackedignore` to ignore directories and files:

```
# Exclude your /packages/ directory and all subdirectories
/packages/

# Exclude your apikeys.txt file
apikeys.txt
```

You can use wildcards in your `.crackedignore` file with `*`:

```
# Exclude all .md files
*.md
```

Finally, you can exclude files and directories from exclusion with `!`:

```
# Exclude all .md files except README.md
*.md
!README.md
```

To remove paths from your `.crackedignore` file, delete the relevant lines.
