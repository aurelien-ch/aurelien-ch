import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageViewer = (p: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (p.image) {
      setImage(p.image);
      setShow(true);
    }
  }, [p.image]);

  const closeViewer = () => {
    setShow(false);
    p.setImage(null);
  };

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [show]);

  return (
    <Container
      ref={containerRef}
      $show={show}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === containerRef.current) {
          closeViewer();
        }
      }}
    >
      <CloseIcon src={"/icons/close.svg"} alt={"Close"} onClick={closeViewer} />
      <Image src={image} alt={"Mockup"} />
    </Container>
  );
};

export default ImageViewer;

const Image = styled.img`
  max-height: 85vh;
  max-width: 95vw;
`;

const Container = styled.div<{ $show: boolean }>`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(p) => (p.$show ? 1 : 0)};
  visibility: ${(p) => (p.$show ? "visible" : "hidden")};
  transition: 0.3s;

  ${Image} {
    transform: scale(${(p) => (p.$show ? 1 : 0.9)});
    opacity: ${(p) => (p.$show ? 1 : 0)};
    transition:
      transform 0.3s,
      opacity 0.3s;
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  height: auto;
  width: 3rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
