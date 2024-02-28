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
import { Inspector, InspectParams } from 'react-dev-inspector';
import React from 'react';

const isDev = process.env.NODE_ENV === 'development';
const InspectorWrapper = isDev ? Inspector : React.Fragment;
const MyApp: AppType<{ session: any }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  init();
  const wallet = RootStore.Get(WalletStore);
  const { chains, wagmiConfig } = wallet.rainbowKitConfig

  return (
    <SessionProvider session={session}>
      <InspectorWrapper
        // props see docs:
        // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
        keys={['control', 'shift', 'z']}
        disableLaunchEditor={true}
        onClickElement={({ codeInfo }: InspectParams) => {
          if (!codeInfo?.absolutePath) return;
          const { absolutePath, lineNumber, columnNumber } = codeInfo;
          // you can change the url protocol if you are using in Web IDE
          window.open(`vscode://file${absolutePath.startsWith('/') ? absolutePath : `/${absolutePath}`}:${lineNumber}:${columnNumber}`);
        }}
      >
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
      </InspectorWrapper>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
