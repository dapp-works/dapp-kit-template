import { EventEmitter } from 'events';
import { TransactionReceipt, TransactionRequest } from '@ethersproject/providers';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { _ } from '../lib/lodash';
import BigNumber from 'bignumber.js';
import { RootStore, Store, BigNumberState, helper } from '@dappworks/kit';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { ToastPlugin } from '@dappworks/kit/plugins';
import { Deferrable } from 'ethers/lib/utils';
import { Chain, configureChains, createConfig, useAccount, useBalance, useConnect, useNetwork, usePublicClient, useSwitchNetwork, useWalletClient, WagmiConfig, WalletClient } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora, iotex } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Wallet, connectorsForWallets, getDefaultWallets, useConnectModal } from '@rainbow-me/rainbowkit';
import { walletConnectWallet, metaMaskWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { PublicClient, createPublicClient, createWalletClient, http } from 'viem';
import { iotexTestnet } from '@/lib/chain';
import { runInAction } from 'mobx';
import { useEffect, useMemo } from 'react';

const kcc: any = {
  id: 321,
  name: 'KCC Mainnet',
  network: 'kcc',
  iconUrl: 'https://icons.llamao.fi/icons/chains/rsz_kucoin.jpg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'KCS',
    symbol: 'KCS',
  },
  rpcUrls: {
    public: { http: ['https://rpc-mainnet.kcc.network'] },
    default: { http: ['https://rpc-mainnet.kcc.network'] },
  },
  blockExplorers: {
    default: { name: 'KCC Explorer', url: 'https://explorer.kcc.io' },
    etherscan: { name: 'KCC Explorer', url: 'https://explorer.kcc.io' },
  },
  testnet: false,
};

export interface MyWalletOptions {
  chains: Chain[];
}

const _iotex = {
  iconUrl: 'https://mimo.exchange/images/iotex.svg',
  ...iotex,
};

export const ioPayWallet = ({ chains, ...options }: MyWalletOptions): Wallet => ({
  id: 'ioPay',
  name: 'ioPay',
  iconUrl: 'https://framerusercontent.com/images/zj4bWRK880xDSHFe6mk9E55Lo.png',
  iconBackground: 'transparent',
  hidden: ({ wallets }) => {
    if (typeof window !== 'undefined') {
      if (helper.env.isIopayMobile()) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  },
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options,
    }),
  }),
});

const projectId = '043229b9b9d784a5cfe40fe5f0107811';

export type NetworkObject = {
  name: string;
  chainId: number;
  rpcUrl: string;
  logoUrl: string;
  explorerUrl: string;
  explorerName: string;
  nativeCoin: string;
  type: 'mainnet' | 'testnet';
};
export class WalletStore implements Store {
  sid = 'wallet';
  autoObservable = true;
  walletClient: WalletClient;
  rpcCilentId = '';
  chain: Chain | undefined;
  signer: ethers.providers.JsonRpcSigner;
  account: `0x${string}` = '0x...';
  autoConnect: boolean = true;
  connectWithMetamask: any;
  connect: any;
  openConnectModal: () => void;
  isConnect = false;
  balance = new BigNumberState({});
  autoSign = true; //auto use swie sign
  event = new EventEmitter();
  rainbowkitParams: any = {};
  supportedChains = [_iotex, iotexTestnet];
  switchChain: ((chainId_?: number | undefined) => void) | undefined;
  publicClient: PublicClient;

  writeTicker = 0;
  updateTicker = 0;
  defaultChainId = 4689

  get supportChainId() {
    if (!this.supportedChains.map(i => i.id).includes(this.chain?.id as any)) {
      return this.defaultChainId
    }
    return this.chain?.id || this.defaultChainId
  }
  getSupportChain(chain: any) {
    if (!this.supportedChains.map(i => i.id).includes(chain?.id as any)) {
      return _iotex
    }
    return chain
  }

  constructor(args?: Partial<WalletStore>) {
    Object.assign(this, args);

    const { chains, publicClient } = configureChains(this.supportedChains, [publicProvider()]);

    const wallets = [ioPayWallet({ chains }), metaMaskWallet({ projectId, chains }), walletConnectWallet({ projectId, chains })];

    const connectors = connectorsForWallets([
      {
        groupName: 'Recommended',
        wallets,
      },
    ]);

    this.rainbowkitParams = {
      chains,
      publicClient,
      wallets,
      connectors,
    };
    try {
      this.publicClient = createPublicClient({
        chain: _iotex,
        transport: http(),
        batch: {
          multicall: true,
        },
      });
    } catch (e) {
      console.error(e);
    }

    if (typeof window !== 'undefined') {
      if (helper.env.isIopayMobile()) {
        // this.supportedWallets.unshift(iopayWallet);
      }
    }
  }
  //todo: change chain

  get rainbowKitConfig() {
    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: this.rainbowkitParams.connectors,
      publicClient: this.rainbowkitParams.publicClient,
    });

    return { chains: this.rainbowkitParams.chains, wagmiConfig };
  }

  use() {
    const { data: walletClient } = useWalletClient({
      onSuccess: (walletClient) => {
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        this.signer = provider.getSigner();
      },
    });

    this.walletClient = walletClient as WalletClient;
    const { chain, chains } = useNetwork();
    const { address, isConnecting, isConnected, isDisconnected } = useAccount();

    this.account = address as `0x${string}`;
    this.chain = chain;
    useEffect(() => {
      this.updateTicker++;
    }, [address, chain?.id]);

    if (chain) {
      console.log('chainswitch', this.getSupportChain(chain)?.id)
      try {
        this.publicClient = createPublicClient({
          chain: this.getSupportChain(chain),
          transport: http(),
          batch: {
            multicall: true,
          },
        });
      } catch (error) { }
    }
    const { switchNetwork } = useSwitchNetwork();
    this.switchChain = switchNetwork;
    const { openConnectModal } = useConnectModal();
    const { connect } = useConnect({
      onSuccess: (res) => {
        console.log(res);
      },
    });

    const {
      data: balance,
      isError,
      isLoading,
    } = useBalance({
      address: address,
    });
    if (balance?.value.toString()) {
      this.balance.value = new BigNumber(balance?.value.toString() ?? '0');
    }
    if (isConnected) {
      this.isConnect = true;
    } else {
      this.isConnect = false;
      this.balance.value = new BigNumber('0');
    }

    this.connect = connect;
    this.openConnectModal = openConnectModal as () => void;
  }

  set(args: Partial<WalletStore>) {
    Object.assign(this, args);
  }

  // get currentNetwork() {
  //   try {
  //     return 123;
  //   } catch {
  //     return null;
  //   }
  // }

  toJSON() {
    const { account } = this;
    return { account };
  }

  async prepare(chainId?: number): Promise<WalletStore> {
    const promise = new Promise<void>(async (res, rej) => {
      console.log(this.account);
      if (!window) return;
      if (this.account) {
        if (Number(this.chain?.id) == Number(chainId)) {
          res();
          return;
        }
        this.switchChain?.(chainId);
        const interval = setInterval(() => {
          if (this.switchChain) {
            console.log(this.chain?.id, chainId);
            if (this.chain?.id == chainId) {
              clearInterval(interval);
              res();
            }
          }
        }, 1000);
      } else {
        try {
          this.openConnectModal();
          // this.connect?.({ chainId, connector: this.rainbowkitParams.connectors()[0] }) connect success but ui not change so
          const interval = setInterval(() => {
            console.log('wait connect', this.account);
            if (this.account) {
              clearInterval(interval);
              res();
            }
          }, 1000);
        } catch (error) {
          rej(error);
        }
      }
    });

    await promise;
    return this;
  }

  async signMessage() {
    const message = new SiweMessage({
      address: this.account,
      chainId: this.chain?.id,
      expirationTime: new Date(Date.now() + 3 * 60 * 1000).toISOString(),
      domain: document.location.host,
      uri: document.location.origin,
      version: '1',
    });
    // const signature = await this.wallet.signMessage(message.prepareMessage());
    // return signature;
  }

  static async SendTx(...args: Parameters<WalletStore['sendTx']>) {
    return RootStore.Get(WalletStore).sendTx(...args);
  }
  async sendTx({ chainId, tx, autoAlert = true, loadingText, successText }: { chainId: number | string; tx: any; autoAlert?: boolean; loadingText?: string; successText?: string }) {
    const toast = RootStore.Get(ToastPlugin);

    try {
      if (loadingText) toast.loading(loadingText);
      if (!chainId) throw new Error('chainId, address, data is required');
      await RootStore.Get(WalletStore).prepare(Number(chainId));
      const hash = await tx();
      const receipt = await this.publicClient.waitForTransactionReceipt({ hash });
      if (receipt.status == 'success') {
        toast.success('The transaction was successful');
      } else {
        toast.error('The transaction failed');
      }
      toast.dismiss();
      if (successText) toast.success(successText);
      this.writeTicker++;
      this.updateTicker++;
      return receipt;
    } catch (error) {
      console.log(error)
      toast.dismiss();
      if (autoAlert) {
        const msg = /reason="[A-Za-z0-9_ :"]*/g.exec(error?.message);
        if (error?.message?.includes('user rejected transaction') || String(error).toLowerCase().includes('user rejected')) {
          toast.error('user rejected transaction');
          return;
        }
        if (msg) {
          toast.error(msg as unknown as string);
        } else {
          toast.error(String(error?.message || error));
        }
      } else {
        throw error;
      }
    }
  }
}
