import { WalletStore } from '@/store/wallet';
import { RootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
  const wallet = RootStore.Get(WalletStore);
  return <div className="max-w-4xl mt-4 mx-auto p-6 text-center">{wallet.account}</div>;
});

export default Home;
