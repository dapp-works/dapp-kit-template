'use client';

import { rootStore, helper } from '@dappworks/kit';
import { ToastPlugin } from '@dappworks/kit/plugins';
import { signIn } from 'next-auth/react';
import { enableStaticRendering } from 'mobx-react-lite';
import { useEffect } from 'react';

enableStaticRendering(typeof window === 'undefined');

export const initStore = () => {
  useEffect(() => {
    if (process.env.NODE_ENV == 'development') {
      Promise.all([import("@dappworks/kit/dev"), import('@dappworks/kit/inspector')]).then(([{ DevTool }, { DevInspectorPlugin }]) => {
        rootStore.addStores([new DevTool(), new DevInspectorPlugin()]);
      });
    }

    rootStore.addStores([new ToastPlugin()]);

    if (helper.env.isBrowser()) {
      rootStore.events.on('next.signIn.github', () => {
        signIn('github');
      });

      if (process.env.NODE_ENV == 'development') {
        rootStore.events.on('*', console.log);
      }
    }
  }, []);
};
