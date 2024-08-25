import styled from "styled-components";

import Modal from "@/components/modals/modal";

import Button from "@/components/button";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  content: React.ReactNode;
  buttonTitle: string;
  onAction: () => void;
}

const InfoModal = (p: Props) => {
  return (
    <Modal show={p.show} onClose={() => p.setShow(false)} width={46}>
      <Title>{p.title}</Title>
      <Content>{p.content}</Content>
      <Button title={p.buttonTitle} onClick={p.onAction} style={{ width: "100%" }} />
    </Modal>
  );
};

export default InfoModal;

const Title = styled.div`
  width: 26rem;
  text-align: center;
  font-size: 1.6rem;
`;

const Content = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
`;
