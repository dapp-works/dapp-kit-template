import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppType } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';
import { trpc } from '@/lib/trpc';
import { LayoutClient } from '@/components/layout_client';
import { WalletStore } from '@/store/wallet';
import { RootStore } from '@dappworks/kit';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import React from 'react';
import { initStore } from '@/store';
import TeamStore from '@/store/team';

const MyApp: AppType<{ session: any }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  initStore();
  RootStore.Get(TeamStore).useTeams();
  const wallet = RootStore.Get(WalletStore);
  const { chains, wagmiConfig } = wallet.rainbowKitConfig;

  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ThemeProvider attribute="class" enableSystem={false}>
              <LayoutClient>
                <Component {...pageProps} />
              </LayoutClient>
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
