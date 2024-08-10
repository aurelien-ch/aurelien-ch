import Modal from "react-modal";
import styled from "styled-components";

import { MODAL_ANIMATION_DURATION } from "@/utils/globals";
import theme from "@/utils/theme";
import { useResp } from "@/providers/resp-context";

interface Props {
  show: boolean;
  onClose: () => void;
  width: number;
  unclosable?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const CustomModal = (p: Props) => {
  const isMobile = useResp();

  return (
    <Modal
      isOpen={p.show}
      onRequestClose={p.unclosable ? undefined : p.onClose}
      ariaHideApp={false}
      closeTimeoutMS={MODAL_ANIMATION_DURATION}
      style={{
        content: {
          width: isMobile ? "90%" : `${p.width}rem`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "2.4rem" : "3.2rem",
          padding: isMobile ? "1.8rem" : "2.4rem",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.background,
          border: "none",
          borderRadius: "1rem",
          boxShadow: "0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          ...p.style,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      {!p.unclosable ? <CloseIcon src={"/icons/close.svg"} onClick={p.onClose} /> : null}
      {p.children}
    </Modal>
  );
};

export default CustomModal;

const CloseIcon = styled.img`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
