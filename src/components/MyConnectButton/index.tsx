import { Button } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { observer } from 'mobx-react-lite';

interface IMyConnectButtonProps {
  showChain?: boolean;
  showAccount?: boolean;
}

export const MyConnectButton = observer(({ showChain = true, showAccount = true }: IMyConnectButtonProps) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            className="w-full"
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                width: '100%',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} className="w-full" color="secondary">
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} className="w-full" color="secondary">
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {showChain && (
                    <Button onClick={openChainModal} className="w-full flex items-center justify-start bg-[#f4f4f5] h-[48px]">
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 24,
                            height: 24,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                            fontSize: '1rem',
                            fontWeight: 700,
                          }}
                        >
                          {chain.iconUrl && <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 24, height: 24 }} />}
                        </div>
                      )}
                      {chain.name}
                      <svg
                        aria-hidden="true"
                        fill="none"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="1em"
                        data-slot="selectorIcon"
                        className="absolute right-3 w-unit-4 h-unit-4 transition-transform duration-150 ease motion-reduce:transition-none data-[open=true]:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </Button>
                  )}
                  {showAccount && (
                    <button onClick={openAccountModal} className="flex-1 shadow-[0px 4px 12px rgba(0, 0, 0, 0.1)]">
                      {account.displayName}
                      {account.displayBalance ? ` (${account.displayBalance})` : ''}

                      <svg fill="none" height="7" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          xmlns="http://www.w3.org/2000/svg"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
});
