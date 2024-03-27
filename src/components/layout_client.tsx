'use client';

import { AppProvider, RootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import { TRPCProvider } from './trpc_provider';
import AppNavbar from './Navbar';
import { WalletStore } from '@/store/wallet';
import Head from 'next/head';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const LayoutClient = observer(({ children }: { children: React.ReactNode }) => {
  RootStore.Get(WalletStore).use();

  return (
    <AppProvider>
      <Head>
        <title>Dapp kit template</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <AppNavbar />
      <ProgressBar height="4px" color="#775FCE" options={{ showSpinner: false }} shallowRouting />
      <TRPCProvider>{children}</TRPCProvider>
    </AppProvider>
  );
});
