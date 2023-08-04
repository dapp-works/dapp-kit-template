import { NextSeo } from 'next-seo';
import { observer } from 'mobx-react-lite';
// import { cn } from '@dappworks/kit/lib/utils';
import { PageStore } from '@dappworks/kit/module/Core/Page';
import RootStore from '@dappworks/kit/store/root';
import { HeaderStore } from '@dappworks/kit/module/Layout/header';

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
        {/* <main id="skip" className={cn('p-4 lg:p-4', className)}>
          {children}
        </main> */}
      </div>
    </>
  );
}

export default observer(Container);
