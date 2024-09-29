import Container from '@/components/Layout/Container';
import { Project } from '@/store/project';
import { AutoMan, RootStore } from '@dappworks/kit';
import { WalletStore } from '@dappworks/kit/wallet';
import { _ } from '@/lib/lodash';
import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';
import { withIntlGetServerSideProps, withIntlGetStaticProps } from '@/lib/withIntlGetStaticProps';
import { InferGetStaticPropsType, InferGetServerSidePropsType } from 'next/types';
import { Button } from '@nextui-org/react';

const Home = observer(({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const t = useTranslations('Global');
  const wallet = RootStore.Get(WalletStore);
  const { project } = AutoMan.use({ project: RootStore.Get(Project) }, {
    project: {
      autoManTest: true,
    }
  })
  return (
    <Container title="Home" description="">
      <div className="flex flex-col max-w-4xl mt-4 mx-auto p-6 text-center overflow-auto">
        <div>{wallet.account}</div>
        <div>{wallet.balance.value?.format}</div>
        <div>{wallet.chain?.id}</div>
        <Button onClick={e => {
          wallet.sendRawTx({
            chainId: 4689,
            address: "0x610CBDa6f0037B4141A5B949f56479106BeCb1E9",
            data: "0x",
            value: "0x0de0b6b3a7640000",
            historyItem: {
              msg: 'Swap Test Msg',
              type: "Swap"
            },
            onError: (e) => {
              console.log(e)
            },
            showSuccessDialog: true
          })
        }}>Send Raw Tx</Button>
        <div>{project?.autoManTest.value?.map(i => i)}</div>
        <div>{t('home')}</div>
        <div>{time}</div>
      </div>
    </Container>
  );
});

// export const getStaticProps = withIntlGetStaticProps(async (context) => {
//   return { time: new Date().toLocaleTimeString(), };
// }, { fields: ['Global'], revalidate: 15 });

export const getServerSideProps = withIntlGetServerSideProps(async (context) => {
  return { time: new Date().toLocaleTimeString(), };
}, { fields: ['Global'] });

export default Home;
