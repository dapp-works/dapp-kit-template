import { helper } from '@/lib/helper';
import { rootStore, AutoMan } from '@dappworks/kit';
import { ToastPlugin } from '@dappworks/kit/plugins';
import { enableStaticRendering } from 'mobx-react-lite';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


enableStaticRendering(typeof window === 'undefined');

export const initStore = () => {
  useEffect(() => {
    if (process.env.NODE_ENV == 'development') {
      Promise.all([import('@dappworks/kit/dev'), import('@dappworks/kit/inspector')]).then(([{ DevTool }, { DevInspectorPlugin }]) => {
        rootStore.addStores([new DevTool(), new DevInspectorPlugin()]);
      });
    }

    rootStore.addStores([new ToastPlugin(), new AutoMan()]);

    if (helper.env.isBrowser) {
      if (process.env.NODE_ENV == 'development') {
        rootStore.events.on('*', console.log);
      }
    }
  }, []);
};
