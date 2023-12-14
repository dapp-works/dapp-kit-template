'use client';

import { AppProvider, RootStore, rootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import '../store';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { init } from '@/store';
import { TRPCProvider } from './trpc_provider';
import AppNavbar from './Navbar';
import { WalletStore } from '@/store/wallet';
import Head from 'next/head';

export const LayoutClient = observer(({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    init();
  }, []);
  const wallet = RootStore.Get(WalletStore);
  wallet.use()
  // useEffect(() => {
  //   wallet.prepare(4689)
  // }, [])
  rootStore.events.on('next.signIn.github', () => {
    signIn('github');
  });
  return (
    <AppProvider>
       <Head>
        <title>Fastblocks</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <AppNavbar />
      <TRPCProvider>{children}</TRPCProvider>
    </AppProvider>
  );
});
