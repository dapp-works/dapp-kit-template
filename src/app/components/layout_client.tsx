'use client';

import { AppProvider, HeaderStore, RootStore, rootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import '../../store';
import "../../styles/globals.css"
import { signIn } from 'next-auth/react';

export const Layout = observer(() => {
  const headerStore = RootStore.Get(HeaderStore);
  rootStore.events.on('next.signIn.github', () => {
    signIn('github');
  });
  
  return (
    <AppProvider>
      <headerStore.Header />
    </AppProvider>
  );
});
