/**
 * @license
 * Copyright 2025 Cracked Coder LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext } from 'react';
import type { StartupWarning } from '@cracked-coder/core';

export interface AppState {
  version: string;
  startupWarnings: StartupWarning[];
}

export const AppContext = createContext<AppState | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
