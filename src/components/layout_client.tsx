'use client';

import { AppProvider, ConnectWallet, HeaderStore, RootStore, rootStore, StoragePlugin, WalletStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import '../store';
import "../styles/globals.css"
import { signIn } from 'next-auth/react';
import { useEffect } from "react";
import { init } from '@/store';
import { TRPCProvider } from './trpc_provider';
import AppNavbar from './Navbar';

export const LayoutClient = observer(({
  children,
}: {
  children: React.ReactNode
}) => {
  useEffect(() => {
    init()
  }, [])
  rootStore.events.on('next.signIn.github', () => {
    signIn('github');
  });
  return (
    <AppProvider >
      <AppNavbar />
      <TRPCProvider>{children}</TRPCProvider>
    </AppProvider>
  );
});
