import { NextSeo } from 'next-seo';
import { observer } from 'mobx-react-lite';
import { cn } from '@/dappkit/lib/utils';
import { PageStore } from '@/dappkit/module/Core/Page';
import RootStore from '@/dappkit/store/root';
import { HeaderStore } from '@/dappkit/module/Layout/header';

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

function Container(props: ContainerProps) {
  const { className, children, ...customMeta } = props;
  const pageStore = RootStore.Get(PageStore);
  const headerStore = RootStore.Get(HeaderStore);
  const meta = {
    ...pageStore.page,
    ...customMeta,
  };

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        noindex={false}
        canonical={``}
        openGraph={{
          type: 'website',
          url: ``,
          title: meta.title,
          description: meta.description,
        }}
      />
      <div>
        <headerStore.Header />
        <main id="skip" className={cn('p-4 lg:p-4', className)}>
          {children}
        </main>
      </div>
    </>
  );
}

export default observer(Container);
