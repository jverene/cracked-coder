/**
 * @license
 * Copyright 2026 Cracked Coder LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { render } from '../../test-utils/render.js';
import { Tips } from './Tips.js';
import { describe, it, expect, vi } from 'vitest';
import type { Config } from '@cracked-coder/core';

describe('Tips', () => {
  it.each([
    { fileCount: 0, description: 'renders all tips including CRACKED.md tip' },
    { fileCount: 5, description: 'renders fewer tips when CRACKED.md exists' },
  ])('$description', async ({ fileCount }) => {
    const config = {
      getGeminiMdFileCount: vi.fn().mockReturnValue(fileCount),
    } as unknown as Config;

    const { lastFrame, waitUntilReady, unmount } = render(
      <Tips config={config} />,
    );
    await waitUntilReady();
    expect(lastFrame()).toMatchSnapshot();
    unmount();
  });
});
