'use client';

import { rootStore, helper } from '@dappworks/kit';
import { DevInspectorPlugin } from '@dappworks/kit/inspector';
import { ToastPlugin } from '@dappworks/kit/plugins';
import { DevTool } from '@dappworks/kit/dev';
import { signIn } from 'next-auth/react';
import { enableStaticRendering } from 'mobx-react-lite';
import { useEffect } from 'react';

enableStaticRendering(typeof window === 'undefined');

export const initStore = () => {
  useEffect(() => {
    if (process.env.NODE_ENV == 'development') {
      rootStore.addStores([new DevTool(), new DevInspectorPlugin()]);
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
