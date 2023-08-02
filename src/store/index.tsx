import RootStore, { EventMap } from '../dappkit/store/root';

import { DevTool } from '@/dappkit/module/Devtool/devtool';
import { signIn } from 'next-auth/react';
import { SlotPlugin } from '@/dappkit/module/Core/Slot';
import { JSONViewPlugin } from '@/dappkit/module/JSONView';
import { StoragePlugin } from '@/dappkit/module/Core/Storage';
import { AsyncStorage } from '@/dappkit/module/Core/Async';
import { DevInspectorPlugin } from '@/dappkit/module/DevInspector';
import { ThemePlugin } from '@/dappkit/module/Core/Theme';

type MyEventMap = {
  'next.signIn.github': () => void;
} & EventMap;

export const rootStore = RootStore.init<MyEventMap>();

rootStore.addStores([
  new DevTool({ disabled: process.env.NODE_ENV != 'development' }),
  new StoragePlugin(),
  new AsyncStorage(),
  new SlotPlugin(),
  new JSONViewPlugin(),
  new DevInspectorPlugin({ disabled: process.env.NODE_ENV != 'development' }),
  new ThemePlugin(),
]);

if (process.env.NODE_ENV == 'development') {
  rootStore.events.on('*', console.log);
}

rootStore.events.on('next.signIn.github', () => {
  signIn('github');
});

export const useStore = () => RootStore.init();
