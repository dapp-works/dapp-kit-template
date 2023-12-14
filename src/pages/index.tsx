import { WalletStore } from '@/store/wallet';
import { RootStore } from '@dappworks/kit';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
  const wallet = RootStore.Get(WalletStore);
  return <div className="p-6">
    {wallet.account}
  </div>
});

export default Home;
