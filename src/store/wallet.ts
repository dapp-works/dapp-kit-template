import { EventEmitter } from 'events';
import { ethers } from 'ethers';
import { SiweMessage } from 'siwe';
import { _ } from '../lib/lodash';
import BigNumber from 'bignumber.js';
import { RootStore, Store, BigNumberState, helper, PromiseHook } from '@dappworks/kit';
import { ToastPlugin } from '@dappworks/kit/plugins';
import { createConfig, useAccount, useBalance, useChainId, useChains, useClient, useConnect, usePublicClient, useSwitchChain, useWalletClient, WagmiConfig, } from 'wagmi';
import { iotex } from 'wagmi/chains';
import { Chain, Wallet, WalletDetailsParams, connectorsForWallets, getDefaultConfig, getWalletConnectConnector, useConnectModal } from '@rainbow-me/rainbowkit';
import { walletConnectWallet, metaMaskWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { Account, PublicClient, Transport, WalletClient, createPublicClient, http } from 'viem';
import { iotexTestnet } from '@/lib/chain';
import { useEffect } from 'react';
import { StorageState } from './standard/StorageState';
import { hooks } from '@/lib/hooks';

const _iotex = {
  iconUrl: 'https://mimo.exchange/images/iotex.svg',
  ...iotex,
};

export const ioPayWallet = (): Wallet => ({
  id: 'ioPay',
  name: 'ioPay',
  iconUrl: 'https://framerusercontent.com/images/zj4bWRK880xDSHFe6mk9E55Lo.png',
  iconBackground: 'transparent',
  hidden: () => {
    if (typeof window !== 'undefined') {
      if (helper.env.isIopayMobile()) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  },
  createConnector: (walletDetails: WalletDetailsParams) => injectedWallet().createConnector(walletDetails),
});

const projectId = '043229b9b9d784a5cfe40fe5f0107811';
export type WalletTransactionHistoryType = { chainId: number, tx?: string, msg: string, timestamp: number, type: 'Approve' | 'Swap' | 'Liquidity', status: 'loading' | 'success' | 'fail' }
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
  walletClient: WalletClient<Transport, Chain, Account>;
  rpcCilentId = '';
  // chain: Chain | undefined;
  get chain() {
    if (!this.chainId) return null
    return this.supportedChains.find((i) => i.id == this.chainId);
  }
  chainId: number | undefined;
  signer: ethers.providers.JsonRpcSigner;
  account: `0x${string}` = '0x...';
  autoConnect: boolean = true;
  connectWithMetamask: any;
  connect: any;
  openConnectModal: () => void;
  isConnect = false;
  balance = PromiseHook.wrap({
    func: async () => {
      if (!this.signer) return new BigNumberState({ value: new BigNumber(0) })
      const balance = await this.signer?.getBalance()
      if (balance) {
        return new BigNumberState({ value: new BigNumber(balance?.toString() ?? '0') });
      }
    }
  })
  history = new StorageState<WalletTransactionHistoryType[] | null>({ value: [], key: 'history' });
  autoSign = true; //auto use swie sign
  event = new EventEmitter();
  rainbowkitParams: any = {};
  supportedChains = [_iotex, iotexTestnet];
  switchChain: (({ chainId }: { chainId: number }) => void) | undefined;
  publicClient: PublicClient;
  writeTicker = 0;
  updateTicker = 0;
  defaultChainId = 4689;

  get supportChainId() {
    if (!this.supportedChains.map((i) => i.id).includes(this.chain?.id as any)) {
      return this.defaultChainId;
    }
    return this.chain?.id || this.defaultChainId;
  }
  getSupportChain(chainId: any) {
    if (!this.supportedChains.map((i) => i.id).includes(chainId)) {
      return _iotex;
    }
    return null;
  }
  getSupportChainId() {
    if (!this.supportedChains.map(i => i.id).includes(this.chain?.id as any)) {
      return this.defaultChainId
    }
    return this.chainId || this.defaultChainId
  }

  constructor(args?: Partial<WalletStore>) {
    Object.assign(this, args);

    // const { chains, publicClient } = configureChains(this.supportedChains, [publicProvider()]);

    // const wallets = [ioPayWallet({ chains }), metaMaskWallet({ projectId, chains }), walletConnectWallet({ projectId, chains })];

    // const connectors = connectorsForWallets([
    //   {
    //     groupName: 'Recommended',
    //     wallets,
    //   },
    // ]);

    // try {
    //   this.publicClient = createPublicClient({
    //     chain: _iotex,
    //     transport: http(),
    //     batch: {
    //       multicall: true,
    //     },
    //   });
    // } catch (e) {
    //   console.error(e);
    // }

    if (typeof window !== 'undefined') {
      if (helper.env.isIopayMobile()) {
        // this.supportedWallets.unshift(iopayWallet);
      }
    }
  }
  //todo: change chain

  get rainbowKitConfig() {
    let transports = {}
    this.supportedChains.forEach((i) => {
      transports[i.id] = http();
    })
    const config = getDefaultConfig({
      appName: 'DappKit demo',
      projectId: 'YOUR_PROJECT_ID',
      //@ts-ignore
      chains: this.supportedChains,
      transports,
      batch: {
        multicall: true,
      },
      wallets: [{
        groupName: 'Recommended',
        wallets: [metaMaskWallet, walletConnectWallet, ioPayWallet],
      }]
    })
    return { chains: this.rainbowkitParams.chains, config };
  }

  use() {
    const { data: walletClient } = useWalletClient();
    this.walletClient = walletClient as WalletClient<Transport, Chain, Account>;
    const chainId = useChainId();
    const { address } = useAccount();
    this.account = address as `0x${string}`;
    this.chainId = chainId;

    useEffect(() => {
      this.updateTicker++;
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        this.signer = provider.getSigner();
        this.publicClient = usePublicClient({ config: this.rainbowKitConfig.config }) as PublicClient;
      } catch (error) { }
    }, [address, chainId]);

    const { chains, switchChain } = useSwitchChain()
    this.switchChain = switchChain;
    const { openConnectModal } = useConnectModal();
    const { connect } = useConnect();

    this.connect = connect;
    this.openConnectModal = openConnectModal as () => void;
    this.balance.call()
  }

  set(args: Partial<WalletStore>) {
    Object.assign(this, args);
  }


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
        if (chainId) {
          this.switchChain?.({ chainId });
        }

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
          const interval = setInterval(async () => {
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
      console.log(error);
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
