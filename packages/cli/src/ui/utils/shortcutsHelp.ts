/**
 * @license
 * Copyright 2025 Cracked Coder LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from '../key/keyMatchers.js';
import type { Key } from '../hooks/useKeypress.js';
import { useKeyMatchers } from '../hooks/useKeyMatchers.js';

export function useIsHelpDismissKey(): (key: Key) => boolean {
  const keyMatchers = useKeyMatchers();
  return (key: Key) =>
    Object.values(Command).some((command) => keyMatchers[command](key));
}
