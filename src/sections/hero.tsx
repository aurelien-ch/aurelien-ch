import styled from "styled-components";

import theme from "@/utils/theme";
import { useScroll } from "@/providers/scroll-context";
import Headlines from "@/components/headlines";
import Card from "@/components/card";
import ScrollDown from "@/components/scroll-down";

const Hero = () => {
  const scrollY = useScroll();

  return (
    <Container $scrollY={scrollY}>
      <Headlines />
      <Card />
      <ScrollDown />
    </Container>
  );
};

export default Hero;

const Container = styled.div<{ $scrollY: number }>`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12rem;

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
