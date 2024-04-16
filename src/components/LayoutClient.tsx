'use client';

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { AppProvider, RootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import AppNavbar from './Navbar';
import { WalletStore } from '@/store/wallet';
import Head from 'next/head';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SessionProvider } from 'next-auth/react';
import { initStore } from '@/store';
import { NextUIProvider } from '@nextui-org/react';
import { WagmiConfig, WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ThemeProvider } from 'next-themes';
import { UserStore } from '@/store/user';
import TeamStore from '@/store/team';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const LayoutClient = observer(({ children }: { children: React.ReactNode }) => {
  const wallet = RootStore.Get(WalletStore);
  const { chains, config } = wallet.rainbowKitConfig;
  initStore();
  const queryClient = new QueryClient()
  return (
    <SessionProvider>
      <NextUIProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
                <AppProvider>
                  <Head>
                    <title>Dapp kit template</title>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                  </Head>
                  <AppNavbar />
                  <ProgressBar height="4px" color="#775FCE" options={{ showSpinner: false }} shallowRouting />
                  <LayoutProvider />
                  {children}
                </AppProvider>
              </ThemeProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
        <ProgressBar height="4px" color="#775FCE" options={{ showSpinner: false }} shallowRouting />
      </NextUIProvider>
    </SessionProvider>
  );
});

export default LayoutClient;

export const LayoutProvider = () => {
  RootStore.Get(WalletStore).use();
  RootStore.Get(UserStore).use();
  RootStore.Get(TeamStore).useTeams();
  return null;
};
