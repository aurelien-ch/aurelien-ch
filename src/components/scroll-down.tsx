import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

import { resp, devices } from "../utils/responsive";

import TypeWriter from "../components/type-writer";

const ScrollDown = () => {
  return (
    <Fade
      triggerOnce
      duration={500}
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
    transform: rotate(45deg) translate(${resp(1.2)}, ${resp(1.2)});
    opacity: 0; 
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: ${resp(5)};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    bottom: ${resp(0)};
  }
`;

const Label = styled.div`
  color: rgba(255, 255, 255, .5);
  font-size: ${resp(1)};
  font-family: CourierPrime;
`;

const Arrow = styled.div`
  height: ${resp(1.2)};
  width: ${resp(1.2)};
  border-right: ${resp(.15)} solid rgba(255, 255, 255, .5);
  border-bottom: ${resp(.15)} solid rgba(255, 255, 255, .5);
  opacity: 0; 
  animation: ${MoveArrow} 2.5s 2.8s ease-in-out infinite;
`;