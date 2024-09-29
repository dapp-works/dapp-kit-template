import '../styles/globals.css';
import '../styles/nprogress.css';
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';
import { RootStore } from '@dappworks/kit';
import Team from '@/store/team';
import { initStore } from '@/store';
import { DeviceDetectStore } from '@/store/deviceDetect';
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import { NextIntlClientProvider } from 'next-intl';
import { WalletProvider } from '@dappworks/kit/wallet';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  initStore();
  RootStore.Get(Team).useTeams();
  RootStore.Get(DeviceDetectStore).use();
  useProgressBar();

  return (
    <WalletProvider compatibleMode={false}>
      <SessionProvider session={pageProps.session}>
        <NextUIProvider>
          <ThemeProvider attribute="class" enableSystem={false}>
            <NextIntlClientProvider
              locale={router.locale}
              messages={pageProps.messages}
              timeZone="Europe/Vienna">
              <Component {...pageProps} />
            </NextIntlClientProvider>
          </ThemeProvider>
        </NextUIProvider>
      </SessionProvider>
    </WalletProvider>
  );
};

export default MyApp;

const useProgressBar = () => {
  let timer: NodeJS.Timeout | null = null;
  const stopDelayMs = 200;

  const routeChangeStart = () => {
    NProgress.start();
  };

  const routeChangeEnd = () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      NProgress.done(true);
    }, stopDelayMs);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, []);
};
