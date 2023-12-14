import '../styles/globals.css';
import type { AppType } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';
import { init } from '@/store';
import { trpc } from '@/lib/trpc';
import { LayoutClient } from '@/components/layout_client';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { WalletStore } from '@/store/wallet';
import { RootStore } from '@dappworks/kit';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';

const MyApp: AppType<{ session: any }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  init();
  const wallet = RootStore.Get(WalletStore);
  const { chains, wagmiConfig } = wallet.rainbowKitConfig

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
