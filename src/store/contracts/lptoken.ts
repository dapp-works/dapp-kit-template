import { PromiseHook, PromiseState, RootStore } from '@dappworks/kit';
import { WalletStore } from '../wallet';
import axios from 'axios';
import { _ } from '@/lib/lodash';
import { ERC20 } from './erc20';
import BigNumber from 'bignumber.js';
import { Contracts } from '.';
import { hooks } from '@/lib/hooks';
import { ethers } from 'ethers';
import { TypeWarpBigNumber, helper } from '@/lib/helper';

export class LPToken {
  address: `0x${string}` = '0x';
  get chainId() {
    return RootStore.Get(WalletStore).getSupportChainId();
  }
  Token0 = PromiseHook.wrap({
    func: async () => {
      return await ERC20.Get({ args: { address: await Contracts.LPToken.get(this.address)?.read?.token0() } })
    },
  });

  Token1 = PromiseHook.wrap({
    func: async () => {
      return await ERC20.Get({ args: { address: await Contracts.LPToken.get(this.address)?.read?.token1() } })
    },
  });

  getReserves = PromiseHook.wrap({
    func: async () => await Contracts.LPToken.get(this.address).read.getReserves(),
  });

  get token0Reserve() {
    return helper.number.warpBigNumber(this.getReserves.value?.[0].toString());
  }
  get token1Reserve() {
    return helper.number.warpBigNumber(this.getReserves.value?.[1].toString());
  }

  get priceA() {
    return new BigNumber(this.token1Reserve.format).dividedBy(new BigNumber(this.token0Reserve.format)).toFixed();
  }

  get priceB() {
    return new BigNumber(this.token0Reserve.format).dividedBy(new BigNumber(this.token1Reserve.format)).toFixed();
  }

  get token0Balance() {
    return helper.number.warpBigNumber(new BigNumber(this.balance.value?.format ?? 0)
      .times(new BigNumber(this.token0Reserve.value))
      .dividedBy(new BigNumber(this.totalSupply.value.format ?? 0)).toString(), this.Token0.value?.decimals?.value) 
  }

  get token1Balance() {
    return helper.number.warpBigNumber(new BigNumber(this.balance.value?.format ?? 0)
      .times(new BigNumber(this.token1Reserve.value))
      .dividedBy(new BigNumber(this.totalSupply.value.format ?? 0)).toString(), this.Token0.value?.decimals?.value) 
  }

  allowanceForRouter = PromiseHook.wrap({
    func: async () => {
      const wallet = RootStore.Get(WalletStore);
      if (!wallet.account) return helper.number.warpBigNumber('0')
      const ERC20 = Contracts.ERC20.get(this.address);
      const res = await ERC20.read.allowance([wallet.account, Contracts.current.UniswapRouter.address]);
      return helper.number.warpBigNumber(res?.toString());
    },
  });

  token0AllowanceForRouter = PromiseHook.wrap({
    func: async () => {
      const wallet = RootStore.Get(WalletStore);
      if (!wallet.account) return helper.number.warpBigNumber('0')
      await this.Token0.get();
      const ERC20 = Contracts.ERC20.get(this.Token0.value.address);
      const res = await ERC20.read.allowance([wallet.account, Contracts.current.UniswapRouter.address]);
      return helper.number.warpBigNumber(res?.toString());
    },
  });

  token1AllowanceForRouter = PromiseHook.wrap({
    func: async () => {
      const wallet = RootStore.Get(WalletStore);
      if (!wallet.account) return helper.number.warpBigNumber('0')
      await this.Token1.get();
      const ERC20 = Contracts.ERC20.get(this.Token1.value.address);
      const res = await ERC20.read.allowance([wallet.account, Contracts.current.UniswapRouter.address]);
      return helper.number.warpBigNumber(res?.toString());
    },
  });

  totalSupply = PromiseHook.wrap({
    func: async () => helper.number.warpBigNumber((await Contracts.LPToken.get(this.address).read.totalSupply()).toString()),
  });

  constructor(args: Partial<LPToken>) {
    Object.assign(this, args);
  }

  priceUSD = PromiseHook.wrap({
    func: async () => {
      try {
        const [reseve0, reseve1] = await this.getReserves.get();
        const symbol0 = this.Token0.value?.symbol.value
        const symbol1 = this.Token1.value?.symbol.value
        const decimals0 = this.Token0.value?.decimals.value
        const decimals1 = this.Token1.value?.decimals.value
        const price0 = this.Token0.value?.priceUSD.value
        const price1 = this.Token1.value?.priceUSD.value
        const _totalSupply = this.totalSupply.value
        console.log(reseve0, reseve1, symbol0, symbol1, decimals0, decimals1, price0, price1)
        const [price, reserve, decimals, totalSupply] = new BigNumber(price0).isGreaterThan(price1)
          ? [price0, reseve0.toString(), decimals0, _totalSupply.toString()]
          : [price1, reseve1.toString(), decimals1, _totalSupply.toString()];
        const priceUSD = new BigNumber(price).multipliedBy(reserve).multipliedBy(2).dividedBy(totalSupply).toString();
        return priceUSD;
      } catch (e) {
        console.log(e)
        return 0
      }
    },
  });


  decimals = PromiseHook.wrap({
    func: async () => Contracts.ERC20.get(this.address).read.decimals(),
  });

  balance = PromiseHook.wrap<() => Promise<TypeWarpBigNumber>>({
    func: async () => {
      try {
        const account = RootStore.Get(WalletStore).account;
        if (!account) return Promise.resolve(helper.number.warpBigNumber('0', 18));
        const res = await Contracts.ERC20.get(this.address)
          .read.balanceOf([account])
          .then((i) => helper.number.warpBigNumber(i?.toString(), 18));
        return res;
      } catch (error) {
        console.log(error)
        return Promise.resolve(helper.number.warpBigNumber('0', 18));
      }
    },
  });

  approve = new PromiseState({
    function: async (spender: `0x${string}`, amount: string, tokenAddress?: `0x${string}`) => {
      const useMainToken = tokenAddress === ethers.constants.AddressZero;
      if (useMainToken) {
        return true;
      }
      if (!tokenAddress) {
        tokenAddress = this.address
      }
      await hooks.waitAccount(this.chainId);
      const ERC20 = Contracts.ERC20.get(tokenAddress);
      const account = RootStore.Get(WalletStore).account;
      const [allowance, decimals] = await Promise.all([ERC20.read.allowance([account, spender]), ERC20.read.decimals()]);
      const _allowance = new BigNumber(allowance.toString()).dividedBy(10 ** decimals);
      const _amount = new BigNumber(amount).dividedBy(10 ** decimals);
      if (_allowance.lt(_amount)) {
        await WalletStore.SendTx({
          autoAlert: false,
          chainId: this.chainId,
          tx: () => ERC20.write.approve([spender, BigInt(amount)]),
        });
        return true;
      }
      return true;
    },
  });

  static Get = PromiseHook.Get(LPToken);
}
