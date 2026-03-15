/**
 * @license
 * Copyright 2025 Cracked Coder LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext } from 'react';
import { type Config } from '@cracked-coder/core';

export const ConfigContext = React.createContext<Config | undefined>(undefined);

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
