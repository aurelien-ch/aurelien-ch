import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { RemoveScroll } from "react-remove-scroll";

import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

interface Props {
  src: string | null;
  setZoomedImage: React.Dispatch<React.SetStateAction<string | null>>,
}

const ImageViewer = (p: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (p.src) {
      setImageSrc(p.src);
      setActive(true);
    }
  }, [p.src]);

  const closeViewer = () => {
    setActive(false);
    p.setZoomedImage(null);
  };

  return (
    <ZIndex>
      <RemoveScroll enabled={active}>
        <Container
          ref={containerRef}
          active={active}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e.target === containerRef.current) {
              closeViewer();
            }
          }}
        >
          <CloseIcon onClick={() => closeViewer()} />
          <Image src={imageSrc} />
        </Container>
      </RemoveScroll>
    </ZIndex>
  );
};

export default ImageViewer;

const ZIndex = styled.div`
  z-index: 1;
`;

const Image = styled.img`
  width: 80%;
  border-radius: 2vw;
`;

const Container = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -9vw;
  right: -9vw;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${p => p.active ? 1 : 0};
  visibility: ${p => p.active ? "visible" : "hidden"};
  transition: ${p => p.active ? .4 : .8}s;

  svg {
    position: absolute;
    top: 2vw;
    right: 2vw;
    height: 3vw;
    cursor: pointer;
    transition: .4s;

    &:hover {
      transform: scale(1.1);
    }
  }

  ${Image} {
    transform: scale(${p => p.active ? 1 : 0.9});
    opacity: ${p => p.active ? 1 : 0};
    transition: .4s;
  }
`;