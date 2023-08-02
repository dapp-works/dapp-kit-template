import '../styles/globals.css';
import '../styles/nprogress.css';
import type { AppType } from 'next/app';
import { trpc } from '@/dappkit/lib/trpc';
import { ThemeProvider } from 'next-themes';
import { SessionProvider, useSession } from 'next-auth/react';
import { UserContext, useCurrentUser } from '@/dappkit/lib/context';
import { useEffect } from 'react';
import { Router } from 'next/router';
import { Loader2 } from 'lucide-react';
import NProgress from 'nprogress';
import { AppProvider } from '@/dappkit/module/Core/AppProvider';

const MyApp: AppType<{ session: any }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <Auth {...Component.defaultProps}>
        <AppContent>
          <ThemeProvider attribute="class" enableSystem={false}>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </ThemeProvider>
        </AppContent>
      </Auth>
    </SessionProvider>
  );
};

function Auth({ children, ...defaultProps }: { children: JSX.Element }) {
  // @ts-ignore
  const useAuth = !!defaultProps.useAuth;
  const { status } = useSession({ required: useAuth });
  if (status === 'loading') {
    return (
      <div className="fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center bg-opacity-50 bg-black text-white">
        <Loader2 size={24} className="animate-spin" />
        <div className="ml-2">loading...</div>
      </div>
    );
  }
  return children;
}

function AppContent(props: { children: JSX.Element | JSX.Element[] }) {
  const user = useCurrentUser();
  return (
    // @ts-ignore
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default trpc.withTRPC(MyApp);
