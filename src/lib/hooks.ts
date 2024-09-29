import { RootStore } from "@dappworks/kit"
import { WalletStore } from "@dappworks/kit/wallet"

export const hooks = {
  async waitAccount(chainId: number) {
    const wallet = RootStore.Get(WalletStore)
    return await wallet.prepare(chainId)
  },
  wait(time: number) {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        res()
      }, time)
    })
  }
}
