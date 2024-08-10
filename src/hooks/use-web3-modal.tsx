import {
  useDisconnect,
  useWeb3Modal as useWeb3ModalLib,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const useWeb3Modal = () => {
  const { walletProvider } = useWeb3ModalProvider();
  const { open } = useWeb3ModalLib();
  const { isConnected, address } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  const openModal = () => {
    try {
      open();
    } catch (_e) {
      open();
    }
  };

  return {
    walletProvider,
    openModal,
    isConnected,
    address: address || "",
    disconnect,
  };
};

export default useWeb3Modal;
