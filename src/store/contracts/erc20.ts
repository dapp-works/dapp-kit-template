import { BigNumberInputState, PromiseHook, PromiseState, RootStore, cache } from '@dappworks/kit';
import { WalletStore } from '../wallet';
import axios from 'axios';
import { _ } from '@/lib/lodash';
import { hooks } from '@/lib/hooks';
import BigNumber from 'bignumber.js';
import DataLoader from 'dataloader';
import { iopay } from '@/lib/gql';
import { Contracts } from '.';
import { ethers } from 'ethers';
import { makeAutoObservable } from 'mobx';
import { helper } from '@/lib/helper';

export const wrappedToken = {
  1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  4689: "0xa00744882684c3e4747faefd68d283ea44099d03",
  4690: "0xff5fae9fe685b90841275e32c348dc4426190db0"
}
const wallet = RootStore.Get(WalletStore)
export class ERC20 {
  address: `0x${string}` = '0x';
  is_depin_token = false;
  isLocal = false;
  get chainId() {
    return wallet.getSupportChainId();
  }
  get id() {
    return `ERC20-${this.chainId}-${this.address}`
  }
  get isEther() {
    return this.address === ethers.constants.AddressZero
  }
  get isWrapped() {
    const wrappedAddress = Object.values(wrappedToken)
    return wrappedAddress.some(i => i.toLowerCase() == this.address.toLowerCase())
  }
  get wrappedToMainTokenSymbol() {
    if (this.isWrapped) {
      switch (this.chainId) {
        case 1:
          return 'ETH';
        case 56:
          return 'BNB';
        case 137:
          return 'MATIC';
        case 4689:
          return 'IOTX';
      }
      return 'IOTX';
    } else {
      return this.symbol.value
    }
  }
  get wrappedToMainTokenUrl() {
    if (this.isWrapped) {
      switch (this.chainId) {
        case 1:
          return 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png';
        case 56:
          return 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png';
        case 137:
          return 'https://coingecko-proxy.iopay.me/coins/images/4713/large/polygon.png?1698233745';
        case 4689:
          return 'https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=029';
      }
      return 'https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=029';
    } else {
      return this.tokenUrl
    }
  }

  get isDepinToken() {
    return this.is_depin_token
  }

  get tokenUrl() {
    try {
      const LogoMap = {
        1: {
          '0x0000000000000000000000000000000000000000': 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        },
        56: {
          '0x0000000000000000000000000000000000000000': 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        },
        137: {
          '0x0000000000000000000000000000000000000000': 'https://coingecko-proxy.iopay.me/coins/images/4713/large/polygon.png?1698233745'
        },
        4689: {
          '0x0000000000000000000000000000000000000000': 'https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=029',
        },
        4690: {
          '0x0000000000000000000000000000000000000000': 'https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=029',
        }
      }
      return LogoMap[this.chainId][this.address] || `https://info.mimo.exchange/image/${this.address}`;
    } catch (error) {
      return 'https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=029'// https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png
    }
  }
  constructor(args: Partial<ERC20>) {
    Object.assign(this, args);
    makeAutoObservable(this);
  }

  name = PromiseHook.wrap({
    func: async () =>
      cache.wrap(`erc20-${this.chainId}-${this.address}-name`, async () => {
        if (this.address === ethers.constants.AddressZero) {
          switch (this.chainId) {
            case 1:
              return 'ETH';
            case 56:
              return 'BNB';
            case 137:
              return 'MATIC';
            case 4689:
              return 'IOTX';
          }
          return 'IOTX';
        }
        try {
          return await Contracts.ERC20.get(this.address).read.name();
        } catch (error) {
          return ''
        }
      }, { ttl: 31536000 * 1000 }),
  });

  priceUSD = PromiseHook.wrap({
    func: async () => ERC20Service.getToken({ address: this.address.toLowerCase() }).then((i) => i?.current_price),
  });

  symbol = PromiseHook.wrap({
    func: async () => {
      if (this.address === ethers.constants.AddressZero) {
        switch (this.chainId) {
          case 1:
            return 'ETH';
          case 56:
            return 'BNB';
          case 137:
            return 'MATIC';
          case 4689:
            return 'IOTX';
        }
        return 'IOTX';
      }
      const res = await cache.wrap(`erc20-${this.chainId}-${this.address}-symbol`, async () => {
        console.log(this.chainId)
        try {
          return await Contracts.ERC20.get(this.address).read.symbol()
        } catch (error) {
          console.log(error)
          return ''
        }
      }, { ttl: 31536000 * 1000 })
      return res
    }
  });

  decimals = PromiseHook.wrap({
    func: async () => {
      return cache.wrap(`erc20-${this.chainId}-${this.address}-decimals`, async () => {
        const useMainToken = this.address === ethers.constants.AddressZero;
        if (useMainToken) {
          return 18;
        }
        try {
          return await Contracts.ERC20.get(this.address).read.decimals();
        } catch (error) {
          return 18
        }
      }, { ttl: 31536000 * 1000 })
    },
  });

  balance = PromiseHook.wrap({
    func: async () => {
      const wallet = RootStore.Get(WalletStore);
      if (!wallet.account) return helper.number.warpBigNumber('0', 18)
      const useMainToken = this.address === ethers.constants.AddressZero;
      if (useMainToken) {
        await wallet.balance.call();
        return helper.number.warpBigNumber(wallet.balance.value?.value?.toString() ?? '0', 18, { format: '0,0.000' });
      }

      try {
        const res = await Contracts.ERC20.get(this.address)
          .read.balanceOf([wallet.account])
        await this.symbol.get()
        await this.decimals.get()
        return helper.number.warpBigNumber(res?.toString(), Number(this.decimals), { format: '0,0.000' });
      } catch (error) {
        // console.log(error)
        return helper.number.warpBigNumber('0', 18)
      }
    },
  });

  balanceUSD = PromiseHook.wrap({
    func: async () => {
      const wallet = RootStore.Get(WalletStore);
      if (!wallet.account) return '0';
      await this.balance.get();
      await this.priceUSD.get();
      return helper.number.numberFormat((Number(this.balance.value?.originFormat) * Number(this.priceUSD.value)), '0,0.000', { fallback: '0' })
    },
  });

  approve = new PromiseState({
    function: async (spender: `0x${string}`, amount: string, tokenAddress?: `0x${string}`) => {
      try {
        if (!tokenAddress) {
          tokenAddress = this.address
        }
        const useMainToken = tokenAddress === ethers.constants.AddressZero;
        if (useMainToken) {
          return true;
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
      } catch (error) {
        console.log(error)
        return false
      }
    },
  });
  static Get = PromiseHook.Get(ERC20);
}

export class ERC20Service {
  // TODO refactor to rest api
  // https://api.mimo.exchange/api/rest/tokens?limit=1000
  static tokenLoader = new DataLoader(
    async (ids: string[]) => {
      const res = await iopay.query({
        token_list_v4: {
          __args: {
            where: { _or: ids.map((i) => ({ platforms: { _contains: { iotex: i } } })) },
          },
          platforms: {
            __args: { path: 'iotex' },
          },
          symbol: true,
          current_price: true,
        },
      });
      const data = _.keyBy(res.token_list_v4, 'platforms');
      return ids.map((i) => data[i] || ({} as (typeof data)[0]));
    },
  );
  static async getToken({ address }: { address: string }) {
    // for test
    const addressMap = {
      '0x0000000000000000000000000000000000000000': '0xa00744882684c3e4747faefd68d283ea44099d03',
      '0x180dC617701A507239659215D19FA142eD3B91A7': '0x236f8c0a61da474db21b693fb2ea7aab0c803894',
      '0x96dC256Ea343ae8b13999C73562e5D6B457a8501': '0xa00744882684c3e4747faefd68d283ea44099d03',
    };

    address = addressMap[address] || address;
    return cache.wrap(`erc20-${address}-price`, async () => {
      return this.tokenLoader.load(address);
    }, { ttl: 60 * 1000 });
  }
}
