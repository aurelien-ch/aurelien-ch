import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

import {
  URL,
  APP_NAME,
  APP_DESCRIPTION,
  NETWORK_EXPLORER_URL,
  NETWORK_ID,
  NETWORK_NAME,
  NETWORK_RPC_URL,
  NETWORK_TICKER,
  WC_PROJECT_ID,
} from "@/utils/globals";

const mainnet = {
  chainId: NETWORK_ID,
  name: NETWORK_NAME,
  currency: NETWORK_TICKER,
  explorerUrl: NETWORK_EXPLORER_URL,
  rpcUrl: NETWORK_RPC_URL,
};

const metadata = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: URL,
  icons: [`${URL}/favicon.ico`],
};

const ethersConfig = defaultConfig({
  metadata,
});

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId: WC_PROJECT_ID,
  enableAnalytics: true,
  enableOnramp: true,
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return children;
}
