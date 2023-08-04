'use client';
import { AppProvider, HeaderStore, RootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';
import '../../store';
import "../../styles/globals.css"

export const Layout = observer(() => {
  const headerStore = RootStore.Get(HeaderStore);
  return (
    <AppProvider>
      <headerStore.Header />
    </AppProvider>
  );
});
