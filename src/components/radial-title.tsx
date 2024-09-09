import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import theme from "@/utils/theme";

interface Props {
  title: string;
}

const RadialTitle = (p: Props) => {
  return (
    <Fade triggerOnce style={{ alignSelf: "center" }}>
      <Container>
        <Background>
          <Radial1 />
          <Radial2 />
          <Radial3 />
        </Background>
        <Title>{p.title}</Title>
      </Container>
    </Fade>
  );
};

export default RadialTitle;

const Container = styled.div`
  position: relative;
  padding: 4rem;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Radial = styled.div`
  position: absolute;
  height: 20rem;
  width: 100%;
  filter: blur(5rem);
  opacity: 0.5;
`;

const Radial1 = styled(Radial)`
  background: radial-gradient(50% 50% at 50% 50%, ${theme.radial1} 50%, transparent);
  transform: translateX(-15rem);
`;

const Radial2 = styled(Radial)`
  background: radial-gradient(50% 50% at 50% 50%, ${theme.radial2} 50%, transparent);
`;

const Radial3 = styled(Radial)`
  background: radial-gradient(50% 50% at 50% 50%, ${theme.radial3} 50%, transparent);
  transform: translateX(15rem);
`;

const Title = styled.div`
  mix-blend-mode: overlay;
  opacity: 0.5;
  font-weight: 800;
  font-size: 8rem;
  text-shadow: 0 0 4rem rgba(0, 0, 0, 0.3);
`;
