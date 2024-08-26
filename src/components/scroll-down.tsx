import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

const ScrollDown = () => {
  return (
    <Container>
      <Fade
        triggerOnce
        delay={4000}
      >
        <Arrow />
      </Fade>
    </Container>
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
    transform: rotate(45deg) translate(1.2rem, 1.2rem);
    opacity: 0; 
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Arrow = styled.div`
  height: 2rem;
  width: 2rem;
  border-right: .2rem solid rgba(255, 255, 255, .5);
  border-bottom: .2rem solid rgba(255, 255, 255, .5);
  opacity: 0; 
  animation: ${MoveArrow} 2.5s 2.8s ease-in-out infinite;
`;