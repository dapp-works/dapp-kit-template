"use client"
import { AsyncStorage, DefaultEventMap, DevInspectorPlugin, DevTool, HeaderStore, StoragePlugin, ThemePlugin, WalletConnectButton, rootStore } from '@dappworks/kit';
import { signIn } from 'next-auth/react';

rootStore.addStores([
  new DevTool({ disabled: process.env.NODE_ENV != 'development' }),
  new StoragePlugin(),
  new AsyncStorage(),
  new HeaderStore({
    // UserNav: (props) => {
    //   return <WalletConnectButton className={...props.className}></WalletConnectButton>;
    // },
  }),
  // new SlotPlugin(),
  // new JSONViewPlugin(),
  new DevInspectorPlugin({ disabled: process.env.NODE_ENV != 'development' }),
  new ThemePlugin(),
]);

if (process.env.NODE_ENV == 'development') {
  rootStore.events.on('*', console.log);
}

