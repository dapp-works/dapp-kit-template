'use client';
import { rootStore, helper } from '@dappworks/kit';
import { signIn } from 'next-auth/react';
import { Project } from './project';

import { DevTool, DevInspectorPlugin } from '@dappworks/kit/dev';
import { StoragePlugin } from '@dappworks/kit/plugins';

export const init = () => {
  if (helper.env.isBrowser()) {
    if (process.env.NODE_ENV == 'development') {
      rootStore.addStores([
        new DevTool(),
        // new WalletStore(),
        new StoragePlugin(),
        // new AsyncStorage(),
        new DevInspectorPlugin(),
        // new ThemePlugin(),
        // new Project(),
      ]);
    }
    if (process.env.NODE_ENV == 'development') {
      rootStore.events.on('*', console.log);
    }

    rootStore.events.on('next.signIn.github', () => {
      signIn('github');
    });
  }
};
