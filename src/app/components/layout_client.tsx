'use client';

import { AppProvider, HeaderStore, RootStore, rootStore, StoragePlugin, WalletStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import '../../store';
import "../../styles/globals.css"
import { signIn } from 'next-auth/react';

export const LayoutClient = observer(({
  children,
}: {
  children: React.ReactNode
}) => {
  const headerStore = RootStore.Get(HeaderStore);
  rootStore.events.on('next.signIn.github', () => {
    signIn('github');
  });

  const ValueFromMemroy = StoragePlugin.Get({
    key: 'test.ValueFromMemroy',
    value: '123',
    onSet(v) {
      // console.log(v);
    },
  });
  const ValueFromLocalStoarge = StoragePlugin.Get({ key: 'test.ValueFromLocalStoarge', value: '123', engine: StoragePlugin.engines.localStorage });
  const ValueFromAsyncStorage = StoragePlugin.Get({ key: 'test.ValueFromAsyncStorage', value: '123', engine: StoragePlugin.engines.asyncStorage });

  return (
    <AppProvider>
      <headerStore.Header />
      {children}
    </AppProvider>
  );
});
