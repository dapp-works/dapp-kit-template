import { EventEmitter } from "events";
import { TransactionReceipt, TransactionRequest } from "@ethersproject/providers";
import { ethers } from "ethers";
import { makeAutoObservable } from "mobx";
import { SiweMessage } from "siwe";
import { _ } from "../lib/lodash";
import BigNumber from "bignumber.js";
import { RootStore, Store, BigNumberState, helper } from "@dappworks/kit";
import { InjectedConnector } from 'wagmi/connectors/injected';
import { ToastPlugin } from "@dappworks/kit/plugins";
import { Deferrable } from "ethers/lib/utils";
import { Chain, configureChains, createConfig, useAccount, useBalance, useConnect, useNetwork, usePublicClient, useSwitchNetwork, useWalletClient, WagmiConfig, WalletClient } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  iotex,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Wallet, connectorsForWallets, getDefaultWallets, useConnectModal } from "@rainbow-me/rainbowkit";
import { walletConnectWallet, metaMaskWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';

export interface MyWalletOptions {
  chains: Chain[];
}
const _iotex = {
  iconUrl: 'https://mimo.exchange/images/iotex.svg',
  ...iotex
}
export const ioPayWallet = ({ chains, ...options }: MyWalletOptions): Wallet => ({
  id: 'ioPay',
  name: 'ioPay',
  iconUrl: '/images/iopay-wallet.svg',
  iconBackground: 'transparent',
  hidden: ({ wallets }) => {
    if (typeof window !== "undefined") {
      if (helper.env.isIopayMobile()) {
        return false
      }
      return true
    } else {
      return true
    }
  },
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options,
    }),
  }),
});

const projectId = '043229b9b9d784a5cfe40fe5f0107811'

export type NetworkObject = {
  name: string;
  chainId: number;
  rpcUrl: string;
  logoUrl: string;
  explorerUrl: string;
  explorerName: string;
  nativeCoin: string;
  type: "mainnet" | "testnet";
};
export class WalletStore implements Store {
  sid = "wallet";
  autoObservable = true
  rpcCilentId = ''
  chain: Chain | undefined;
  signer: ethers.providers.JsonRpcSigner;
  account: string;
  autoConnect: boolean = true;
  connectWithMetamask: any;
  connect: any;
  openConnectModal: (() => void);
  isConnect = false;
  balance = new BigNumberState({});
  autoSign = true; //auto use swie sign
  event = new EventEmitter();
  rainbowkitParams: any = {}
  supportedChains = [_iotex, mainnet, polygon, optimism]
  switchChain: ((chainId_?: number | undefined) => void) | undefined;
  constructor(args?: Partial<WalletStore>) {
    Object.assign(this, args);

    const { chains, publicClient } = configureChains(
      this.supportedChains,
      [
        publicProvider()
      ]
    );

    const wallets = [
      ioPayWallet({ chains }),
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ]

    const connectors = connectorsForWallets([
      {
        groupName: "Recommended",
        wallets
      },
    ]);

    this.rainbowkitParams = {
      chains, publicClient, wallets, connectors
    }

    if (typeof window !== "undefined") {
      if (helper.env.isIopayMobile()) {
        // this.supportedWallets.unshift(iopayWallet);
      }
    }
  }

  get rainbowKitConfig() {
    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors: this.rainbowkitParams.connectors,
      publicClient: this.rainbowkitParams.publicClient,
    })

    return { chains: this.rainbowkitParams.chains, wagmiConfig }
  }

  use() {
    const { data: walletClient, } = useWalletClient({
      onSuccess: (walletClient) => {
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        this.signer = provider.getSigner();
        console.log(this.signer)
      }
    })
    const { chain, chains } = useNetwork()
    this.chain = chain
    const { switchNetwork } = useSwitchNetwork()
    this.switchChain = switchNetwork;
    const { openConnectModal } = useConnectModal();
    const { address, isConnecting, isConnected, isDisconnected } = useAccount()
    const { connect } = useConnect({
      onSuccess: (res) => {
        console.log(res)
      }
    })
    this.account = address as string;
    const { data: balance, isError, isLoading } = useBalance({
      address: address,
    })
    if (balance?.value.toString()) {
      this.balance.value = new BigNumber(balance?.value.toString() ?? '0')
    }
    if (isConnected) {
      this.isConnect = true
    } else {
      this.isConnect = false
      this.balance.value = new BigNumber('0')
    }


    this.connect = connect
    this.openConnectModal = openConnectModal as (() => void);
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
      console.log(this.account)
      if (this.account) {
        if (Number(this.chain?.id) == Number(chainId)) {
          res()
          return
        }
        const interval = setInterval(() => {
          if (this.switchChain) {
            this.switchChain?.(chainId)
            console.log(this.chain?.id, chainId)
            if (this.chain?.id == chainId) {
              clearInterval(interval)
              res()
            }
          }
        }, 1000)
      } else {
        try {
          this.openConnectModal()
          // this.connect?.({ chainId, connector: this.rainbowkitParams.connectors()[0] }) connect success but ui not change so 
          const interval = setInterval(() => {
            console.log('wait connect', this.account)
            if (this.account) {
              clearInterval(interval)
              res()
            }
          }, 1000)
        } catch (error) {
          rej(error)
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
      version: "1",
    });
    // const signature = await this.wallet.signMessage(message.prepareMessage());
    // return signature;
  }

  async sendTx({
    chainId,
    address,
    data,
    gasPrice = 0,
    value = 0,
    autoAlert = true,
    onSended,
    onSuccess,
    onError,
  }: {
    chainId: number | string;
    address: string;
    data: string;
    value?: string | number;
    gasPrice?: string | number;
    autoRefresh?: boolean;
    autoAlert?: boolean;
    showTransactionSubmitDialog?: boolean;
    onSended?: ({ res }: { res: ethers.providers.TransactionResponse }) => void;
    onSuccess?: ({ res }: { res: TransactionReceipt }) => void;
    onError?: ({ res }: { res: TransactionReceipt }) => void;
  }): Promise<TransactionReceipt | undefined> {
    chainId = Number(chainId);
    const toast = RootStore.Get(ToastPlugin);
    try {
      if (!chainId || !address || !data) throw new Error("chainId, address, data is required");
      const wallet = await RootStore.Get(WalletStore).prepare(chainId);
      let sendTransactionParam: Deferrable<TransactionRequest> = _.omitBy(
        {
          to: address,
          data,
          value: value ? ethers.BigNumber.from(value) : null,
          gasPrice: gasPrice ? ethers.BigNumber.from(gasPrice) : null,
        },
        _.isNil,
      );


      const res = await wallet.signer.sendTransaction(sendTransactionParam);

      onSended ? onSended({ res }) : null;
      const receipt = await res.wait();
      if (receipt.status == 1) {
        onSuccess && onSuccess({ res: receipt });
        toast.success("The transaction was successful");
      } else {
        onError && onError({ res: receipt });
        toast.error("The transaction failed");
      }
      return receipt;
    } catch (error) {
      console.log(error.message)
      const msg = /reason="[A-Za-z0-9_ :"]*/g.exec(error?.message);
      if (error?.message?.includes("user rejected transaction") || String(error).toLowerCase().includes("user rejected")) {
        autoAlert && toast.error("user rejected transaction");
        return;
      }
      if (msg) {
        autoAlert && toast.error(msg as unknown as string);
      } else {
        autoAlert && toast.error(String(error));
      }
    }
  }
}
