import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

import TypeWriter from "../components/type-writer";

const ScrollDown = () => {
  return (
    <Fade
      triggerOnce
      delay={1750}
    >
      <Container>
        <Label>
          <TypeWriter
            text={"Scrollez vers le bas"}
            delay={1750}
          />
        </Label>
        <Arrow />
      </Container>
    </Fade>
  );
};

export default ScrollDown;

const MoveArrow = keyframes`
  0%, 100% {
    transform: rotate(45deg);
    opacity: 0; 
  }

  35%  {
    opacity: 1;
  }

  60% { 
    transform: rotate(45deg) translate(1.2vw, 1.2vw);
    opacity: 0; 
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  color: rgba(255, 255, 255, .4);
  font-size: 1vw;
  font-family: CourierPrime;
`;

const Arrow = styled.div`
  height: 1.2vw;
  width: 1.2vw;
  border-right: .15vw solid rgba(255, 255, 255, .4);
  border-bottom: .15vw solid rgba(255, 255, 255, .4);
  opacity: 0; 
  animation: ${MoveArrow} 2.5s 2.8s ease-in-out infinite;
`;