'use client';

import { AppProvider } from '@dappworks/kit';
import { Layout } from './components/layout_client';

// import RootStore from "@dappworks/kit/store/root";

export default function HomePage() {
  // const headerStore = RootStore.Get(HeaderStore);
  return (
    <main className="">
      <Layout />
    </main>
  );
}
