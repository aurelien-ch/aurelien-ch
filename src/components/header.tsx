import Link from "next/link";
import styled from "styled-components";
import SVG from "react-inlinesvg";

import { APP_NAME } from "@/utils/globals";
import theme from "@/utils/theme";
import { formatAddress } from "@/helpers/format-address";
import useWeb3Modal from "@/hooks/use-web3-modal";
import Button from "@/components/button";
import MetamaskAvatar from "@/components/metamask-avatar";

const Header = () => {
  const { isConnected, openModal, address, disconnect } = useWeb3Modal();

  return (
    <Container>
      <Link href={"/"}>
        <Title>{APP_NAME}</Title>
      </Link>
      <RightContainer>
        {isConnected ? (
          <AddressContainer>
            <MetamaskAvatar
              address={address}
              size={2}
              style={{ transform: "translateY(0.2rem)" }}
            />
            <Address>{formatAddress(address)}</Address>
            <DisconnectIcon src={"/icons/disconnect.svg"} onClick={disconnect} />
          </AddressContainer>
        ) : (
          <Button title={"Connect"} onClick={openModal} />
        )}
      </RightContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 10rem;
`;

const Title = styled.div`
  font-size: 2.6rem;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const RightContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Address = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  transform: translateY(0.05rem);
`;

const DisconnectIcon = styled(SVG)`
  width: 1.8rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  path {
    fill: ${theme.primary};
  }
`;
