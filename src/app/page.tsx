'use client';

import { Contracts } from '@/store/contracts';
import { ERC20 } from '@/store/contracts/erc20';
import { WalletStore } from '@/store/wallet';
import { RootStore } from '@dappworks/kit';
import { Button } from '@nextui-org/react';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
  const wallet = RootStore.Get(WalletStore);

  return <div>
    <div className="max-w-4xl mt-4 mx-auto p-6 text-center">
      {wallet.account}{wallet.balance.value?.format}
    </div>
    <Button onClick={async e => {
      const erc20 = await ERC20.Get({ args: { address: "0xa00744882684c3e4747faefd68d283ea44099d03" } })
      console.log(erc20.symbol.value)
      const wiotx = Contracts.ERC20.get("0xa00744882684c3e4747faefd68d283ea44099d03");
      await WalletStore.SendTx({
        autoAlert: false,
        chainId: 4689,
        tx: () => wiotx.write.transfer([wallet.account, BigInt(1e18)]),
      });
      return true;
    }}>Transfer test</Button>
    <div>{wallet.chain?.id}</div>
  </div>;
});

export default Home;
