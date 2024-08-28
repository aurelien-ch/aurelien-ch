import styled from "styled-components";

import theme from "@/utils/theme";
import Headlines from "@/components/headlines";
import Card from "@/components/card";
import ScrollDown from "@/components/scroll-down";

interface Props {
  scrollY: number;
}

const Hero = (p: Props) => {
  return (
    <Container $scrollY={p.scrollY}>
      <Headlines />
      <Card />
      <ScrollDown />
    </Container>
  );
};

export default Hero;

const Container = styled.div<{ $scrollY: number }>`
  z-index: 1;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.backgroundGradient};
    transform: scale(
      ${(p) => Math.max(1.01 - p.$scrollY / 2000, 0.96)},
      ${(p) => Math.max(1.01 - p.$scrollY / 3000, 0.98)}
    );
    border-radius: 2rem;
  }
`;
